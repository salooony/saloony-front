export const ProfessionalButtonStyle = (scrolled: boolean, isMdScreen: boolean) => {

  const mainColor = isMdScreen ? 'common.white' : scrolled ? 'common.white' : 'primary.main';
  const textColor = isMdScreen ? 'primary.main' : scrolled ? 'primary.main' : 'common.white';
  const hoverColor = isMdScreen ? 'common.white' : scrolled ? 'common.white' : 'primary.main';
  const hoverTextColor = isMdScreen ? 'primary.main' : scrolled ? 'primary.main' : 'common.white';

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