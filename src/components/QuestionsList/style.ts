import { Theme } from '@mui/material/styles';

export const faqTitleStyle = {
  textAlign: 'center',
  mb: 2
};

export const accordionStyle = {
  boxShadow: 'none',
  border: 'none'
};

export const accordionSummaryStyle = (theme: Theme) => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  backgroundColor: 'primary.light',
  borderTop: `1px solid ${theme.palette.primary.main}`,
  py: 2
});

export const questionTextStyle = {
  fontWeight: 'medium',
  fontSize: 'h5.fontSize'
};

export const answerTextStyle = {
  color: 'primary.main',
  pl: 2,
  fontSize: 'h6.fontSize'
};
