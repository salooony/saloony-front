import { Theme } from '@mui/material/styles';
export const searchBoxStyle = (theme: Theme) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  p: 8,
  pt: 16,
  gap: 2,
  backgroundColor: theme.palette.primary.light,
});
export const buttonStyle = (theme: Theme) => ({
  mb: 6, 
  width: 'fit-content', 
  textDecoration: 'underline', 
  textTransform: 'none',
  color: theme.palette.common.black
});