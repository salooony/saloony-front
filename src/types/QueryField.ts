import { Item } from '@src/components/inputs/search-bar/constants';

interface QueryFieldPropsBase {
  query: string;
  readOnly: boolean;
  onOuterMouseDown?: () => void;
  disableFocusStyle?: boolean;
  onSelectQuery?: () => void
  variant?: 'home' | 'search' | 'without-location';
  isExpanded?: boolean;
}

interface QueryFieldEditableProps extends QueryFieldPropsBase {
  readOnly: false;
  setQuery: (val: string) => void;
  focusedInput: 'query' | 'location' | 'date' | null;
  setFocusedInput: (val: 'query' | 'location' | 'date' | null) => void;
  suggestions: Item[];
  isLoading: boolean;
  highlightedIndex: number | null;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

interface QueryFieldReadOnlyProps extends QueryFieldPropsBase {
  readOnly: true;
}

export type QueryFieldProps = QueryFieldEditableProps | QueryFieldReadOnlyProps;
