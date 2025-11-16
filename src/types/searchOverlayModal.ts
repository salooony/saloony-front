import { Item } from '@src/components/inputs/search-bar/constants';

export interface SearchOverlayModalProps {
  open: boolean;
  onClose: () => void;
  query: string;
  setQuery: (val: string) => void;
  location: Item | null;
  setLocation: (val: Item | null) => void;
  focusedInput: 'query' | 'location' | 'date' | null;
  setFocusedInput: (val: 'query' | 'location' | 'date' | null) => void;
  suggestions: Item[];
  isLoading: boolean;
  highlightedIndex: number;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
  isSearchDisabled: boolean;
  variant?: 'home' | 'search' | 'without-location';
}
