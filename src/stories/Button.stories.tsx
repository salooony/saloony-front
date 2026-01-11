import type { Meta, StoryObj } from '@storybook/react';

import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import type { ButtonVariantProps } from 'types/extended';

const buttonColors: NonNullable<ButtonProps['color']>[] = ['primary', 'secondary', 'info', 'success', 'warning', 'error'];
const buttonVariants: ButtonVariantProps[] = ['contained', 'outlined', 'text', 'dashed', 'shadow', 'light'];

const meta: Meta<typeof Button> = {
  title: 'MUI/Button',
  component: Button,
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'All button variants coming from the custom Mantis theme, including the dashed and shadow variants registered in the theme overrides.'
      }
    }
  },
  argTypes: {
    variant: {
      control: 'select',
      options: buttonVariants
    },
    color: {
      control: 'select',
      options: buttonColors
    },
    size: {
      control: 'inline-radio',
      options: ['small', 'medium', 'large']
    },
    fullWidth: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    }
  },
  args: {
    variant: 'contained',
    color: 'primary',
    size: 'medium',
    fullWidth: false,
    disabled: false,
    children: 'Action'
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  name: 'All_Variants',
  render: (args: ButtonProps) => (
    <Stack spacing={4}>
      {buttonVariants.map((variant) => (
        <Stack key={variant} spacing={1}>
          <Typography variant="h6" component="h3">
            {variant.charAt(0).toUpperCase() + variant.slice(1)}
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            {buttonColors.map((color) => (
              <Button key={`${variant}-${color}`} {...args} variant={variant} color={color}>
                {`${variant} ${color}`}
              </Button>
            ))}
          </Stack>
        </Stack>
      ))}
    </Stack>
  ),
  args: {
    children: undefined
  }
};
