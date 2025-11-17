import { SxProps, Theme } from '@mui/material/styles';
export const buttonStyle = (mainColor?: string): SxProps<Theme> => ({
  color: mainColor,
  textTransform: 'none',
  fontWeight: 500,
  '&:hover': { color: 'primary.main' }
});

export const langListStyle = (backColor?: string, textColor?: string): SxProps<Theme> => ({
  display: 'flex',
  flexDirection: 'column',
  '& .MuiPaper-root': {
    backgroundColor: backColor ?? 'common.white',
  },
  '& .MuiMenuItem-root': {
    color: textColor ?? 'primary.main',
  }
});
