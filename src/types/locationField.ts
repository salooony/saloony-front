import { Item } from '@src/components/inputs/search-bar/constants';

export interface LocationFieldProps {
  location: { id: number; name: string } | null;
  setLocation: (val: { id: number; name: string } | null) => void;
  focusedInput: 'query' | 'location' | null;
  setFocusedInput: (val: 'query' | 'location' | null) => void;
  suggestions: Item[];
  isLoading: boolean;
  highlightedIndex: number;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  disableFocusStyle?: boolean;
}
