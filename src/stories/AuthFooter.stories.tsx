import type { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';

import AuthFooter from 'components/cards/AuthFooter';
import { useStoryColors } from './staticColors';

const meta: Meta<typeof AuthFooter> = {
  title: 'Components/AuthFooter',
  component: AuthFooter,
  decorators: [
    (Story: any) => {
      const colors = useStoryColors();

      return (
        <Box sx={{ bgcolor: colors.surface, p: { xs: 2, md: 4 } }}>
          <Story />
        </Box>
      );
    }
  ],
  parameters: {
    docs: {
      description: {
        component: 'Footer used across auth routes showing ownership and relevant legal links.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
