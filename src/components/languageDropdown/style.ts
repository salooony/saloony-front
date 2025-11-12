import { SxProps, Theme } from '@mui/material/styles';

export const buttonStyle = (theme: Theme, color?: string): SxProps<Theme> => ({
  color,
  textTransform: 'none',
  fontWeight: 500,
  '&:hover': { color: theme.palette.primary.main }
});

export const langListStyle = (theme: Theme, bgColor?: string, listItemColor?: string): SxProps<Theme> => ({
  display: 'flex',
  flexDirection: 'column',
  '& .MuiPaper-root': {
    backgroundColor: bgColor ?? theme.palette.common.white
  },
  '& .MuiMenuItem-root': {
    color: listItemColor ?? theme.palette.primary.main
  }
});
