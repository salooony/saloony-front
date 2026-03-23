import { useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { Salon, ServiceItem, ADDRESSES, SERVICES } from '@src/components/inputs/search-bar/constants';
import { useSearchParams } from 'next/navigation';
import { FocusedInputType } from '@src/config';
import { AvailabilityOption, SortOption } from '@src/types/filter';

dayjs.extend(isBetween);

export default function useSearchResults(initialQuery?: string, initialLocation?: string, initialDate?: string) {
  const searchParams = useSearchParams();
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [openFields, setOpenFields] = useState(false);

  const availability = (searchParams.get('availability') as AvailabilityOption) || AvailabilityOption.ANY;
  const sortBy = (searchParams.get('sort') as SortOption) || SortOption.NONE;
  const pickedDate = searchParams.get('date');

  const getDayName = (date: Dayjs): string => {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    return days[date.day()];
  };

  const createDayjsWithCurrentTime = (dateString: string): Dayjs | null => {
    if (!dateString) return null;
    const dateOnly = dayjs(dateString);
    const now = dayjs();
    return dateOnly.hour(now.hour()).minute(now.minute()).second(now.second());
  };

  const isOpenAtTime = (salon: Salon, checkDate: Dayjs | null, ignoreTime = false): boolean => {
    if (!checkDate) return true;

    const dayName = getDayName(checkDate);
    const schedule = salon.openingHours[dayName];

    if (!schedule || schedule.isClosed) return false;
    if (ignoreTime) return true;

    if (!schedule.open || !schedule.close) return false;

    const [oh, om] = schedule.open.split(':').map(Number);
    const [ch, cm] = schedule.close.split(':').map(Number);

    const start = checkDate.clone().set('hour', oh).set('minute', om).set('second', 0).set('millisecond', 0);
    const end = checkDate.clone().set('hour', ch).set('minute', cm).set('second', 0).set('millisecond', 0);

    return checkDate.isBetween(start, end, null, '[]');
  };

  const getOpeningHoursForDay = (salon: Salon, date: Dayjs | null): string => {
    if (!date) return '';
    const dayName = getDayName(date);
    const schedule = salon.openingHours[dayName];
    if (!schedule || schedule.isClosed) return 'Closed';
    return `${schedule.open} - ${schedule.close}`;
  };

  useEffect(() => {
    const dateParam = searchParams.get(FocusedInputType.DATE) || initialDate;
    setSelectedDate(dateParam ? createDayjsWithCurrentTime(dateParam) : null);
  }, [searchParams, initialDate]);

  // Resolve the effective date for availability filtering from the Redux filter state
  const resolveFilterDate = (): Dayjs | null => {
    if (availability === AvailabilityOption.ANY) return null;
    if (availability === AvailabilityOption.TODAY) return dayjs();
    if (availability === AvailabilityOption.TOMORROW) return dayjs().add(1, 'day');
    if (availability === AvailabilityOption.PICK && pickedDate) return dayjs(pickedDate);
    return null;
  };

  const filterDate = resolveFilterDate();

  const normalizedQuery = initialQuery?.toLowerCase().trim() || '';

  const locationItem = ADDRESSES.find((addr) => addr.name.toLowerCase() === initialLocation?.toLowerCase());
  const locationId = locationItem?.id;

  const allSalons = SERVICES.flatMap((service: ServiceItem) =>
    (service.salons || []).map((salon) => ({
      ...salon,
      serviceName: service.name
    }))
  );

  const filteredSalons = allSalons
    .filter((salon) => {
      const nameMatch = salon.name.toLowerCase().includes(normalizedQuery) || salon.serviceName.toLowerCase().includes(normalizedQuery);

      const locationMatch = !initialLocation || salon.locationId === locationId;

      // Use filterDate (from URL) when set, otherwise fall back to selectedDate (from SearchBar)
      const effectiveDate = filterDate ?? selectedDate;
      const isFilter = !!filterDate;
      const timeMatch = !effectiveDate || isOpenAtTime(salon, effectiveDate, isFilter);

      return nameMatch && locationMatch && timeMatch;
    })
    .sort((a, b) => {
      if (sortBy === SortOption.TOP_RATED) {
        return (b.rating ?? 0) - (a.rating ?? 0);
      }
      if (sortBy === SortOption.PRICE_DESC) {
        return (b.startingPrice ?? 0) - (a.startingPrice ?? 0);
      }
      if (sortBy === SortOption.PRICE_ASC) {
        return (a.startingPrice ?? 0) - (b.startingPrice ?? 0);
      }
      return 0; // SortOption.NONE — preserve DB order
    });

  return {
    selectedDate,
    setSelectedDate,
    openFields,
    setOpenFields,
    locationItem,
    filteredSalons,
    isOpenAtTime,
    getOpeningHoursForDay
  };
}
