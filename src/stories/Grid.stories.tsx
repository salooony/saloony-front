import type { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useStoryColors } from './staticColors';

const meta: Meta<typeof Grid> = {
  title: 'MUI/Grid',
  component: Grid,
  args: {
    container: true,
    spacing: 2
  },
  argTypes: {
    columns: { control: { type: 'number', min: 1, max: 24, step: 1 } },
    spacing: { control: { type: 'number', min: 0, max: 10, step: 0.5 } }
  },
  render: (args: any) => {
    const colors = useStoryColors();

    return (
      <Grid {...args}>
        {[4, 4, 4, 6, 6, 12].map((size, index) => (
          <Grid item key={`${size}-${index}`} xs={12} sm={size}>
            <Box sx={{ bgcolor: colors.primaryLight, color: colors.primaryDark, borderRadius: 1, p: 2 }}>
              <Typography variant="body2">xs=12 sm={size}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    );
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const AutoColumns: Story = {
  args: {
    columns: { xs: 4, sm: 8, md: 12 }
  }
};

export const Nested: Story = {
  render: () => {
    const colors = useStoryColors();

    return (
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 2, bgcolor: colors.secondaryLighter, borderRadius: 1 }}>
            <Typography variant="subtitle1">Primary column</Typography>
            <Grid container spacing={1} sx={{ mt: 1 }}>
              {[6, 6, 4, 8].map((size, idx) => (
                <Grid item xs={size} key={`nested-${idx}`}>
                  <Box sx={{ bgcolor: colors.secondaryLight, p: 1, borderRadius: 1 }} textAlign="center">
                    xs={size}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 2, bgcolor: colors.infoLighter, borderRadius: 1 }}>
            <Typography variant="subtitle1">Secondary column</Typography>
            <Typography variant="body2">Demonstrates independent grid items.</Typography>
          </Box>
        </Grid>
      </Grid>
    );
  }
};
