import type { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';

import CircularLoader from 'components/CircularLoader';
import { useStoryColors } from './staticColors';

const meta: Meta<typeof CircularLoader> = {
  title: 'Components/CircularLoader',
  component: CircularLoader,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Inline circular progress indicator used inside search overlays and modals.'
      }
    }
  },
  decorators: [
    (Story: any) => {
      const colors = useStoryColors();

      return (
        <Box sx={{ width: 300, border: '1px dashed', borderColor: colors.border, borderRadius: 1 }}>
          <Story />
        </Box>
      );
    }
  ]
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
