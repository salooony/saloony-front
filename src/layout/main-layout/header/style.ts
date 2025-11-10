import { Theme } from '@mui/material/styles';

export const appBarStyle = (theme: Theme, scrolled: boolean) => ({
  boxShadow: scrolled ? 1 : 'none',
  backgroundColor: scrolled ? theme.palette.primary.main : { xs: theme.palette.primary.main, md: 'transparent' },
  transition: 'all 0.3s ease-in-out'
});

export const toolbarStyle = {
  px: { xs: 1.5, md: 0 },
  display: 'flex',
  justifyContent: 'space-between',
  maxHeight: 60
};

export const logoBoxStyle = { mr: 2, display: 'flex', alignItems: 'center', gap: { xs: 0, md: 3 } };

export const listStyle = { display: { xs: 'none', md: 'flex' }, gap: 4 };

export const rightBoxStyle = (scrolled: boolean) => ({
  display: { xs: 'none', md: 'flex' },
  gap: 1.5,
  '& .header-link': {
    px: 2,
    '&:hover': {
      color: 'primary.main'
    }
  }
});

export const drawerStyle = (theme: Theme) => ({
  '& .MuiDrawer-paper': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    width: 240
  }
});

export const drawerBoxStyle = { p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' };

export const drawerListItemStyle = { display: 'flex', justifyContent: 'center' };

export const menuIconStyle = (theme: Theme) => ({
  color: theme.palette.common.white,
  display: { xs: 'block', md: 'none' },
  '&:hover': { color: theme.palette.primary.lighter }
});
export const headerButtonStyle = (theme: Theme, mainColor?: string, textColor?: string, hoverColor?: string, hoverTextColor?: string) => ({
  backgroundColor: mainColor ?? theme.palette.primary.main,
  color: textColor ?? theme.palette.common.white,
  '&:hover': { 
    backgroundColor: hoverColor ?? theme.palette.common.white, 
    color: hoverTextColor ?? theme.palette.primary.main
  },
  width: '100%',
});

