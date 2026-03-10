import { Item } from '@src/components/inputs/search-bar/constants';
import { FocusedInputType, MainLayoutType } from '@src/config';

export interface LocationFieldProps {
  location: { id: number; name: string } | null;
  setLocation: (val: { id: number; name: string } | null) => void;
  focusedInput: FocusedInputType | null;
  setFocusedInput: (val: FocusedInputType | null) => void;
  suggestions: Item[];
  isLoading: boolean;
  highlightedIndex: number;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  disableFocusStyle?: boolean;
  variant?: MainLayoutType;
  isExpanded?: boolean;
  searchBarRef?: React.RefObject<HTMLElement | null>;
  datePickerOpen?: boolean;
}
