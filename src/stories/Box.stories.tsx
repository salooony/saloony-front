import type { Meta, StoryObj } from '@storybook/react';

import Box, { BoxProps } from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { storyColors, useStoryColors } from './staticColors';

const meta: Meta<typeof Box> = {
  title: 'MUI/Box',
  component: Box,
  args: {
    bgcolor: storyColors.primaryLighter,
    color: storyColors.primaryDark,
    p: 3,
    borderRadius: 2,
    children: 'Box content'
  },
  argTypes: {
    p: { control: { type: 'number', min: 0, max: 8, step: 0.5 } },
    borderRadius: { control: { type: 'number', min: 0, max: 6, step: 0.5 } },
    display: { control: 'text' },
    bgcolor: { control: 'color' },
    color: { control: 'color' }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

const renderDemoBoxes = (layoutProps: BoxProps, colors: ReturnType<typeof useStoryColors>) => (
  <Box {...layoutProps}>
    {['One', 'Two', 'Three'].map((label) => (
      <Box key={label} sx={{ bgcolor: colors.primaryLight, color: colors.primaryDark, p: 2, borderRadius: 1 }}>
        {label}
      </Box>
    ))}
  </Box>
);

const FlexRowContent = () => {
  const colors = useStoryColors();
  return renderDemoBoxes({ display: 'flex', gap: 2, flexDirection: 'row' }, colors);
};

const FlexColumnContent = () => {
  const colors = useStoryColors();
  return renderDemoBoxes({ display: 'flex', gap: 2, flexDirection: 'column' }, colors);
};

const WithBackgroundImageContent = () => {
  const colors = useStoryColors();
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(120deg, ${colors.primaryLight} 0%, ${colors.primary} 100%)`,
        color: colors.white,
        p: 4,
        borderRadius: 3
      }}
    >
      <Typography variant="h6">Stylized Box</Typography>
      <Typography variant="body2">Use the `sx` prop to compose backgrounds, shadows, and layout utilities.</Typography>
    </Box>
  );
};

export const FlexRow: Story = {
  name: 'Flex/Row',
  render: () => <FlexRowContent />
};

export const FlexColumn: Story = {
  name: 'Flex/Column',
  render: () => <FlexColumnContent />
};

export const WithBackgroundImage: Story = {
  render: () => <WithBackgroundImageContent />
};
