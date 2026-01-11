'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { FC, ReactNode } from 'react';
import { justifiedTextWithLineStyle } from './style';

interface JustifiedTextWithLineProps {
  children: ReactNode;
  lineWidth?: number | string;
}

const JustifiedTextWithLine: FC<JustifiedTextWithLineProps> = ({ children, lineWidth }) => {
  const theme = useTheme();
  return (
    <Box sx={{ position: 'relative' }}>
      <Typography variant="h1" align="justify" sx={{ fontWeight: 900 }}>
        {children}
      </Typography>
      <Box sx={justifiedTextWithLineStyle(theme, lineWidth)} />
    </Box>
  );
};

export default JustifiedTextWithLine;
