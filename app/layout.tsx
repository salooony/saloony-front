'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

import { ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <ThemeProvider theme={theme}>
          {/* <CssBaseline /> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
