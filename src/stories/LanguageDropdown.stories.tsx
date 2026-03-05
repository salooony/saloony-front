import type { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';
import { useTheme, Theme } from '@mui/material/styles';

import LanguageDropdown from 'components/languageDropdown';

const getThemeDefaults = (theme: Theme) => ({
  color: theme.palette.primary.main,
  bgColor: theme.palette.background.paper,
  listItemColor: theme.palette.primary.dark
});

const meta: Meta<typeof LanguageDropdown> = {
  title: 'Components/LanguageDropdown',
  component: LanguageDropdown,
  parameters: {
    docs: {
      description: {
        component: 'Language selection dropdown with customizable palette and horizontal spacing.'
      }
    }
  },
  argTypes: {
    color: {
      control: 'color'
    },
    bgColor: {
      control: 'color'
    },
    listItemColor: {
      control: 'color'
    },
    ml: { control: { type: 'number', min: 0, step: 0.5 } }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

const DefaultContent = (args: any) => {
  const theme = useTheme();
  const mergedArgs = { ...getThemeDefaults(theme), ...args };
  return (
    <Box sx={{ p: 4, bgcolor: theme.palette.background.default }}>
      <LanguageDropdown {...mergedArgs} />
    </Box>
  );
};

const DarkMenuContent = (args: any) => {
  const theme = useTheme();
  const mergedArgs = {
    ...getThemeDefaults(theme),
    color: theme.palette.common.white,
    bgColor: theme.palette.primary.dark,
    listItemColor: theme.palette.common.white,
    ...args
  };
  return (
    <Box sx={{ p: 4, bgcolor: theme.palette.common.black }}>
      <LanguageDropdown {...mergedArgs} />
    </Box>
  );
};

const WithOffsetContent = (args: any) => {
  const theme = useTheme();
  const mergedArgs = { ...getThemeDefaults(theme), ...args };
  return (
    <Box sx={{ p: 4, bgcolor: theme.palette.background.default }}>
      <LanguageDropdown {...mergedArgs} />
    </Box>
  );
};

export const Default: Story = {
  args: {
    bgColor: '#877754',
    listItemColor: '#ffff'
  },
  render: (args) => <DefaultContent {...args} />
};

export const DarkMenu: Story = {
  args: {
    bgColor: '#877754'
  },
  render: (args: any) => <DarkMenuContent {...args} />
};

export const WithOffset: Story = {
  args: {
    ml: 2,
    color: '#877754',
    bgColor: '#877754',
    listItemColor: '#ffff'
  },
  render: (args) => <WithOffsetContent {...args} />
};
