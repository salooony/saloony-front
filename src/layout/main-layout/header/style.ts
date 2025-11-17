export const appBarStyle = (scrolled: boolean) => ({
  boxShadow: scrolled ? 1 : 'none',
  backgroundColor: scrolled ? 'primary.main' : { xs: 'primary.main', md: 'transparent' },
  transition: 'all 0.3s ease-in-out',
});

export const toolbarStyle = {
  px: { xs: 1.5, md: 0 },
  display: 'flex',
  justifyContent: 'space-between',
  maxHeight: 60
};

export const logoBoxStyle = (gab?: number | string) => ({ mr: 2, display: 'flex', alignItems: 'center', gap: gab });

export const listStyle = { display: { xs: 'none', md: 'flex' }, gap: 4 };

export const rightBoxStyle = (gap?: number | string) => ({
  display: { xs: 'none', md: 'flex' },
  gap: gap ?? 1.5,
  '& .header-link': {
    px: 2,
    '&:hover': {
      color: 'primary.main'
    }
  }
});

export const drawerStyle = {
  '& .MuiDrawer-paper': {
    backgroundColor: 'primary.main',
    color: 'common.white',
    width: 240
  }
};

export const drawerBoxStyle = { p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' };

export const drawerListItemStyle = { display: 'flex', justifyContent: 'center' };

export const menuIconStyle = {
  color: 'common.white',
  display: { xs: 'block', md: 'none' },
  '&:hover': { color: 'primary.lighter'}
};
export const headerButtonStyle = (mainColor?: string, textColor?: string, hoverColor?: string, hoverTextColor?: string) => ({
  backgroundColor: mainColor ?? 'primary.main',
  color: textColor ?? 'common.white',
  '&:hover': { 
    backgroundColor: hoverColor ?? 'common.white', 
    color: hoverTextColor ?? 'primary.main'
  },
  width: '100%',
  whiteSpace: 'nowrap'
});

