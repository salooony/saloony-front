'use client';

import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { JSX } from 'react';
import { searchBoxStyle } from './style';
import { DateFieldProps } from '@src/types/DateField';
import { Dayjs } from 'dayjs';

export default function DateField({
  focusedInput,
  setFocusedInput,
  selectedDate,
  setSelectedDate,
  disableFocusStyle,
  onDateChange,
  variant,
  isExpanded,
}: DateFieldProps & { onDateChange?: (date: Dayjs | null) => void }): JSX.Element {
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const [justClosed, setJustClosed] = useState(false); // يمنع الفتح مباشرة بعد الإغلاق

  const handleDateChange = (newValue: Dayjs | null) => {
    setSelectedDate(newValue);
    if (onDateChange) onDateChange(newValue);

    setOpen(false);       // اغلاق الكاليندر عند اختيار التاريخ
    setJustClosed(true);  // منع الفتح اللحظي

    setTimeout(() => setJustClosed(false), 100); // رجوع الفتح الطبيعي بعد 0.1 ثانية
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={searchBoxStyle(
          theme,
          !disableFocusStyle && focusedInput === 'date' ? 'date' : null,
          'date',
          variant,
          isExpanded
        )}
        onClick={() => setFocusedInput('date')}
      >
        {isExpanded && (
          <Typography variant="h5" component="label" htmlFor="date-input">
            when?
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
              InputProps: { disableUnderline: true },
              onFocus: () => {
                if (!justClosed) {
                  setOpen(true); // يفتح فقط عندما لا يكون هناك منع مؤقت
                }
              },
              sx: {
                '& .MuiInputBase-input::placeholder': {
                  color: theme.palette.common.black,
                  opacity: 1,
                },
              },
            },
          }}
        />
      </Box>
    </LocalizationProvider>
  );
}
