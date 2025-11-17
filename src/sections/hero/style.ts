import { CSSProperties } from 'react';

export const heroContainerStyle = {
  py: { xs: 4, sm: 6, md: 10 },
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative'
};

export const heroContentStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 2,
  position: 'relative',
  zIndex: 1,
  color: 'common.white',
};

export const heroTitleStyle = {
  fontSize: {
    xs: 'h3.fontSize',
    sm: 'h2.fontSize',
    md: 'h1.fontSize'
  },
  lineHeight: 1.2
};

export const heroSubtitleStyle = {
  fontSize: {
    sm: 'h4.fontSize',
    md: 'h3.fontSize'
  },
  lineHeight: 1.2
};

export const contentSectionStyle = {
  backgroundColor: 'primary.light',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 20,
  p: 10
};

export const heroBgStyle: CSSProperties = {
  objectFit: 'cover',
  objectPosition: 'center 40%',
  zIndex: -1
};
