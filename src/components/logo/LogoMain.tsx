import Image from 'next/image';
import logoDark from '@public/assets/images/icons/logo-dark.png';
import logo from '@public/assets/images/icons/logo-white.png';

interface Props {
  width?: number;
  height?: number;
  color?: 'dark' | 'light';
}

export default function LogoMain({ width = 214, height = 150, color = 'light' }: Props) {

  return <Image src={color === 'dark' ? logoDark : logo} alt="Saloony Logo" width={width} height={height} />;
}
