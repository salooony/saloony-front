import type { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';

import ImageSlider from 'components/image-slider';

const meta: Meta<typeof ImageSlider> = {
  title: 'Components/ImageSlider',
  component: ImageSlider,
  decorators: [
    (Story: any) => (
      <Box sx={{ maxWidth: 1000, mx: 'auto', p: { xs: 2, md: 4 } }}>
        <Story />
      </Box>
    )
  ],
  parameters: {
    docs: {
      description: {
        component: 'Auto-playing slider cycling through hero imagery with manual navigation support.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
