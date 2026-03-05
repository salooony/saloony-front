import type { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useStoryColors } from './staticColors';

const buildStackBgColors = (colors: ReturnType<typeof useStoryColors>) => [colors.primaryLight, colors.secondaryLight, colors.infoLight];

const PlaygroundContent = (args: any) => {
  const colors = useStoryColors();
  const stackBgColors = buildStackBgColors(colors);

  return (
    <Stack {...args}>
      {['Primary', 'Secondary', 'Info'].map((label, index) => (
        <Box key={label} sx={{ bgcolor: stackBgColors[index], p: 2, borderRadius: 1 }}>
          {label}
        </Box>
      ))}
    </Stack>
  );
};

const ColumnWithDividersContent = (args: any) => {
  const colors = useStoryColors();
  const stackBgColors = buildStackBgColors(colors);

  return (
    <Stack {...args} divider={<Box component="span" sx={{ width: '100%', height: 1, bgcolor: colors.border }} />}>
      {['Primary', 'Secondary', 'Info'].map((label, index) => (
        <Box key={label} sx={{ bgcolor: stackBgColors[index], p: 2, borderRadius: 1 }}>
          {label}
        </Box>
      ))}
    </Stack>
  );
};

const ResponsiveContent = (args: any) => {
  const colors = useStoryColors();
  const stackBgColors = buildStackBgColors(colors);

  return (
    <Stack {...args}>
      {['Primary', 'Secondary', 'Info'].map((label, index) => (
        <Box key={label} sx={{ bgcolor: stackBgColors[index], p: 2, borderRadius: 1 }}>
          {label}
        </Box>
      ))}
    </Stack>
  );
};

const meta: Meta<typeof Stack> = {
  title: 'MUI/Stack',
  component: Stack,
  args: {
    direction: 'row',
    spacing: 2
  },
  argTypes: {
    direction: {
      control: 'radio',
      options: ['row', 'row-reverse', 'column', 'column-reverse']
    },
    spacing: {
      control: { type: 'number', min: 0, max: 10, step: 0.5 }
    },
    divider: { control: false }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args: any) => <PlaygroundContent {...args} />
};

export const ColumnWithDividers: Story = {
  args: {
    direction: 'column',
    spacing: 2
  },
  render: (args: any) => <ColumnWithDividersContent {...args} />
};

export const Responsive: Story = {
  args: {
    direction: { xs: 'column', sm: 'row' },
    spacing: { xs: 1, sm: 3 }
  },
  render: (args: any) => <ResponsiveContent {...args} />
};
