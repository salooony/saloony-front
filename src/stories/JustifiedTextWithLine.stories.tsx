import type { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';

import JustifiedTextWithLine from 'components/@extended/justified-text-with-line';
import { useStoryColors } from './staticColors';

const meta: Meta<typeof JustifiedTextWithLine> = {
  title: 'Components/JustifiedTextWithLine',
  component: JustifiedTextWithLine,
  args: {
    children: 'Section Heading',
    lineWidth: 160
  },
  argTypes: {
    lineWidth: { control: { type: 'number', min: 40, max: 400, step: 10 } }
  },
  decorators: [
    (Story: any) => {
      const colors = useStoryColors();

      return (
        <Box sx={{ p: 4, bgcolor: colors.surface }}>
          <Story />
        </Box>
      );
    }
  ],
  parameters: {
    docs: {
      description: {
        component: 'Heading helper used throughout sections to render bold text with an accent underline.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomWidth: Story = {
  args: {
    lineWidth: 240,
    children: 'Custom width'
  }
};
