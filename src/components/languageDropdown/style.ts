import { SxProps, Theme } from '@mui/material/styles';
import { MainLayoutType } from '@src/config';

export const buttonStyle = (
  scrolled: boolean,
  inDrawer?: boolean,
  variant?: MainLayoutType,
  isMdScreen?: boolean,
  isSmScreen?: boolean
): SxProps<Theme> => {
  const isSearch = variant === MainLayoutType.SEARCH;
  return {
    color: inDrawer
      ? 'common.white'
      : isSearch
        ? isSmScreen
          ? 'common.black'
          : 'primary.main'
        : scrolled
          ? 'common.white'
          : !isMdScreen && !isSmScreen
            ? 'primary.main'
            : 'common.white',
    textTransform: 'none',
    fontWeight: 500,
    '&:hover': {
      color: inDrawer
        ? 'common.white'
        : isSearch
          ? isSmScreen
            ? 'common.black'
            : 'primary.main'
          : scrolled
            ? 'common.white'
            : !isMdScreen && !isSmScreen
              ? 'primary.main'
              : 'common.white'
    }
  };
};

export const langListStyle = (variant: MainLayoutType, scrolled: boolean, inDrawer: boolean): SxProps<Theme> => {
  const isHome = variant === MainLayoutType.HOME;
  const backColor = inDrawer ? 'common.white' : isHome ? 'common.white' : scrolled ? 'common.white' : 'primary.main';
  const textColor = inDrawer ? 'primary.main' : isHome ? 'primary.main' : scrolled ? 'primary.main' : 'common.white';

  return {
    display: 'flex',
    flexDirection: 'column',
    '& .MuiPaper-root': {
      backgroundColor: backColor,
    },
    '& .MuiMenuItem-root': {
      color: textColor
    }
  };
};
