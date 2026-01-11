import type { Meta, StoryObj } from '@storybook/react';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const meta: Meta<typeof Link> = {
  title: 'MUI/Link',
  component: Link,
  args: {
    href: '#',
    underline: 'hover',
    children: 'Visit documentation'
  },
  argTypes: {
    underline: {
      control: 'radio',
      options: ['none', 'hover', 'always']
    },
    color: {
      control: 'select',
      options: ['inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error']
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Variants: Story = {
  render: () => (
    <Stack spacing={1}>
      <Typography variant="subtitle2">Underline</Typography>
      <Stack direction="row" spacing={2}>
        {['none', 'hover', 'always'].map((mode) => (
          <Link key={mode} href="#" underline={mode as 'none' | 'hover' | 'always'}>
            {mode}
          </Link>
        ))}
      </Stack>
      <Typography variant="subtitle2" sx={{ mt: 2 }}>
        Color
      </Typography>
      <Stack direction="row" spacing={2}>
        {['primary', 'secondary', 'error'].map((color) => (
          <Link key={color} href="#" color={color as any}>
            {color}
          </Link>
        ))}
      </Stack>
    </Stack>
  )
};

export const ButtonLink: Story = {
  args: {
    variant: 'button',
    underline: 'none',
    sx: { fontWeight: 600, textTransform: 'uppercase' },
    children: 'Call to Action'
  }
};
