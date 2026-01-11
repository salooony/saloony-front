import type { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';

import About from 'components/about';

const meta: Meta<typeof About> = {
  title: 'Components/AboutSection',
  component: About,
  decorators: [
    (Story: any) => (
      <Box sx={{ maxWidth: 900, mx: 'auto', p: 4 }}>
        <Story />
      </Box>
    )
  ],
  parameters: {
    docs: {
      description: {
        component: 'Hero/About block rendered on the landing page with heading, accent icon, and supporting text.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
