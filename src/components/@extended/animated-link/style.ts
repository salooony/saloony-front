import { Theme } from '@mui/material/styles';

export const animatedLinkStyle = (theme: Theme, color?: string) => ({
  position: 'relative',
  fontWeight: 500,
  overflow: 'hidden',
  color: color ?? theme.palette.common.white,
  '&::after': {
    content: '""',
    position: 'absolute',
    left: '50%',
    bottom: 0,
    width: 0,
    height: '2px',
    backgroundColor: color ?? theme.palette.common.white,
    transform: 'translateX(-50%)',
    transition: 'width 0.3s ease'
  },
  '&:hover::after': {
    width: '100%'
  }
});
