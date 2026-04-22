// components/AuthLogin/style.ts
import type { Theme } from '@mui/material/styles';
import type { SxProps } from '@mui/system';

export const rootBoxStyle: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%'
};

export const buttonsWrapStyle: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: 1.5,
  width: '100%',
  maxWidth: 408
};

export const socialLinkStyle = (theme: Theme): SxProps<Theme> => ({
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  bgcolor: '#FFFFFF',
  border: '1px solid rgba(0, 0, 0, 0.5)',
  color: '#000000',
  borderRadius: '16px',
  height: 47,
  fontFamily: 'Inter, sans-serif',
  transition: theme.transitions.create(['background-color', 'box-shadow'], {
    duration: theme.transitions.duration.shortest
  }),
  '&:hover': {
    bgcolor: '#F5F5F5',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
    cursor: 'pointer'
  }
});

export const iconBoxStyle: SxProps<Theme> = {
  width: 47,
  height: 47,
  borderRight: '1px solid rgba(0, 0, 0, 0.5)',
  display: 'grid',
  placeItems: 'center'
};

export const iconStyle = (theme: Theme): SxProps<Theme> => ({
  fontSize: 24,
  color: '#A88D67' // Gold color for social icons
});

export const textStyle: SxProps<Theme> = {
  px: 2,
  fontSize: '14px',
  fontWeight: 400,
  color: '#000000',
  fontFamily: 'Inter, sans-serif',
  flex: 1,
  textAlign: 'left'
};

export const dividerStyle: SxProps<Theme> = {
  my: 4,
  width: '100%',
  maxWidth: 408,
  color: '#000000',
  opacity: 1,
  '&::before, &::after': {
    borderColor: '#000000',
    borderWidth: 1
  }
};
