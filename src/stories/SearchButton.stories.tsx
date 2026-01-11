import type { Meta, StoryObj } from '@storybook/react';

import SearchButton from 'components/inputs/search-bar/SearchButton';

const meta: Meta<typeof SearchButton> = {
  title: 'Components/SearchButton',
  component: SearchButton,
  args: {
    disabled: false
  },
  argTypes: {
    onClick: { action: 'searchClicked' }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};
