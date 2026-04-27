import { SxProps, Theme } from '@mui/material';

export const profileWrapperStyle: SxProps<Theme> = {
  width: '100%',
  maxWidth: 1240,
  mx: 'auto',
  py: 4,
  px: { xs: 2, md: 3 }
};

export const profileTitleStyle: SxProps<Theme> = {
  mb: 4,
  fontWeight: 700,
  fontFamily: (theme) => theme.typography.fontFamily
};
