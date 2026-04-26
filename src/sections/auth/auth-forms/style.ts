import type { Theme } from '@mui/material/styles';
import type { SxProps } from '@mui/system';

export const inputFieldStyle: SxProps<Theme> = {
  borderRadius: '14px',
  backgroundColor: '#FFFFFF',
  height: 56,
  width: 300,
  border: '1px solid #D9D9D9',
  px: 2,
  position: 'relative',
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none'
  },
  '& input': {
    height: '100%',
    padding: '16px 14px',
    fontSize: '14px',
    boxSizing: 'border-box',
    fontFamily: 'Inter, sans-serif'
  },
  '&:hover': {
    borderColor: '#A88D67'
  },
  '&.Mui-focused': {
    borderColor: '#A88D67',
    borderWidth: '1px'
  },
  '&.Mui-error': {
    borderColor: '#FF0000',
    borderWidth: '1px',
    boxShadow: '0 0 0 4px rgba(255, 0, 0, 0.1)'
  }
};

export const inputLabelStyle: SxProps<Theme> = {
  color: '#1D1B20',
  fontSize: '14px',
  fontWeight: 400,
  fontFamily: 'Inter, sans-serif',
  position: 'absolute',
  top: 18,
  left: 14,
  zIndex: 1,
  pointerEvents: 'none',
  opacity: 1
};

export const forgotPasswordStackStyle: SxProps<Theme> = {
  flexDirection: 'row',
  gap: 2,
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '100%',
  maxWidth: 428,
  mt: 1,
  '& a': {
    fontSize: '12px',
    color: '#000000',
    opacity: 0.6,
    textDecoration: 'none'
  }
};

export const submitButtonGridStyle: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  mt: 3
};

export const submitButtonStyle: SxProps<Theme> = {
  borderRadius: '14px',
  textTransform: 'none',
  width: 200,
  height: 39,
  margin: 'auto',
  backgroundColor: '#A88D67',
  color: '#FFFFFF',
  fontSize: '16px',
  fontWeight: 700,
  fontFamily: 'Inter, sans-serif',
  '&:hover': {
    backgroundColor: '#8E7552'
  }
};
