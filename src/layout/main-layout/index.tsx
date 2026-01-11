'use client';

import { JSX, lazy, Suspense } from 'react';

import Loader from 'components/Loader';
import { ScrollProvider } from 'contexts/scrollProvider';
import { mainLayoutProps } from '@src/types/main-layout';
import { MainLayoutType } from '@src/config';
const Header = lazy(() => import('./header'));
const FooterBlock = lazy(() => import('./footer'));

export default function MainLayout({ children, variant = MainLayoutType.HOME }: mainLayoutProps): JSX.Element {
  return (
    <ScrollProvider>
      <Suspense fallback={<Loader />}>
        <Header variant={variant} />
        {children}
        <FooterBlock />
      </Suspense>
    </ScrollProvider>
  );
}
