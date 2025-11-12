import Image from 'next/image';
import logoDark from '@public/assets/images/icons/logo-dark.png';
import logo from '@public/assets/images/icons/logo-white.png';
import { ThemeMode } from '@src/config';

interface Props {
  width?: number;
  height?: number;
  color?: ThemeMode;
}

export default function LogoMain({ width = 214, height = 150, color = ThemeMode.LIGHT }: Props) {
  return <Image src={color === ThemeMode.DARK ? logoDark : logo} alt="Saloony Logo" width={width} height={height} />;
}
