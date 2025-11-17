'use client';

import { Box, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { SERVICES, ADDRESSES, Salon, ServiceItem } from '@src/components/inputs/search-bar/constants';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FocusedInputType } from '@src/config';

dayjs.extend(isBetween);

interface SearchResultsProps {
  query?: string;
  location?: string;
  initialDate?: string;
}

const getDayName = (date: Dayjs): string => {
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  return days[date.day()];
};

const isOpenAtTime = (salon: Salon, selectedDate: Dayjs | null): boolean => {
  if (!selectedDate) return true;

  try {
    const dayName = getDayName(selectedDate);
    const schedule = salon.openingHours[dayName];

    if (!schedule || schedule.isClosed) return false;

    const [openHour, openMinute] = schedule.open.split(':').map(Number);
    const [closeHour, closeMinute] = schedule.close.split(':').map(Number);

    const openTime = selectedDate.clone().set('hour', openHour).set('minute', openMinute);
    const closeTime = selectedDate.clone().set('hour', closeHour).set('minute', closeMinute);

    return selectedDate.isBetween(openTime, closeTime, null, '[]');
  } catch (error) {
    console.error("Error checking opening hours:", error);
    return false;
  }
};

const getOpeningHoursForDay = (salon: Salon, selectedDate: Dayjs | null): string => {
  if (!selectedDate) return '';

  const dayName = getDayName(selectedDate);
  const schedule = salon.openingHours[dayName];

  if (!schedule || schedule.isClosed) return 'Closed';
  if (!schedule.open || !schedule.close) return 'Not available';

  return `${schedule.open} - ${schedule.close}`;
};

const createDayjsWithCurrentTime = (dateString: string): Dayjs | null => {
  if (!dateString) return null;

  const dateOnly = dayjs(dateString);
  const now = dayjs();

  return dateOnly
    .hour(now.hour())
    .minute(now.minute())
    .second(now.second());
};

export default function SearchResults({ query, location, initialDate }: SearchResultsProps) {
  const searchParams = useSearchParams();
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  useEffect(() => {
    const dateParam = searchParams.get(FocusedInputType.DATE) || initialDate;

    if (dateParam) {
      setSelectedDate(createDayjsWithCurrentTime(dateParam));
    } else {
      setSelectedDate(null);
    }
  }, [searchParams, initialDate]);

  const normalizedQuery = query?.toLowerCase().trim() || '';
  const locationItem = ADDRESSES.find(addr =>
    addr.name.toLowerCase() === location?.toLowerCase()
  );
  const locationId = locationItem?.id;

  const allSalons: (Salon & { serviceName: string })[] = SERVICES.flatMap(
    (service: ServiceItem) =>
      (service.salons || []).map(salon => ({
        ...salon,
        serviceName: service.name,
      }))
  );

  const filteredSalons = allSalons.filter(salon => {
    const nameMatch =
      salon.name.toLowerCase().includes(normalizedQuery) ||
      salon.serviceName.toLowerCase().includes(normalizedQuery);

    const locationMatch = !location || !locationId || salon.locationId === locationId;

    const timeMatch = !selectedDate || isOpenAtTime(salon, selectedDate);

    return nameMatch && locationMatch && timeMatch;
  });

  return (
    <Box sx={{ p: 12, mt: 8 }}>
      <Paper sx={{ p: 2, mb: 2, backgroundColor: 'grey.50' }}>
        <Typography variant="h6" gutterBottom>
          Search Results:
        </Typography>

        <Typography variant="body1">
          <strong>Service:</strong> {query || 'All services'}
        </Typography>

        <Typography variant="body1">
          <strong>Location:</strong> {location || 'All locations'}
        </Typography>

        <Typography variant="body1">
          <strong>Day & Time:</strong>{' '}
          {selectedDate
            ? selectedDate.format('YYYY-MM-DD HH:mm (dddd)')
            : 'Any time'}
        </Typography>

        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ mt: 1 }}
        >
          Found {filteredSalons.length} salons
        </Typography>
      </Paper>

      {filteredSalons.length === 0 ? (
        <Paper sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h6" color="textSecondary">
            No salons found matching your search criteria
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
            Try changing your search criteria or select a different time
          </Typography>
        </Paper>
      ) : (
        <List>
          {filteredSalons.map(salon => (
            <ListItem
              key={`${salon.serviceName}-${salon.id}`}
              sx={{
                border: '1px solid',
                borderColor: 'grey.200',
                borderRadius: 1,
                mb: 1,
                '&:hover': { backgroundColor: 'grey.50' },
              }}
            >
              <ListItemText
                primary={
                  <Typography
                    variant="h6"
                    component="span"
                    sx={{
                      fontWeight: 'bold',
                      color: 'primary.main',
                    }}
                  >
                    {salon.name}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography variant="body1" component="span" display="block">
                      {salon.serviceName}
                    </Typography>

                    <Typography variant="body2" component="span" display="block">
                      {locationItem?.name || 'Location not specified'}
                    </Typography>

                    <Typography
                      variant="body2"
                      component="span"
                      display="block"
                      color={
                        isOpenAtTime(salon, selectedDate)
                          ? 'success.main'
                          : 'error.main'
                      }
                    >
                      {selectedDate ? (
                        <>
                          {getOpeningHoursForDay(salon, selectedDate)}
                          {isOpenAtTime(salon, selectedDate)
                            ? ' - Open now'
                            : ' - Closed now'}
                        </>
                      ) : (
                        'Opening hours available'
                      )}
                    </Typography>
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
}
