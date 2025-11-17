import { FocusedInputType, MainLayoutType } from '@src/config';
import { Dayjs } from 'dayjs';

export interface DateFieldProps {
  focusedInput: FocusedInputType | null;
  setFocusedInput: (val: FocusedInputType | null) => void;
  disableFocusStyle?: boolean;
  selectedDate: Dayjs | null;
  setSelectedDate: (val: Dayjs | null) => void;
  variant?: MainLayoutType;
  isExpanded?: boolean;
  searchBarRef?: React.RefObject<HTMLElement | null>;
  onOpenChange?: (open: boolean) => void;
}
