import type { Meta, StoryObj } from '@storybook/react';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { storyColors, useStoryColors } from './staticColors';
const TYPOGRAPHY_VARIANTS = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'button',
  'caption',
  'overline'
] as const;
const meta: Meta<typeof Typography> = {
  title: 'MUI/Typography',
  component: Typography,
  args: {
    variant: 'body1',
    children: 'Sample typography text',
    gutterBottom: false
  },
  argTypes: {
    variant: {
      control: 'select',
      options: TYPOGRAPHY_VARIANTS
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Scale: Story = {
  render: () => {
    const colors = useStoryColors();

    return (
      <Stack spacing={1}>
        {TYPOGRAPHY_VARIANTS.map((variant) => (
          <Stack key={variant} spacing={0}>
            <Typography variant="caption" sx={{ color: colors.textMuted }}>
              {variant}
            </Typography>
            <Typography variant={variant as any}>The quick brown fox jumps over the lazy dog.</Typography>
          </Stack>
        ))}
      </Stack>
    );
  }
};

export const CustomStyles: Story = {
  args: {
    variant: 'h5',
    sx: { color: storyColors.primary, textTransform: 'uppercase', letterSpacing: 2 },
    children: 'Branded Headline'
  }
};
