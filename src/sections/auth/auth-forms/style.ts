import type { Theme } from '@mui/material/styles';
import type { SxProps } from '@mui/system';

export const inputFieldStyle: SxProps<Theme> = {
  borderRadius: 3,
  backgroundColor: 'background.paper',
  height: 50
};

export const inputLabelStyle: SxProps<Theme> = {
  color: (theme) => theme.palette.text.primary
};

export const forgotPasswordStackStyle: SxProps<Theme> = {
  flexDirection: 'row',
  gap: 2,
  alignItems: 'baseline',
  justifyContent: 'flex-end',
  opacity: 0.5
};

export const submitButtonGridStyle: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

export const submitButtonStyle: SxProps<Theme> = {
  borderRadius: 3,
  textTransform: 'none',
  width: 228,
  height: 47,
  margin: 'auto'
};
