import { Item } from '@src/components/inputs/search-bar/constants';

export interface UseSearchBarProps {
  isMdScreen: boolean;
  initialQuery?: string;
  initialLocation?: Item | null;
}
