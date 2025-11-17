import { Theme } from '@mui/material/styles';
import { CSSProperties } from 'react';

export const imageSliderBoxStyle = {
  display: 'flex',
  gap: 4,
  alignItems: 'center',
  flexDirection: { xs: 'column', sm: 'column', md: 'row' }
};

export const slideLoaderStyle = (progress: number) => ({
  position: 'absolute',
  width: 52,
  height: 52,
  borderRadius: '50%',
  background: `conic-gradient(
    primary.main ${progress * 3.6}deg,
    primary.lighter 0deg
  )`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: '50%',
    backgroundColor: 'white'
  }
});

export const navigationContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 4,
  mt: 4
};

export const navButtonStyle = {
  width: 50,
  height: 50,
  bgcolor: 'white',
  boxShadow: 3,
  position: 'relative',
  zIndex: 2,
  borderRadius: '50%',
  transition: 'all 0.3s ease'
};

export const iconWrapperStyle = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

export const titleStyle = {
  position: 'relative',
  textAlign: 'center',
  display: 'inline-block',
  mx: 'auto',
  '&::after': {
    content: '""',
    position: 'absolute',
    left: '50%',
    bottom: -8,
    transform: 'translateX(-50%)',
    width: '60px',
    height: '4px',
    backgroundColor: 'primary.dark',
    borderRadius: '2px'
  }
};

export const paragraphStyle = {
  fontSize: { xs: 20, md: 25 },
  textAlign: 'justify'
};

export const imageStyle: CSSProperties = {
  maxWidth: '350px',
  width: '100%',
  height: '350px',
  objectFit: 'cover',
  borderRadius: '0'
};
