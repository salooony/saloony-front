import { SxProps, Theme } from '@mui/material';

export const cardStyle: SxProps<Theme> = {
  p: 3,
  borderRadius: '16px',
  boxShadow: (theme) => theme.customShadows.z1,
  bgcolor: 'background.paper',
  border: '1px solid',
  borderColor: 'divider',
  mb: 3
};

export const sectionTitleStyle: SxProps<Theme> = {
  mb: 3,
  fontWeight: 600,
  fontSize: '1.25rem'
};

export const labelStyle: SxProps<Theme> = {
  color: 'text.secondary',
  fontSize: '0.875rem',
  fontWeight: 500,
  mb: 0.5
};

export const valueStyle: SxProps<Theme> = {
  fontWeight: 700,
  fontSize: '1rem',
  mb: 2
};

export const logoutButtonStyle: SxProps<Theme> = {
  width: '100%',
  py: 1.5,
  borderRadius: '12px',
  color: 'error.main',
  borderColor: 'error.main',
  fontWeight: 600,
  textTransform: 'none',
  '&:hover': {
    borderColor: 'error.dark',
    bgcolor: 'error.lighter'
  }
};

export const inputFieldStyle: SxProps<Theme> = {
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'divider'
  }
};

export const readOnlyInputFieldStyle: SxProps<Theme> = {
  ...inputFieldStyle,
  bgcolor: 'grey.50',
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none'
  }
};

export const contactActionBoxStyle: SxProps<Theme> = {
  mt: 2,
  display: 'flex',
  gap: 1
};

const baseButtonStyle: SxProps<Theme> = {
  borderRadius: '8px',
  textTransform: 'none',
  fontWeight: 600
};

export const saveButtonStyle: SxProps<Theme> = {
  ...baseButtonStyle,
  bgcolor: 'primary.main',
  '&:hover': { bgcolor: 'primary.dark' }
};

export const cancelButtonStyle: SxProps<Theme> = {
  ...baseButtonStyle
};

export const passwordInputStyle: SxProps<Theme> = {
  ...inputFieldStyle,
  bgcolor: 'background.default'
};

export const confirmButtonStyle: SxProps<Theme> = {
  ...baseButtonStyle,
  bgcolor: 'action.disabledBackground',
  color: 'text.disabled',
  px: 4
};

export const creditCardCardStyle: SxProps<Theme> = {
  ...cardStyle,
  minHeight: 250,
  display: 'flex',
  flexDirection: 'column'
};

export const creditCardFooterStyle: SxProps<Theme> = {
  mt: 'auto',
  fontStyle: 'italic'
};

export const passwordInstructionStyle: SxProps<Theme> = {
  mb: 3
};

export const passwordLabelStyle: SxProps<Theme> = {
  ...labelStyle,
  fontWeight: 600,
  color: 'text.primary'
};

/** Constrains the personal info content area to a readable width. */
export const personalInfoWrapperStyle: SxProps<Theme> = {
  maxWidth: 800
};

/** Wraps the password input field with correct bottom spacing. */
export const passwordFieldBoxStyle: SxProps<Theme> = {
  mb: 3
};

/** Pushes credit card footer text to the bottom of the card. */
export const creditCardContentBoxStyle: SxProps<Theme> = {
  mt: 'auto'
};
