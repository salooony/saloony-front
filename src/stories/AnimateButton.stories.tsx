import type { Meta, StoryObj } from '@storybook/react';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import AnimateButton from 'components/@extended/AnimateButton';

const meta: Meta<typeof AnimateButton> = {
  title: 'Components/AnimateButton',
  component: AnimateButton,
  args: {
    type: 'scale',
    direction: 'right',
    offset: 10
  },
  argTypes: {
    type: { control: 'radio', options: ['scale', 'slide', 'rotate'] },
    direction: { control: 'radio', options: ['up', 'down', 'left', 'right'] },
    offset: {
      control: {
        type: 'number',
        min: 0,
        max: 30,
        step: 2
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args: any) => (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <AnimateButton {...args}>
        <Button variant="contained">Hover me</Button>
      </AnimateButton>
    </Box>
  )
};

export const SlidesAndRotations: Story = {
  render: () => (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={2}
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <AnimateButton type="slide" direction="up">
        <Button variant="outlined">Slide Up</Button>
      </AnimateButton>

      <AnimateButton type="slide" direction="right">
        <Button color="secondary">Slide Right</Button>
      </AnimateButton>

      <AnimateButton type="rotate">
        <Button color="success">Rotate</Button>
      </AnimateButton>
    </Stack>
  )
};
