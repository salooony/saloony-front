'use client';

import { lazy, ReactNode, Suspense } from 'react';

import Loader from 'components/Loader';
import { ScrollProvider } from 'contexts/scrollProvider';

const Header = lazy(() => import('./header'));
const FooterBlock = lazy(() => import('./footer'));

interface Props {
  readonly children: ReactNode;
  variant?: 'home' | 'search';
}

export default function MainLayout({ children, variant = 'home' }: Props) {
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
