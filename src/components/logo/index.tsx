import NextLink from 'next/link';

// material-ui
import { SxProps } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';

// project imports
import LogoMain from './LogoMain';
import LogoIcon from './LogoIcon';

import { APP_DEFAULT_PATH } from 'config';

// ==============================|| MAIN LOGO ||============================== //

interface Props {
  readonly isIcon?: boolean;
  readonly isHeader?: boolean;
  readonly sx?: SxProps;
  readonly to?: string;
  readonly color?: 'dark' | 'light';
}


export default function LogoSection({ isIcon, isHeader, sx, to, color = 'light' }: Props) {
  const logoHeight = isHeader ? 100 : 150;
  const logoWidth = isHeader ? 140 : 214;

  return (
    <ButtonBase disableRipple component={NextLink} href={to || APP_DEFAULT_PATH} sx={sx}>
      {isIcon ? <LogoIcon /> : <LogoMain width={logoWidth} height={logoHeight} color={color} />}
    </ButtonBase>
  );
}

