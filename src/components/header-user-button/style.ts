import { MainLayoutType } from '@src/config';

export const headerButtonStyle = (variant: MainLayoutType, scrolled: boolean, isMdScreen: boolean) => {
  const isHome = variant === MainLayoutType.HOME;
  const isSearch = variant === MainLayoutType.SEARCH;

  const mainColor = isHome ? (isMdScreen ? 'transparent' : scrolled ? 'transparent' : 'common.white') : 'transparent';
  const textColor = isHome
    ? isMdScreen
      ? 'common.white'
      : scrolled
        ? 'common.white'
        : 'primary.main'
    : isMdScreen
      ? isSearch
        ? 'primary.main'
        : 'common.white'
      : scrolled
        ? 'common.white'
        : 'primary.main';
  const hoverColor = isHome ? (isMdScreen ? 'transparent' : scrolled ? 'transparent' : 'common.white') : 'transparent';
  const hoverTextColor = isHome
    ? isMdScreen
      ? 'common.white'
      : scrolled
        ? 'common.white'
        : 'primary.main'
    : isMdScreen
      ? isSearch
        ? 'primary.main'
        : 'common.white'
      : scrolled
        ? 'common.white'
        : 'primary.main';

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