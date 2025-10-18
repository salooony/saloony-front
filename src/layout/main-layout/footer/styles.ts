import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';

export const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '18px',
  transition: '0.3s'
}));

export const linkSX = {
  color: 'common.white',
  fontSize: '2.1rem',
  fontWeight: 400,
  cursor: 'pointer',
  '&:hover': {
    opacity: '1'
  }
};
