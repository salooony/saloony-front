import { Metadata } from 'next';
import GuestGuard from 'utils/route-guard/GuestGuard';
import { GuardProps } from 'types/auth';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Sign in or sign up to continue'
};

export default function Layout({ children }: GuardProps) {
  return <GuestGuard>{children}</GuestGuard>;
}
