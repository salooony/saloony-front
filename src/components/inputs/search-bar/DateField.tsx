'use client';

import { useState, useRef, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { JSX } from 'react';
import { searchBoxStyle } from './style';
import { DateFieldProps } from '@src/types/DateField';
import { Dayjs } from 'dayjs';
import { FocusedInputType } from '@src/config';
import useClickOutside from './useClickOutside';

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
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const popperRef = useRef<HTMLElement | null>(null);

  useEffect(() => {}, [focusedInput]);

  useClickOutside([containerRef, searchBarRef!, popperRef], () => {
    setFocusedInput(null);
    setOpen(false);
  });

  // Keep a reference to the DatePicker popper (it is rendered in a portal)
  useEffect(() => {
    if (open) {
      // small delay to allow popper to be rendered
      const t = setTimeout(() => {
        const el = document.querySelector('.MuiPickersPopper-root, [role="dialog"].MuiPaper-root') as HTMLElement | null;
        popperRef.current = el;
      }, 0);
      return () => clearTimeout(t);
    }
    popperRef.current = null;
    return undefined;
  }, [open]);

  useEffect(() => {
    if (onOpenChange) onOpenChange(open);
  }, [open, onOpenChange]);

  const handleDateChange = (newValue: Dayjs | null) => {
    setSelectedDate(newValue);
    if (onDateChange) onDateChange(newValue);
    // If the search bar is in expanded mode, keep the calendar open so
    // the user can continue interacting with it. Otherwise close it after selection.
    if (!isExpanded) setOpen(false);
  };

  const handleFocus = () => {
    setFocusedInput(FocusedInputType.DATE);
  };

  const handleFieldClick = () => {
    setFocusedInput(FocusedInputType.DATE);
    setOpen(true);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        ref={containerRef}
        sx={searchBoxStyle(
          theme,
          !disableFocusStyle && focusedInput === FocusedInputType.DATE ? FocusedInputType.DATE : null,
          FocusedInputType.DATE,
          variant,
          isExpanded
        )}
        onClick={handleFieldClick}
      >
        {isExpanded && (
          <Typography variant="h5" component="label" htmlFor="date-input">
            When?
          </Typography>
        )}

        <DatePicker
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          value={selectedDate}
          onChange={handleDateChange}
          slotProps={{
            textField: {
              id: 'date-input',
              fullWidth: true,
              variant: 'standard',
              placeholder: 'At any time',
              InputProps: {
                disableUnderline: true
              },
              onFocus: handleFocus,
              sx: {
                '& .MuiInputBase-input::placeholder': {
                  color: 'common.black',
                  opacity: 1
                }
              }
            }
          }}
        />
      </Box>
    </LocalizationProvider>
  );
}
