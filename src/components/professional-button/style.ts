import { MainLayoutType } from '@src/config';

export const ProfessionalButtonStyle = (scrolled: boolean, isMdScreen: boolean, variant: MainLayoutType) => {
  const isSearch = variant === MainLayoutType.SEARCH;
  const mainColor = isMdScreen ? (isSearch ? 'primary.main' : 'common.white') : scrolled ? 'common.white' : 'primary.main';
  const textColor = isMdScreen ? (isSearch ? 'common.white' : 'primary.main') : scrolled ? 'primary.main' : 'common.white';
  const hoverColor = isMdScreen ? (isSearch ? 'primary.main' : 'common.white') : scrolled ? 'common.white' : 'primary.main';
  const hoverTextColor = isMdScreen ? (isSearch ? 'common.white' : 'primary.main') : scrolled ? 'primary.main' : 'common.white';

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