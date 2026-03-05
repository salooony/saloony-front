import { MainLayoutType } from '@src/config';
import { ReactNode } from 'react';

export interface mainLayoutProps {
  readonly children: ReactNode;
  variant?: MainLayoutType;
}
