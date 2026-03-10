'use client';

import { JSX, lazy, Suspense } from 'react';
import Loader from 'components/Loader';
import { ScrollProvider } from 'contexts/scrollProvider';
import { mainLayoutProps } from '@src/types/main-layout';
import { MainLayoutType } from '@src/config';
const Header = lazy(() => import('./header'));
const FooterBlock = lazy(() => import('./footer'));

export default function MainLayout({
  children,
  variant = MainLayoutType.HOME,
  query = '',
  location = ''
}: mainLayoutProps & { query?: string; location?: string }): JSX.Element {
  return (
    <ScrollProvider>
      <Suspense fallback={<Loader />}>
        <Header variant={variant} initialQuery={query} initialLocation={location} />
        {children}
        <FooterBlock />
      </Suspense>
    </ScrollProvider>
  );
}