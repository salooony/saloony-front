import type { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';

import Questions from 'components/questions';

const meta: Meta<typeof Questions> = {
  title: 'Components/QuestionsSection',
  component: Questions,
  decorators: [
    (Story: any) => (
      <Box sx={{ maxWidth: 900, mx: 'auto', p: { xs: 2, md: 4 } }}>
        <Story />
      </Box>
    )
  ],
  parameters: {
    docs: {
      description: {
        component: 'Full Q&A block containing the heading accent and FAQ accordions.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
