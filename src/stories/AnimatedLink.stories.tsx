import type { Meta, StoryObj } from '@storybook/react';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import AnimatedLink from 'components/@extended/animated-link';
import { storyColors, useStoryColors } from './staticColors';

const meta: Meta<typeof AnimatedLink> = {
  title: 'Components/AnimatedLink',
  component: AnimatedLink,
  args: {
    href: '#',
    color: storyColors.primaryDark
  },
  argTypes: {
    color: { control: 'color' },
    target: { control: 'text' }
  },
  parameters: {
    docs: {
      description: {
        component: 'Link wrapper adding underline animation on hover. Accepts full `LinkProps`.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args: any) => (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <AnimatedLink {...args}>Hover me</AnimatedLink>
    </Box>
  )
};

export const Variants: Story = {
  render: () => {
    const colors = useStoryColors();

    return (
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}
      >
        <AnimatedLink href="#" color={colors.primaryDark}>
          Primary
        </AnimatedLink>

        <AnimatedLink href="#" color={colors.accentPink}>
          Accent
        </AnimatedLink>

        <AnimatedLink href="#" color={colors.accentBlue} target="_blank">
          External
        </AnimatedLink>
      </Stack>
    );
  }
};
