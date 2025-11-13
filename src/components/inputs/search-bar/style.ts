import { Theme } from '@mui/material/styles';

export const searchContainerStyle = {
  width: '100%',
  maxWidth: 800,
  mx: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: 2
};

export const paperStyle = {
  display: 'flex',
  alignItems: 'center',
  borderRadius: '18px',
  px: 3,
  py: 2,
  gap: 2,
  width: '100%'
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
  border: focusedInput === inputName ? `1px solid ${theme.palette.grey[400]}` : '1px solid transparent',
  position: 'relative'
});

export const suggestionBoxStyle = (theme: Theme) => ({
  mt: 1,
  backgroundColor: theme.palette.common.white,
  borderRadius: '8px',
  boxShadow: 2,
  position: 'absolute',
  left: '2px',
  width: '100%',
  zIndex: 10,
  maxHeight: 200,
  overflowY: 'auto'
});

export const SmallSuggestionBoxStyle = (theme: Theme) => ({
  mt: 2.5,
  position: 'absolute',
  width: '100%',
  zIndex: 10,
  overflowY: 'auto'
});

export const suggestionItemStyle = (theme: Theme, highlighted: boolean = false) => ({
  px: 2,
  py: 1,
  cursor: 'pointer',
  backgroundColor: highlighted ? theme.palette.action.selected : 'transparent',
  '&:hover': {
    backgroundColor: theme.palette.grey[100]
  }
});

export const iconButtonStyle = (theme: Theme, isDisabled: boolean) => ({
  color: 'black',
  width: 48,
  height: 48,
  '&:hover': !isDisabled ? { color: theme.palette.text.secondary } : {},
  opacity: isDisabled ? 0.5 : 1,
  cursor: isDisabled ? 'not-allowed' : 'pointer'
});

export const circularProgressStyle = {
  display: 'flex',
  justifyContent: 'center',
  p: 2
};
export const iconContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

export const centerModal = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

export const FiXStyle = {
  position: 'absolute',
  top: 16,
  left: 16
};

export const modalBoxStyle = (theme: Theme) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  backgroundColor: theme.palette.grey[100]
});

export const smallSearchBoxStyle = (theme: Theme) => ({
  backgroundColor: theme.palette.common.white,
  display: 'flex',
  p: 1,
  boxShadow: 1
});
