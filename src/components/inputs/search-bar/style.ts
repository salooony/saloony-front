import { Theme } from '@mui/material/styles';

export const searchContainerStyle = {
  width: '100%',
  maxWidth: 800,
  mx: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
};

export const paperStyle = (theme: Theme, variant?: string, isExpanded?: boolean) => ({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '18px',
  px: 3,
  py: 2,
  gap: 2,
  width: isExpanded ? '80%' : '100%',
  maxHeight: variant === 'search' ? '50px' : 'auto',
  maxWidth: variant === 'search' ? '600px' : '100%',
  boxShadow: variant === 'search' ? 'none' : undefined,
  border:
    variant === 'search'
      ? ` 1px solid ${theme.palette.grey[400]}`
      : variant === 'home'
        ? isExpanded
          ? ` 1px solid ${theme.palette.grey[400]}`
          : undefined
        : undefined,
  position: isExpanded ? 'absolute' : 'static',
  top: 70,
  left: 0,
  right: 0,
  zIndex: isExpanded ? 20 : 'auto',
  mx: 'auto',
 
});



export const dividerStyle = (theme: Theme, isExpanded: boolean) => ({
  borderColor: theme.palette.common.black, 
  height: isExpanded ? 50 : 30,
  mt: 1.2
});

export const inputGroupStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: { xs: 'column', sm: 'row', md: 'row' },
  width: '90%',
  gap: 2
};

export const searchBoxStyle = (
  theme: Theme,
  focusedInput: 'query' | 'location' | 'date' | null,
  inputName: 'query' | 'location' | 'date',
  variant?: string,
  isExpanded?: boolean
) => ({
  width:
    variant === 'search'
      ? { xs: '100%', md: '30%' }
      : variant === 'home'
        ? isExpanded
          ? { xs: '100%', md: '30%' }
          : { xs: '100%', md: '50%' }
        : { xs: '100%', md: '50%' },
  borderRadius: '12px',
  px: 2,
  py: 1,
  transition: 'all 0.2s ease',
  backgroundColor: focusedInput === inputName ? theme.palette.grey[100] : 'transparent',
  border: focusedInput === inputName ? `1px solid ${theme.palette.grey[400]}` : '1px solid transparent',
  position: 'relative'
});

export const noWrapStyle = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: 'block', 
  maxWidth: '100%', 
};

export const suggestionBoxStyle = (theme: Theme) => ({
  mt: 4,
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

export const SmallSuggestionBoxStyle = {
  mt: 2.5,
  position: 'absolute',
  width: '100%',
  zIndex: 10,
  overflowY: 'auto'
}

export const suggestionItemStyle = (theme: Theme, highlighted: boolean = false) => ({
  px: 2,
  py: 1,
  cursor: 'pointer',
  backgroundColor: highlighted ? theme.palette.action.selected : 'transparent', 
  '&:hover': {
    backgroundColor: theme.palette.grey[100],
  },
});


export const iconButtonStyle = (theme: Theme, isDisabled: boolean, variant?: string) => ({
  color: theme.palette.common.black,
  width: variant === 'search' ? 35 : 48,
  height: variant === 'search' ? 35 : 48,
  '&:hover': !isDisabled ? { color: theme.palette.text.secondary } : {}, 
  opacity: isDisabled ? 0.5 : 1, 
  cursor: isDisabled ? 'not-allowed' : 'pointer',
});

export const circularProgressStyle = {
  display: 'flex',
  justifyContent: 'center',
  p: 2
}
export const iconContainerStyle = (theme: Theme, variant?: string) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 35,
  height: 35,
  borderRadius: '30%',
  backgroundColor: variant === 'search' ? theme.palette.primary.main : 'transparent',
});

export const centerModal = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
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
  backgroundColor: theme.palette.grey[100],
});

export const smallSearchBoxStyle = (theme: Theme) => ({
  backgroundColor: theme.palette.common.white,
  display: 'flex',
  p: 1,
  boxShadow: 1
});
