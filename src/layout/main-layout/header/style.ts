import { MainLayoutType } from '@src/config';

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

export const logoBoxStyle = (gap?: number | string) => ({ mr: 2, display: 'flex', alignItems: 'center', gap });

export const listStyle = { display: { xs: 'none', md: 'flex' }, gap: 4 };

export const rightBoxStyle = (isSearch: boolean) => ({
  display: isSearch ? 'flex' :{ xs: 'none', md: 'flex' },
  gap: isSearch ? '3px' : 1.5,
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
export const headerButtonStyle = (variant: MainLayoutType, scrolled: boolean, isMdScreen: boolean) => {
  const isHome = variant === MainLayoutType.HOME;

  const mainColor = isHome ? 'common.white' : 'transparent';
  const textColor = isHome ? 'primary.main' : isMdScreen ? 'common.white' : scrolled ? 'common.white' : 'primary.main';
  const hoverColor = isHome ? 'common.white' : 'transparent';
  const hoverTextColor = isHome ? 'primary.main' : isMdScreen ? 'common.white' : scrolled ? 'common.white' : 'primary.main';

  return {
    backgroundColor: mainColor,
    color: textColor,
    '&:hover': { 
      backgroundColor: hoverColor, 
      color: hoverTextColor
    },
    width: '100%',
    whiteSpace: 'nowrap'
  };
};

