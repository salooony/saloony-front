import { Item } from '@src/components/inputs/search-bar/constants';
import { FocusedInputType, MainLayoutType } from '@src/config';

export interface SearchOverlayModalProps {
  open: boolean;
  onClose: () => void;
  query: string;
  setQuery: (val: string) => void;
  location: Item | null;
  setLocation: (val: Item | null) => void;
  focusedInput: SearchFieldOrNull;
  setFocusedInput: (val: SearchFieldOrNull) => void;
  suggestions: Item[];
  isLoading: boolean;
  highlightedIndex: number;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
  isSearchDisabled: boolean;
  variant?: MainLayoutType;
  activeField: FocusedInputType;
  setActiveField: (field: FocusedInputType) => void;
}
