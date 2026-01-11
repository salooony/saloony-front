import type { Meta, StoryObj } from '@storybook/react';
import { useCallback } from 'react';
// import type { FC } from 'react';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { SWRConfig } from 'swr';

import Snackbar from 'components/@extended/Snackbar';
import { openSnackbar } from 'api/snackbar';

const meta = {
  title: 'Components/Snackbar',
  component: Snackbar,

  decorators: [
    (Story: any) => (
      <SWRConfig value={{ provider: () => new Map() }}>
        <Story />
      </SWRConfig>
    )
  ],

  parameters: {
    docs: {
      description: {
        component: 'Global snackbar component backed by SWR store. Stories provide buttons to trigger notifications using `openSnackbar`.'
      }
    }
  }
} satisfies Meta<typeof Snackbar>;

export default meta;

type Story = StoryObj<typeof meta>;

const SnackbarControls = () => {
  // Trigger Default Snackbar
  const triggerDefault = useCallback(() => {
    openSnackbar({
      open: true,
      message: 'Default snackbar',
      variant: 'default'
    });
  }, []);

  // Trigger Success Snackbar
  const triggerSuccess = useCallback(() => {
    openSnackbar({
      open: true,
      message: 'Action completed successfully',
      variant: 'alert',
      alert: { color: 'success', variant: 'filled' },
      transition: 'SlideUp'
    });
  }, []);

  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" onClick={triggerDefault}>
          Show default
        </Button>

        <Button variant="contained" color="success" onClick={triggerSuccess}>
          Show success
        </Button>
      </Stack>

      <Snackbar />
    </Stack>
  );
};

export const Default: Story = {
  render: () => <SnackbarControls />
};
