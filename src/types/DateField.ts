import { Dayjs } from 'dayjs';

export interface DateFieldProps {
  focusedInput: 'query' | 'location' | 'date' | null;
  setFocusedInput: (val: 'query' | 'location' | 'date' | null) => void;
  disableFocusStyle?: boolean;
  selectedDate: Dayjs | null;
  setSelectedDate: (val: Dayjs | null) => void;
  variant?: 'home' | 'search' | 'without-location';
  isExpanded?: boolean;
}
