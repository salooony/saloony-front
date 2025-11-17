import type { SxProps } from '@mui/system';
import type { Theme } from '@mui/material/styles';

export const InputLabelStyles: SxProps<Theme> = {
  fontWeight: 'bold'
};
export const OutlinedInputStyles: SxProps<Theme> = {
  borderRadius: 3,
  backgroundColor: (theme) => theme.palette.background.paper
};
export const Gridbtn: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  justifyContent: 'center',
  gap: 1
};
export const btn: SxProps<Theme> = {
  borderRadius: 3,
  px: 8,
  letterSpacing: 2
};
export const LinklStyles: SxProps<Theme> = {
  fontWeight: 'bold',
  textDecoration: 'none',
  cursor: 'pointer',
  color: 'secondary.main',
  fontSize: '1rem'

};
