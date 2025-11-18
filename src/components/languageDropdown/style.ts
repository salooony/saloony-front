import { SxProps, Theme } from '@mui/material/styles';
export const buttonStyle = (theme: Theme, mainColor?: string): SxProps<Theme> => ({
  color: mainColor,
  textTransform: 'none',
  fontWeight: 500,
  '&:hover': { color: theme.palette.primary.main }
});

export const langListStyle = (theme: Theme, backColor?: string, textColor?: string): SxProps<Theme> => ({
  display: 'flex',
  flexDirection: 'column',
  '& .MuiPaper-root': {
    backgroundColor: backColor ?? theme.palette.common.white,
  },
  '& .MuiMenuItem-root': {
    color: textColor ?? theme.palette.primary.main,
  }
});
