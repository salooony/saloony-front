import type { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ScrollTop from 'components/ScrollTop';
import { useStoryColors } from './staticColors';

const meta: Meta<typeof ScrollTop> = {
  title: 'Components/ScrollTop',
  component: ScrollTop,
  parameters: {
    docs: {
      description: {
        component:
          'Utility wrapper that scrolls the window to top whenever the route changes. Story renders long content for demonstration.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

const LongContent = () => {
  const colors = useStoryColors();

  return (
    <Box sx={{ maxHeight: 300, overflowY: 'auto', p: 2, border: '1px solid', borderColor: colors.border }}>
      {[...Array(20)].map((_, idx) => (
        <Typography key={idx} paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut urna ut metus sollicitudin egestas. ({idx + 1})
        </Typography>
      ))}
    </Box>
  );
};

export const Default: Story = {
  render: () => (
    <ScrollTop>
      <LongContent />
    </ScrollTop>
  )
};
