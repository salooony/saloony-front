import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import { ThemeMode } from 'config';
import logoDark from '@public/assets/images/icons/logo-dark.png';
import logo from '@public/assets/images/icons/logo-white.png';

interface Props {
  width?: number;
  height?: number;
}

export default function LogoMain({ width = 214, height = 150 }: Props) {
  const theme = useTheme();

  return <Image src={theme.palette.mode === ThemeMode.DARK ? logoDark : logo} alt="Saloony Logo" width={width} height={height} />;
}
