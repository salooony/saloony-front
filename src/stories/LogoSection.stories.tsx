import type { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';

import LogoSection from 'components/logo';
import { useStoryColors } from './staticColors';

const meta: Meta<typeof LogoSection> = {
  title: 'Components/LogoSection',
  component: LogoSection,
  args: {
    isIcon: false,
    isHeader: false
  },
  argTypes: {
    isIcon: { control: 'boolean' },
    isHeader: { control: 'boolean' },
    to: { control: 'text' }
  },
  decorators: [
    (Story: any) => {
      const colors = useStoryColors();

      return (
        <Box sx={{ bgcolor: colors.black, p: 4, display: 'flex', justifyContent: 'center' }}>
          <Story />
        </Box>
      );
    }
  ],
  parameters: {
    docs: {
      description: {
        component: 'Brand logo entry point. Toggle between the icon-only or full wordmark states.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const HeaderIcon: Story = {
  args: {
    isIcon: true,
    isHeader: true
  }
};
