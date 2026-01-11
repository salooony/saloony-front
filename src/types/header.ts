import { MainLayoutType } from '@src/config';

export interface HeaderProps {
  variant?: MainLayoutType;
  initialQuery?: string;
  initialLocation?: string;
}
export enum HeaderVariant {
  HOME = 'home',
  SEARCH = 'search'
}
