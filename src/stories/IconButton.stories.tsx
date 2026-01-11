import type { Meta, StoryObj } from '@storybook/react';

import ShareAltOutlined from '@ant-design/icons/ShareAltOutlined';
import HeartOutlined from '@ant-design/icons/HeartOutlined';
import Stack from '@mui/material/Stack';

import ExtendedIconButton from 'components/@extended/IconButton';

const meta: Meta<typeof ExtendedIconButton> = {
  title: 'Components/IconButton',
  component: ExtendedIconButton,
  args: {
    color: 'primary',
    variant: 'contained',
    shape: 'square',
    children: <HeartOutlined />
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'contained', 'outlined', 'dashed', 'light', 'shadow']
    },
    shape: {
      control: 'radio',
      options: ['square', 'rounded']
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'error']
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: <HeartOutlined />
  }
};

export const Variants: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      {['text', 'contained', 'outlined', 'light', 'shadow', 'dashed'].map((variant) => (
        <ExtendedIconButton key={variant} variant={variant as any} color="secondary">
          <ShareAltOutlined />
        </ExtendedIconButton>
      ))}
    </Stack>
  )
};

export const Rounded: Story = {
  args: {
    shape: 'rounded',
    variant: 'shadow'
  }
};
