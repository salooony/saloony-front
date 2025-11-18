import type { SxProps } from '@mui/system';
import type { Theme } from '@mui/material/styles';


export const registerWrapperStyle: SxProps<Theme> = {
  minHeight: '100vh',
  backgroundColor: (theme) => theme.palette.background.default,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
};

export const registerGridStyle: SxProps<Theme> = {
  px: {
    xs: 2,
    sm: 4,
    md: 8,
    lg: 30
  }
};

export const registerIllustrationBoxStyle: SxProps<Theme> = {
  position: 'relative',
  height: { xs: 0, md: '70vh' },
  display: { xs: 'none', md: 'block' }
};
export const registerTitleStyle: SxProps<Theme> = {
  mb: 3,
  fontWeight: 'bold'
};
