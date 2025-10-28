import { Theme } from '@mui/material/styles';

export const searchContainerStyle = {
  width: '100%',
  maxWidth: 800
};

export const paperStyle = {
  display: 'flex',
  alignItems: 'center',
  borderRadius: '18px',
  px: 3,
  py: 2,
  gap: 2
};

export const inputGroupStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: { xs: 'column', sm: 'row', md: 'row' },
  width: '90%',
  gap: 2
};

export const searchBoxStyle = (theme: Theme, focusedInput: 'query' | 'location' | null, inputName: 'query' | 'location') => ({
  width: { xs: '100%', md: '50%' },
  borderRadius: '12px',
  px: 2,
  py: 1,
  transition: 'all 0.2s ease',
  backgroundColor: focusedInput === inputName ? theme.palette.grey[100] : 'transparent',
  border: focusedInput === inputName ? `1px solid ${theme.palette.grey[400]}` : '1px solid transparent'
});

export const iconButtonStyle = {
  color: 'black',
  '&:hover': { color: 'grey.700' },
  width: 48,
  height: 48
};

export const iconContainerStyle = {
  width: '10%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};
