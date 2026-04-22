import type { SxProps } from '@mui/system';
import type { Theme } from '@mui/material/styles';

export const verificationWrapperStyle: SxProps<Theme> = {
  minHeight: '100vh',
  backgroundColor: (theme) => theme.palette.background.default,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%'
};

export const verificationGridStyle: SxProps<Theme> = {
  px: {
    xs: 2,
    sm: 4,
    md: 8
  }
};

export const verificationIllustrationBoxStyle: SxProps<Theme> = {
  position: 'relative',
  height: { xs: 0, md: '80vh' },
  display: { xs: 'none', md: 'block' }
};

export const verificationStackStyle: SxProps<Theme> = {
  gap: 3,
  mb: 2,
  alignItems: 'center',
  textAlign: 'center'
};

export const verificationTitleStyle: SxProps<Theme> = {
  marginBottom: 2,
  fontWeight: 'bold'
};

export const verificationDescriptionStyle: SxProps<Theme> = {
  fontWeight: '500',
  width: 400
};

export const verificationPhoneStyle: SxProps<Theme> = {
  color: 'primary.main'
};

export const verificationTimerStyle: SxProps<Theme> = {
  color: 'primary.main',
  fontWeight: '500',
  marginBlock: 2
};
