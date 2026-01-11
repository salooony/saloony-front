import { Item } from '@src/components/inputs/search-bar/constants';
import { SearchFieldOrNull } from './searchField';

export interface LocationFieldProps {
  location: { id: number; name: string } | null;
  setLocation: (val: { id: number; name: string } | null) => void;
  focusedInput: SearchFieldOrNull;
  setFocusedInput: (val: SearchFieldOrNull) => void;
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
