import type { Meta, StoryObj } from '@storybook/react';
import type { FC } from 'react';
import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

import Box from '@mui/material/Box';

import SearchBar from 'components/inputs/search-bar';
import { AppRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';

const logRouter = (method: string, ...args: unknown[]) => {
  // console.log(`[router.${method}]`, ...args);
  return () => {};
};

const mockRouter: AppRouterInstance = {
  back: () => logRouter('back'),
  forward: () => logRouter('forward'),
  refresh: () => logRouter('refresh'),
  push: (...args) => logRouter('push', ...args),
  replace: (...args) => logRouter('replace', ...args),
  prefetch: (...args) => Promise.resolve(logRouter('prefetch', ...args))
};

const meta = {
  title: 'Components/SearchBar',
  component: SearchBar,

  decorators: [
    (Story: FC) => (
      <AppRouterContext.Provider value={mockRouter}>
        <Box sx={{ maxWidth: 900, mx: 'auto', p: { xs: 2, md: 4 } }}>
          <Story />
        </Box>
      </AppRouterContext.Provider>
    )
  ],

  parameters: {
    docs: {
      description: {
        component: 'Composed query/location search experience with modal fallback on mobile widths.'
      }
    }
  }
} satisfies Meta<typeof SearchBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
