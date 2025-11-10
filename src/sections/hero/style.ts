import { Theme } from '@mui/material/styles';
import { CSSProperties } from 'react';

export const heroContainerStyle = {
  py: { xs: 4, sm: 6, md: 10 },
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
};

export const heroContentStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 2,
  position: 'relative',
  zIndex: 1,
};

export const heroTitleStyle = (theme: Theme) => ({
  fontSize: {
    xs: theme.typography.h3.fontSize,
    sm: theme.typography.h2.fontSize,
    md: theme.typography.h1.fontSize,
  },
  lineHeight: 1.2,
});

export const heroSubtitleStyle = (theme: Theme) => ({
  fontSize: {
    sm: theme.typography.h4.fontSize,
    md: theme.typography.h3.fontSize
  },
  lineHeight: 1.2,
});

export const contentSectionStyle = (theme: Theme) => ({
  bgcolor: theme.palette.primary.light,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 20,
  p: 10,
});

export const heroBgStyle: CSSProperties =  {
  objectFit: 'cover',
  objectPosition: 'center 40%',
  zIndex: -1
};
