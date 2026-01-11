import { Theme } from '@mui/material/styles';

export const justifiedTextWithLineStyle = (theme: Theme, lineWidth: number | string = 35) => {
  const widthValue = typeof lineWidth === 'number' ? `${lineWidth}px` : lineWidth;

  return {
    width: widthValue,
    height: 3,
    backgroundColor: theme.palette.primary.dark,
    position: 'absolute',
    bottom: 3
  };
};
