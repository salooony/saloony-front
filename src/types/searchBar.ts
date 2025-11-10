import { Item } from '@src/components/inputs/search-bar/constants';

export interface searchBarProps {
  variant?: string;
  initialQuery?: string;
  initialLocation?: Item | null;
}