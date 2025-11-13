import type { Metadata } from 'next';

import './globals.css';

// project imports
import ProviderWrapper from './ProviderWrapper';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Saloony: Coiffeur & Barbier en Ligne',
  description: 'Saloony: Coiffeur & Barbier en Ligne',
  icons: {
    icon: '/favicon.png'
  }
};

export default function RootLayout({ children }: { readonly children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ProviderWrapper>{children}</ProviderWrapper>
      </body>
    </html>
  );
}
