// components/AuthLogin/style.ts
import type { Theme } from '@mui/material/styles';
import type { SxProps } from '@mui/system';

export const rootBoxStyle: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column'
};

export const buttonsWrapStyle: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  px: { xs: 2, sm: 6, md: 10 }
};

export const socialLinkStyle = (theme: Theme): SxProps<Theme> => ({
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  bgcolor: 'background.paper',
  border: '1px solid',
  borderColor: 'text.primary',
  color: 'text.primary',
  borderRadius: 3,
  transition: theme.transitions.create(['background-color', 'box-shadow'], {
    duration: theme.transitions.duration.shortest
  }),
  '&:hover': {
    bgcolor: 'background.default',
    boxShadow: 1
  },
  // make the whole row clickable & accessible
  cursor: 'pointer'
});

export const iconBoxStyle: SxProps<Theme> = {
  py: '8px',
  width: 45,
  height: 45,
  borderRight: '1px solid',
  borderColor: 'text.primary',
  display: 'grid',
  placeItems: 'center'
};

export const iconStyle = (theme: Theme): SxProps<Theme> => ({
  fontSize: 24,
  color: theme.palette.primary.main
});

export const textStyle: SxProps<Theme> = {
  px: 2,
  fontSize: {
    xs: '0.775rem',
    sm: '0.875rem'
  }
};

export const dividerStyle: SxProps<Theme> = {
  my: 3,
  color: 'text.default',
  '&::before, &::after': {
    borderColor: 'text.primary',
    borderWidth: 1.5
  }
};
