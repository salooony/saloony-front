import { Theme } from '@mui/material/styles';
import { FocusedInputType, MainLayoutType } from '@src/config';
export const searchContainerStyle = {
  width: '100%',
  maxWidth: 900,
  mx: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: 2
};

export const paperStyle = (theme: Theme, variant?: string, isExpanded?: boolean) => ({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '18px',
  p: '14px 24px',
  gap: 0,
  width: '100%',
  /** HOME is the compact variant at 58px; SEARCH and SearchWithoutLocation share the tall 86px spec. */
  minHeight: 86,
  maxHeight: 'none',
  maxWidth: '100%',
  boxShadow: variant === MainLayoutType.SEARCH ? 'none' : undefined,
  border:
    variant === MainLayoutType.SEARCH
      ? `1px solid ${theme.palette.grey[400]}`
      : variant === MainLayoutType.HOME
        ? isExpanded
          ? `1px solid ${theme.palette.grey[400]}`
          : undefined
        : undefined,
  position: isExpanded ? 'absolute' : 'static',
  bottom: isExpanded ? -20 : 'auto',
  left: 0,
  right: 0,
  zIndex: isExpanded ? 20 : 'auto',
  mx: 'auto',
  transition: 'all 0.3s ease'
});

export const dividerStyle = (isExpanded: boolean) => ({
  height: '40px',
  width: '1px',
  backgroundColor: '#F0F0F0',
  opacity: isExpanded ? 1 : 0.6,
  transition: 'opacity 0.3s ease',
  margin: isExpanded ? '0 4px' : '0 -1px',
  alignSelf: 'center'
});

export const inputGroupStyle = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  gap: '36px',
  '& > .field-container': {
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.3s ease'
  }
};

export const queryFieldContainer = (isExpanded: boolean) => ({
  flex: isExpanded ? '0 0 35%' : '0 0 50%',
  padding: '0 12px'
});

export const locationFieldContainer = (isExpanded: boolean) => ({
  flex: isExpanded ? '0 0 30%' : '0 0 50%',
  padding: '0 12px'
});

export const dateFieldContainer = {
  flex: '0 0 30%',
  padding: '0 12px',
  animation: 'fadeIn 0.4s ease-in-out'
};

export const searchBoxStyle = (
  theme: Theme,
  focusedInput: FocusedInputType | null,
  inputName: FocusedInputType,
  variant?: string,
  isExpanded?: boolean
) => ({
  width:
    variant === MainLayoutType.SEARCH || variant === MainLayoutType.SearchWithoutLocation
      ? inputName === FocusedInputType.QUERY
        ? { xs: '100%', md: '65%' }
        : { xs: '100%', md: '30%' }
      : variant === MainLayoutType.HOME
        ? isExpanded
          ? { xs: '100%', md: '33%' }
          : inputName === FocusedInputType.QUERY
            ? { xs: '100%', md: '65%' }
            : { xs: '100%', md: '35%' }
        : { xs: '100%', md: '50%' },
  flex: inputName === FocusedInputType.QUERY ? '0 0 474px' : '1',
  height: inputName === FocusedInputType.QUERY ? '58px' : 'auto',
  borderRadius: '12px',
  p: '8px',
  border: focusedInput === inputName ? '1px solid #202020' : '1px solid transparent',
  backgroundColor: inputName === FocusedInputType.QUERY ? '#F7F7F7' : 'transparent',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

/** Stays at 100% so the bar remains centered on the hero at all times. */
export const searchBarMotionVariants = {
  collapsed: {
    width: '100%',
    transition: { type: 'spring', stiffness: 300, damping: 30 }
  },
  expanded: {
    width: '100%',
    transition: { type: 'spring', stiffness: 300, damping: 30 }
  }
};

export const noWrapStyle = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: 'block',
  maxWidth: '100%'
};

export const suggestionBoxStyle = {
  position: 'absolute',
  top: 'calc(100% + 8px)',
  left: 0,
  width: '100%',
  backgroundColor: 'common.white',
  borderRadius: '24px',
  boxShadow: '0px 10px 30px rgba(0,0,0,0.1)',
  zIndex: 1000,
  maxHeight: 400,
  overflowY: 'auto'
};

export const MdSuggestionBoxStyle = {
  position: 'absolute',
  top: 'calc(100% + 4px)',
  left: 0,
  width: '100%',
  zIndex: 1000,
  backgroundColor: 'common.white',
  borderRadius: '12px',
  boxShadow: '0px 10px 30px rgba(0,0,0,0.1)',
  maxHeight: 300,
  overflowY: 'auto'
};

export const suggestionItemStyle = (theme: Theme, highlighted: boolean = false) => ({
  px: 2,
  py: 1,
  cursor: 'pointer',
  backgroundColor: highlighted ? 'action.selected' : 'transparent',
  '&:hover': {
    backgroundColor: 'action.selected'
  }
});

export const iconButtonStyle = (isDisabled: boolean, variant?: string) => ({
  color: 'common.black',
  width: 48,
  height: 48,
  '&:hover': !isDisabled ? { opacity: 0.7 } : {},
  opacity: isDisabled ? 0.5 : 1,
  cursor: isDisabled ? 'not-allowed' : 'pointer'
});

export const circularProgressStyle = {
  display: 'flex',
  justifyContent: 'center',
  p: 2
};
export const iconContainerStyle = (variant?: string) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 58,
  height: 58,
  borderRadius: '50%',
  backgroundColor: 'transparent'
});

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

export const smallSearchBoxStyle = {
  backgroundColor: 'common.white',
  display: 'flex',
  alignItems: 'center',
  p: 1,
  boxShadow: 1
};

export const calendarLayout = {
  display: 'flex',
  flexDirection: 'column',
  minWidth: '300px',
  '.MuiPickersLayout-contentWrapper': {
    width: '100%'
  }
};

export const calendarPopper = (theme: Theme) => ({
  '& .MuiPaper-root': {
    borderRadius: '16px',
    border: `1px solid ${theme.palette.divider}`,
    boxShadow: theme.shadows[3],
    marginTop: '30px',
    width: 'fit-content',
    minWidth: 'auto',
    transform: 'translateX(-5px) !important'
  },
  '& .MuiDateCalendar-root': {
    width: 'auto'
  }
});

export const CalenderToolbar = (theme: Theme) => ({
  p: 2,
  pb: 1,
  borderBottom: `1px solid ${theme.palette.divider}`,
  justifyContent: 'space-between',
  width: '100%'
});

export const calendarButton = (theme: Theme) => ({
  borderRadius: '20px',
  textTransform: 'none',
  flex: 1,
  fontWeight: 600,
  borderColor: theme.palette.divider,
  color: theme.palette.text.primary,
  whiteSpace: 'nowrap'
});
