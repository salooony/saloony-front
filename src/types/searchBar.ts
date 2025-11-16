import { Item } from '@src/components/inputs/search-bar/constants';

export interface searchBarProps {
  variant?: 'home' | 'search' | 'without-location';
  initialQuery?: string;
  initialLocation?: Item | null;
  onFocusChange?: (isExpanded: boolean) => void;
  enableExpand?: boolean;
}