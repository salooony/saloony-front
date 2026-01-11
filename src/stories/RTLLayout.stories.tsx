import type { Meta, StoryObj } from '@storybook/react';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import RTLLayout from 'components/RTLLayout';
import useConfig from 'hooks/useConfig';
import { ThemeDirection } from 'config';
import { useStoryColors } from './staticColors';

const meta: Meta<typeof RTLLayout> = {
  title: 'Components/RTLLayout',
  component: RTLLayout,
  parameters: {
    docs: {
      description: {
        component: 'Emotion cache wrapper that toggles between LTR/RTL document directions based on global config.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

const DirectionDemo = () => {
  const { themeDirection, onChangeDirection } = useConfig();
  const colors = useStoryColors();

  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={1}>
        <Button
          variant={themeDirection === ThemeDirection.LTR ? 'contained' : 'outlined'}
          onClick={() => onChangeDirection(ThemeDirection.LTR)}
        >
          LTR
        </Button>
        <Button
          variant={themeDirection === ThemeDirection.RTL ? 'contained' : 'outlined'}
          onClick={() => onChangeDirection(ThemeDirection.RTL)}
        >
          RTL
        </Button>
      </Stack>
      <RTLLayout>
        <Stack spacing={1} sx={{ border: '1px dashed', borderColor: colors.border, p: 2 }}>
          <Typography variant="body1">Direction aware content</Typography>
          <Typography variant="body2">Current: {themeDirection.toUpperCase()}</Typography>
        </Stack>
      </RTLLayout>
    </Stack>
  );
};

export const Default: Story = {
  render: () => <DirectionDemo />
};
