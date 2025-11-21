import { useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { Salon, ServiceItem, ADDRESSES, SERVICES } from '@src/components/inputs/search-bar/constants';
import { useSearchParams } from 'next/navigation';
import { FocusedInputType } from '@src/config';

dayjs.extend(isBetween);

export default function useSearchResults(initialQuery?: string, initialLocation?: string, initialDate?: string) {
  const searchParams = useSearchParams();
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [openFields, setOpenFields] = useState(false);

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

  const isOpenAtTime = (salon: Salon, selectedDate: Dayjs | null): boolean => {
    if (!selectedDate) return true;

    const dayName = getDayName(selectedDate);
    const schedule = salon.openingHours[dayName];

    if (!schedule || schedule.isClosed) return false;

    const [oh, om] = schedule.open!.split(':').map(Number);
    const [ch, cm] = schedule.close!.split(':').map(Number);

    const start = selectedDate.clone().set('hour', oh).set('minute', om);
    const end = selectedDate.clone().set('hour', ch).set('minute', cm);

    return selectedDate.isBetween(start, end, null, '[]');
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

  const normalizedQuery = initialQuery?.toLowerCase().trim() || '';

  const locationItem = ADDRESSES.find((addr) => addr.name.toLowerCase() === initialLocation?.toLowerCase());
  const locationId = locationItem?.id;

  const allSalons = SERVICES.flatMap((service: ServiceItem) =>
    (service.salons || []).map((salon) => ({
      ...salon,
      serviceName: service.name,
    }))
  );

  const filteredSalons = allSalons.filter((salon) => {
    const nameMatch = salon.name.toLowerCase().includes(normalizedQuery) || salon.serviceName.toLowerCase().includes(normalizedQuery);

    const locationMatch = !initialLocation || salon.locationId === locationId;

    const timeMatch = !selectedDate || isOpenAtTime(salon, selectedDate);

    return nameMatch && locationMatch && timeMatch;
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
