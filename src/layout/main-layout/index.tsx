'use client';

import { lazy, ReactNode, Suspense } from 'react';

import Loader from 'components/Loader';

const Header = lazy(() => import('./header'));
const FooterBlock = lazy(() => import('./footer'));

interface Props {
  readonly children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      {children}
      <FooterBlock />
    </Suspense>
  );
}
