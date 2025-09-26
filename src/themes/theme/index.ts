// project imports
import Default from './default';
import Theme1 from './theme1';

import { ThemeMode } from 'config';

// assets
import { PalettesProps } from '@ant-design/colors';

// types
import { PaletteThemeProps } from 'types/theme';
import { PresetColor } from 'types/config';

// ==============================|| PRESET THEME - THEME SELECTOR ||============================== //

export default function Theme(colors: PalettesProps, presetColor: PresetColor, mode: ThemeMode): PaletteThemeProps {
  if (presetColor === 'theme1') {
    return Theme1(colors, mode);
  } else {
    return Default(colors);
  }
}
