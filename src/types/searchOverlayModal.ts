import { Item } from '@src/components/inputs/search-bar/constants';
import { FocusedInputType, MainLayoutType } from '@src/config';
import { Dayjs } from 'dayjs';

export interface SearchOverlayModalProps {
  open: boolean;
  onClose: () => void;
  query: string;
  setQuery: (val: string) => void;
  location: Item | null;
  setLocation: (val: Item | null) => void;
  focusedInput: FocusedInputType | null;
  setFocusedInput: (val: FocusedInputType | null) => void;
  suggestions: Item[];
  isLoading: boolean;
  highlightedIndex: number;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
  isSearchDisabled: boolean;
  variant?: MainLayoutType;
  activeField: FocusedInputType;
  setActiveField: (field: FocusedInputType) => void;
  selectedDate?: Dayjs | null;
  setSelectedDate?: (val: Dayjs | null) => void;
  setDatePickerOpen?: (open: boolean) => void;
}
