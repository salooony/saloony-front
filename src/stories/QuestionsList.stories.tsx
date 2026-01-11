import type { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';

import QuestionsList from 'components/QuestionsList';

const meta: Meta<typeof QuestionsList> = {
  title: 'Components/QuestionsList',
  component: QuestionsList,
  decorators: [
    (Story: any) => (
      <Box sx={{ maxWidth: 700, mx: 'auto', p: { xs: 2, md: 4 } }}>
        <Story />
      </Box>
    )
  ],
  parameters: {
    docs: {
      description: {
        component: 'Accordion list of frequently asked questions pulled from project constants.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
