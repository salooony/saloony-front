import { SxProps, Theme } from '@mui/material/styles';

export const buttonStyle = (color?: string): SxProps<Theme> => ({
  color: color,
  textTransform: 'none',
  fontWeight: 500
});

export const menuPaperStyle = (bgColor?: string, listItemColor?: string, ml?: number): SxProps<Theme> => ({
  backgroundColor: bgColor,
  color: listItemColor,
  ml: ml
});
