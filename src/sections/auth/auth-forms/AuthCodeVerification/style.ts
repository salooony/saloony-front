import type { SxProps } from '@mui/system';
import type { Theme } from '@mui/material/styles';

export const otpContainerStyle = (theme: Theme) => ({
  maxWidth: '200px',
  margin: '0 auto',
  '& input': {
    border: '1px solid',
    borderColor: 'divider',
    '&:focus-visible': {
      outline: 'none',
      borderColor: 'primary.main',
      boxShadow: theme.customShadows.primary
    }
  }
});

export const otpContainerErrorStyle = (theme: Theme) => ({
  '& input': {
    borderColor: 'error.main',
    '&:focus-visible': {
      borderColor: 'error.main',
      boxShadow: theme.customShadows.error
    }
  }
});

export const otpInputContainerStyle = {
  justifyContent: 'space-between',
  margin: -8
};

export const otpInputStyle = {
  width: '100%',
  margin: '8px',
  padding: '10.5px',
  outline: 'none',
  borderRadius: 12
};

export const gridCenterStyle: SxProps<Theme> = {
  textAlign: 'center'
};

export const resendTextStyle: SxProps<Theme> = {
  textAlign: 'center'
};

export const resendLinkStyle: SxProps<Theme> = {
  color: 'primary.main',
  textDecoration: 'underline',
  fontWeight: 'bold',
  cursor: 'pointer'
};

export const verifyButtonContainerStyle: SxProps<Theme> = {
  width: '50%',
  justifyContent: 'center',
  margin: '40px auto 12px auto'
};

export const backLinkStyle: SxProps<Theme> = {
  color: 'text.secondary',
  cursor: 'pointer'
};
