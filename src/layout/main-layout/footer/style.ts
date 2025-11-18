import { styled, SxProps } from '@mui/material/styles';
import Link from '@mui/material/Link';
import { Theme } from '@mui/material';

export const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '18px',
  transition: '0.3s',
  '&:hover': {
    opacity: 0.8,
  },
}));


export const linkSX = {
  color: 'common.white',
  fontSize: '2.1rem',
  fontWeight: 400,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    opacity: 1
  }
};

export const socialIconStyle = {
  position: 'absolute',
  bottom: 0,
  left: { md: '20px' },
  display: 'flex',
  gap: 1
};

export const centerBoxStyle: SxProps = {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export const footerContainerStyle = {
  backgroundColor: 'primary.main',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  p: { xs: 2, sm: 2, md: 0 },
  alignItems: 'center'
};

export const footerGridStyle = (theme: Theme) =>({
  width: { xs: '100%', sm: '100%', md: '90%' },
  display: 'flex',
  flexDirection: { xs: 'column', sm: 'column', md: 'row' },
  gap: 4,
  alignItems: { xs: 'center', sm: 'center', md: 'stretch' },
  justifyContent: 'center',
  borderBottom: `1px solid ${theme.palette.primary.lighter}`,
  pb: 4
});

export const footerColumnStyle = {
  my: { xs: 0, sm: 0, md: 7 },
  display: 'flex',
  justifyContent: 'center'
};

export const footerTextStyle = {
  width: '100%',
  textAlign: 'center',
  py: 2,
  fontSize: 18,
  color: 'common.white',
};

export const footerListsStyle = {
  p: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: 1
};
