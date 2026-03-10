import { Item } from '@src/components/inputs/search-bar/constants';
import { MainLayoutType } from '@src/config';

export interface searchBarProps {
  variant?: MainLayoutType;
  initialQuery?: string;
  initialLocation?: Item | null;
  onFocusChange?: (isExpanded: boolean) => void;
  enableExpand?: boolean;
}