// project imports
import { ReactElement } from 'react';
import { Metadata } from 'next';
import GuestGuard from 'utils/route-guard/GuestGuard';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Sign in or sign up to continue'
};
interface LayoutProps {
  children: ReactElement | null;
}

export default function Layout({ children }: LayoutProps) {
  return <GuestGuard>{children}</GuestGuard>;
}
