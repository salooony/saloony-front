import { Item } from '@src/components/inputs/search-bar/constants';

export interface LocationFieldProps {
  location: { id: number; name: string } | null;
  setLocation: (val: { id: number; name: string } | null) => void;
  focusedInput: 'query' | 'location' | 'date' | null;
  setFocusedInput: (val: 'query' | 'location' | 'date' | null) => void;
  suggestions: Item[];
  isLoading: boolean;
  highlightedIndex: number;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  disableFocusStyle?: boolean;
  variant?: 'home' | 'search' | 'without-location';
  isExpanded?: boolean;
}
