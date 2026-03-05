import { Item } from '@src/components/inputs/search-bar/constants';
import { SearchFieldOrNull } from './searchField';
import { MainLayoutType } from '@src/config';

interface QueryFieldPropsBase {
  query: string;
  readOnly: boolean;
  onOuterMouseDown?: () => void;
  disableFocusStyle?: boolean;
  onSelectQuery?: () => void;
  variant?: MainLayoutType;
}

interface QueryFieldEditableProps extends QueryFieldPropsBase {
  readOnly: false;
  setQuery: (val: string) => void;
  focusedInput: SearchFieldOrNull;
  setFocusedInput: (val: SearchFieldOrNull) => void;
  suggestions: Item[];
  isLoading: boolean;
  highlightedIndex: number | null;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

interface QueryFieldReadOnlyProps extends QueryFieldPropsBase {
  readOnly: true;
}

export type QueryFieldProps = QueryFieldEditableProps | QueryFieldReadOnlyProps;
