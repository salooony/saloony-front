import type { Meta, StoryObj } from '@storybook/react';

import LanguageDropdown from 'components/languageDropdown';
import { MainLayoutType } from '@src/config';

type Story = StoryObj<typeof LanguageDropdown>;

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
    variant: {
      control: 'select',
      options: Object.values(MainLayoutType)
    },
    scrolled: { control: 'boolean' },
    inDrawer: { control: 'boolean' },
    isMdScreen: { control: 'boolean' }
  }
};

export default meta;

export const Default: Story = {
  args: {
    variant: MainLayoutType.HOME,
    scrolled: false
  }
};

export const Scrolled: Story = {
  args: {
    variant: MainLayoutType.HOME,
    scrolled: true
  }
};

export const InDrawer: Story = {
  args: {
    inDrawer: true
  }
};
