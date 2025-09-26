import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';

export const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.secondary[400],
  '&:hover': { color: theme.palette.primary.main },
  '&:active': { color: theme.palette.primary.main }
}));

export const linkSX = {
  color: 'common.white',
  fontSize: '2.1rem',
  fontWeight: 400,
  opacity: '0.6',
  margin: '10px',
  cursor: 'pointer',
  '&:hover': {
    opacity: '1'
  }
};
