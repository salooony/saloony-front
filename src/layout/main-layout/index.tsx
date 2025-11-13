'use client';

import { lazy, ReactNode, Suspense } from 'react';

import Loader from 'components/Loader';
import { ScrollProvider } from 'contexts/scrollProvider';
import { MainLayoutType } from '@src/config';

const Header = lazy(() => import('./header'));
const FooterBlock = lazy(() => import('./footer'));

interface Props {
  readonly children: ReactNode;
  variant?: MainLayoutType;
}

export default function MainLayout({ children, variant = MainLayoutType.HOME }: Props) {
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
