import { Theme } from '@mui/material/styles';

export const faqTitleStyle = {
  textAlign: 'center',
  mb: 2,
};

export const accordionStyle = {
  boxShadow: 'none',
  border: 'none',
};

export const accordionSummaryStyle = (theme: Theme) => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  backgroundColor: theme.palette.primary.light,
  borderTop: `1px solid ${theme.palette.primary.main}`,
  py: 2,
});

