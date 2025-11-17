'use client';

import { Box } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
  readonly children: ReactNode;
}

export default function SimpleLayout({ children }: Props) {
  return <Box sx={{ minHeight: '100vh' }}>{children}</Box>;
}
