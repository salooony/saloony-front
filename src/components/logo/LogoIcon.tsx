import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import { ThemeMode } from 'config';
import logoIconDark from '@public/assets/images/icons/logo-icon-dark.png';
import logoIconWhite from '@public/assets/images/icons/logo-icon-white.png';

export default function LogoIcon() {
  const theme = useTheme();

  return <Image src={theme.palette.mode === ThemeMode.DARK ? logoIconDark : logoIconWhite} alt="Mantis" width={129} height={129} />;
}
