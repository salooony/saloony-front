import { MainLayoutType } from '@src/config';

export interface HeaderProps {
  variant?: MainLayoutType;
  initialQuery?: string;
  initialLocation?: string;
}