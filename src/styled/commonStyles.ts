import { Theme } from '@mui/material/styles';
export const sectionBoxStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: {
    xs: 'center',
    sm: 'center',
    md: 'flex-start'
  },
  gap: 4,
  mb: 4
};

export const arrowsStyle = (theme: Theme) => ({
  color: theme.palette.primary.main,
  fontSize: theme.typography.h5.fontSize
});
