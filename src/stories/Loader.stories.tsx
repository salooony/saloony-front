import type { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';

import Loader from 'components/Loader';
import { useStoryColors } from './staticColors';

const meta: Meta<typeof Loader> = {
  title: 'Components/Loader',
  component: Loader,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'The top linear progress indicator displayed while pages or data are loading.'
      }
    }
  },
  render: () => {
    const colors = useStoryColors();

    return (
      <Box sx={{ minHeight: 200, backgroundColor: colors.surface }}>
        <Loader />
      </Box>
    );
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
