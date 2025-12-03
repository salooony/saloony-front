'use client';

import { useRef, useEffect } from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { JSX } from 'react';
import { calendarButton, calendarLayout, calendarPopper, CalenderToolbar, noWrapStyle, searchBoxStyle } from './style';
import { DateFieldProps } from '@src/types/DateField';
import dayjs, { Dayjs } from 'dayjs';
import { FocusedInputType } from '@src/config';
import useClickOutside from './useClickOutside';
import { useIsMdScreen } from '@src/constants/breakpoints';

export default function DateField({
  focusedInput,
  setFocusedInput,
  selectedDate,
  setSelectedDate,
  disableFocusStyle,
  onDateChange,
  onOpenChange,
  variant,
  isExpanded,
  searchBarRef
}: DateFieldProps & { onDateChange?: (date: Dayjs | null) => void }): JSX.Element {
  const theme = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const isOpen = focusedInput === FocusedInputType.DATE;
  const isMdScreen = useIsMdScreen();


  useClickOutside([containerRef, searchBarRef!], (event) => {
    if (!event) return;
    let el = event.target as HTMLElement | null;
    while (el) {
      const cn = el.className;
      if (typeof cn === 'string' && /Mui.*(Pickers|Calendar|Day|Popper)/.test(cn)) return;
      if (el.getAttribute && (el.getAttribute('role') === 'dialog' || el.hasAttribute('data-mui'))) return;
      el = el.parentElement;
    }
    setFocusedInput(null);
  });

  useEffect(() => {
    if (onOpenChange) onOpenChange(isOpen);
  }, [isOpen, onOpenChange]);

  const handleDateChange = (newValue: Dayjs | null) => {
    setSelectedDate(newValue);
    if (onDateChange) onDateChange(newValue);
    setFocusedInput(null);
  };

  const handleFieldClick = () => setFocusedInput(FocusedInputType.DATE);
  const goToToday = () => handleDateChange(dayjs());
  const goToTomorrow = () => handleDateChange(dayjs().add(1, 'day'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        ref={containerRef}
        sx={{
          ...searchBoxStyle(
            theme,
            !disableFocusStyle && focusedInput === FocusedInputType.DATE ? FocusedInputType.DATE : null,
            FocusedInputType.DATE,
            variant,
            isExpanded
          )
        }}
        onClick={handleFieldClick}
      >
        {isExpanded && (
          <Typography variant="h5" component="label" htmlFor="date-input">
            When?
          </Typography>
        )}

        <DatePicker
          open={isOpen}
          onOpen={() => setFocusedInput(FocusedInputType.DATE)}
          onClose={() => setFocusedInput(null)}
          value={selectedDate}
          onChange={handleDateChange}
          enableAccessibleFieldDOMStructure={false}
          orientation="portrait"
          views={['month', 'day']}
          format="DD/MM/YYYY"
          slotProps={{
            layout: { sx: calendarLayout },
            popper: { sx: calendarPopper(theme, isMdScreen) },

            textField: (params: any) => ({
              id: 'date-input',
              fullWidth: true,
              variant: 'standard',
              inputProps: {
                ...params.inputProps,
                placeholder: 'At any time',
              },
              InputProps: {
                ...params.InputProps,
                disableUnderline: true,
              },
              onFocus: () => setFocusedInput(FocusedInputType.DATE),
              sx: {
                '& .MuiInputBase-input': {
                  ...noWrapStyle
                },
                '& .MuiInputBase-input::placeholder': {
                  color: theme.palette.common.black,
                  opacity: 1,
                },
              },
            })
          }}
          slots={{
            toolbar: () => (
              <Stack direction="row" spacing={1} sx={CalenderToolbar(theme)}>
                <Button variant="outlined" size="small" onClick={goToToday} sx={calendarButton(theme)}>
                  Today
                </Button>

                <Button variant="outlined" size="small" onClick={goToTomorrow} sx={calendarButton(theme)}>
                  Tomorrow
                </Button>

                <Button variant="outlined" size="small" onClick={() => handleDateChange(null)} sx={calendarButton(theme)}>
                  At any time
                </Button>

              </Stack>
            ),
          }}
        />
      </Box>
    </LocalizationProvider>
  );
}
