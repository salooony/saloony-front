import type { Meta, StoryObj } from '@storybook/react';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Dot from 'components/@extended/Dot';

const colorOptions = ['primary', 'secondary', 'info', 'success', 'warning', 'error'] as const;

const meta: Meta<typeof Dot> = {
  title: 'Components/Dot',
  component: Dot,
  args: {
    color: 'primary',
    size: 12
  },
  argTypes: {
    color: { control: 'select', options: colorOptions },
    size: { control: { type: 'number', min: 4, max: 40, step: 2 } },
    variant: { control: 'radio', options: ['filled', 'outlined'] }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const PaletteShowcase: Story = {
  render: () => (
    <Stack spacing={1}>
      {colorOptions.map((color) => (
        <Stack key={color} direction="row" spacing={1} alignItems="center">
          <Typography sx={{ width: 96 }}>{color}</Typography>
          <Dot color={color} size={10} />
          <Dot color={color} size={14} variant="outlined" />
        </Stack>
      ))}
    </Stack>
  )
};
