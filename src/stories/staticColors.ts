import { useTheme, Theme } from '@mui/material/styles';

import config from 'config';
import Palette from '@src/themes/palette';

const baseTheme = Palette(config.mode, config.presetColor);

const pick = (color: Record<string, any>, keys: string[], fallback: string) => {
  for (const key of keys) {
    const value = color?.[key];
    if (typeof value === 'string') return value;
  }
  return fallback;
};

const buildStoryColors = (theme: Theme) => {
  const paletteGrey = theme.palette.grey as Record<string, any>;
  const palettePrimary = theme.palette.primary as Record<string, any>;
  const paletteSecondary = theme.palette.secondary as Record<string, any>;
  const paletteInfo = theme.palette.info as Record<string, any>;
  const paletteError = theme.palette.error as Record<string, any>;

  return {
    surface: theme.palette.background.paper,
    backdrop: theme.palette.background.default,
    panel: (paletteGrey && typeof paletteGrey['100'] === 'string' ? paletteGrey['100'] : theme.palette.background.paper) as string,
    primary: pick(palettePrimary, ['main'], theme.palette.common.black),
    primaryLight: pick(palettePrimary, ['light', '200', '100'], pick(palettePrimary, ['main'], theme.palette.common.black)),
    primaryLighter: pick(palettePrimary, ['lighter', '100', '50'], pick(palettePrimary, ['light', 'main'], theme.palette.common.black)),
    primaryDark: pick(palettePrimary, ['dark', '700'], pick(palettePrimary, ['main'], theme.palette.common.black)),
    secondaryLight: pick(paletteSecondary, ['light', '200'], pick(paletteSecondary, ['main'], theme.palette.common.black)),
    secondaryLighter: pick(
      paletteSecondary,
      ['lighter', '100', 'A100'],
      pick(paletteSecondary, ['light', 'main'], theme.palette.common.black)
    ),
    infoLight: pick(paletteInfo, ['light', '200'], pick(paletteInfo, ['main'], theme.palette.common.black)),
    infoLighter: pick(paletteInfo, ['lighter', '100', 'A100'], pick(paletteInfo, ['light', 'main'], theme.palette.common.black)),
    accentBlue: pick(paletteInfo, ['main'], theme.palette.common.black),
    accentPink: pick(paletteError, ['main'], theme.palette.common.black),
    accentPurple: pick(palettePrimary, ['dark', '700'], pick(palettePrimary, ['main'], theme.palette.common.black)),
    text: theme.palette.text.primary,
    textMuted: theme.palette.text.secondary,
    border: theme.palette.divider,
    black: theme.palette.common.black,
    white: theme.palette.common.white
  };
};

export const getStoryColors = (theme: Theme) => buildStoryColors(theme);
export const useStoryColors = () => {
  const theme = useTheme();
  return getStoryColors(theme);
};

export const storyColors = buildStoryColors(baseTheme);
