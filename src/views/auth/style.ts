import type { SxProps } from '@mui/system';
import type { Theme } from '@mui/material/styles';

export const loginWrapperStyle: SxProps<Theme> = {
  minHeight: '100vh',
  backgroundColor: '#FCF7F3',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
};

export const loginGridStyle: SxProps<Theme> = {
  px: {
    xs: 2,
    sm: 4,
    md: 8,
    lg: 10
  },
  maxWidth: 1440,
  margin: '0 auto'
};

export const loginIllustrationBoxStyle: SxProps<Theme> = {
  position: 'relative',
  width: 649,
  height: 649,
  display: { xs: 'none', md: 'block' },
  margin: 'auto'
};

export const noAccountTextStyle: SxProps<Theme> = {
  mt: 2,
  textAlign: 'center',
  color: '#7E7E7E',
  fontSize: '14px',
  fontWeight: 400,
  fontFamily: 'Inter, sans-serif',
  '& a': {
    color: '#7E7E7E',
    textDecoration: 'none',
    fontWeight: 700
  }
};

export const formWrapperBoxStyle: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: 408,
  fontFamily: 'Inter, sans-serif',
  '& .MuiGrid-root': {
    width: '100%',
    maxWidth: 300
  }
};

export const loginTitleStyle: SxProps<Theme> = {
  mb: 4,
  width: 300,
  fontWeight: 400,
  fontSize: '45px',
  fontFamily: 'Inter, sans-serif',
  textAlign: 'left',
  color: '#000000'
};
