import type { SxProps } from '@mui/system';
import type { Theme } from '@mui/material/styles';

export const loginWrapperStyle: SxProps<Theme> = {
  minHeight: '100vh',
  backgroundColor: (theme) => theme.palette.background.default,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
};

export const loginGridStyle: SxProps<Theme> = {
  px: {
    xs: 2,
    sm: 4,
    md: 8,
    lg: 30
  }
};

export const loginIllustrationBoxStyle: SxProps<Theme> = {
  position: 'relative',
  height: { xs: 0, md: '70vh' },
  display: { xs: 'none', md: 'block' }
};

export const noAccountTextStyle: SxProps<Theme> = {
  mt: 3,
  color: 'text.secondary',
  textAlign: 'center',
  letterSpacing: '0.08em'
};

export const formWrapperBoxStyle: SxProps<Theme> = {
  p: { xs: 2, sm: 3, md: 4 }
};

export const loginTitleStyle: SxProps<Theme> = {
  mb: 3,
  width: 133,
  height: 54,
  fontWeight: 'bold'
};
