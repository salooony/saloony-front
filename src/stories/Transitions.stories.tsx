import type { Meta, StoryObj } from '@storybook/react';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import Transitions from 'components/@extended/Transitions';

const meta: Meta<typeof Transitions> = {
  title: 'Components/Transitions',
  component: Transitions,
  args: {
    type: 'grow',
    in: true,
    children: <Button variant="contained">Animated Content</Button>
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['grow', 'collapse', 'fade', 'slide', 'zoom']
    },
    direction: {
      control: 'radio',
      options: ['up', 'down', 'left', 'right'],
      if: { arg: 'type', neq: 'slide' }
    },
    position: {
      control: 'select',
      options: ['top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right']
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Showcase: Story = {
  render: () => (
    <Stack spacing={2}>
      {['grow', 'collapse', 'fade', 'slide', 'zoom'].map((type) => (
        <Transitions key={type} type={type} direction="up" in>
          <Button variant={type === 'fade' ? 'outlined' : 'contained'}>{type}</Button>
        </Transitions>
      ))}
    </Stack>
  )
};
