import { Item } from '@src/components/inputs/search-bar/constants';

export interface SearchOverlayModalProps {
  open: boolean;
  onClose: () => void;
  query: string;
  setQuery: (val: string) => void;
  location: Item | null;
  setLocation: (val: Item | null) => void;
  focusedInput: 'query' | 'location' | null;
  setFocusedInput: (val: 'query' | 'location' | null) => void;
  suggestions: Item[];
  isLoading: boolean;
  highlightedIndex: number;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
  isSearchDisabled: boolean;
}
