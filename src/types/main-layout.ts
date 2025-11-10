import { ReactNode } from 'react';

export interface mainLayoutProps {
  readonly children: ReactNode;
  variant?: 'home' | 'search' | 'without-location';
}