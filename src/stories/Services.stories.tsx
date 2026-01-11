import type { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';

import Services from 'components/services';

const meta: Meta<typeof Services> = {
  title: 'Components/ServicesSection',
  component: Services,
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
        component: 'Section wrapper that combines the Main Services heading and the image slider.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
