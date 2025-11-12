import type { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';

import Breadcrumbs from 'components/@extended/Breadcrumbs';

const sampleLinks = [{ title: 'Home', to: '/' }, { title: 'Components', to: '/components' }, { title: 'Breadcrumbs' }];

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  args: {
    custom: true,
    links: sampleLinks,
    heading: 'Components',
    title: true,
    divider: true,
    card: true
  },
  decorators: [
    (Story) => (
      <Box sx={{ maxWidth: 900, mx: 'auto', p: { xs: 2, md: 4 } }}>
        <Story />
      </Box>
    )
  ],
  parameters: {
    docs: {
      description: {
        component: 'Breadcrumb component that can render either navigation driven crumbs or custom ones through the `links` prop.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CustomLinks: Story = {};

export const WithoutCard: Story = {
  args: {
    card: false,
    divider: false
  }
};
