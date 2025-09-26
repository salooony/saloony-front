import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import { ThemeMode } from 'config';
import logoDark from '@public/assets/images/icons/logo-dark.png';
import logo from '@public/assets/images/icons/logo-white.png';

export default function LogoMain() {
  const theme = useTheme();

  return <Image src={theme.palette.mode === ThemeMode.DARK ? logoDark : logo} alt="Saloony Logo" width={150} height={105} />;
}
