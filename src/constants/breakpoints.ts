import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


export const useIsMdScreen = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down('md'));
};
export const useIsSmScreen = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down('sm'));
};
