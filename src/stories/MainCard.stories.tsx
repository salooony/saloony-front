import type { Meta, StoryObj } from '@storybook/react';

import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import MainCard from 'components/MainCard';
import { useStoryColors } from './staticColors';

const DefaultChildren = () => {
  const colors = useStoryColors();

  return (
    <Stack spacing={1}>
      <Typography variant="body1">This is the default MainCard content.</Typography>
      <Typography variant="body2" sx={{ color: colors.textMuted }}>
        Use the controls to toggle borders, headers, dividers, and more.
      </Typography>
    </Stack>
  );
};

const meta: Meta<typeof MainCard> = {
  title: 'Components/MainCard',
  component: MainCard,
  args: {
    title: 'Main Card Title',
    subheader: 'Optional subheader',
    children: <DefaultChildren />,
    content: true,
    border: true,
    divider: true,
    darkTitle: false,
    boxShadow: false
  },
  argTypes: {
    title: { control: 'text' },
    subheader: { control: 'text' },
    border: { control: 'boolean' },
    divider: { control: 'boolean' },
    content: { control: 'boolean' },
    boxShadow: { control: 'boolean' },
    darkTitle: { control: 'boolean' }
  },
  parameters: {
    docs: {
      description: {
        component:
          'MainCard is the base surface component used widely across the app. These stories help visualize the key configuration combinations.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DarkTitle: Story = {
  args: {
    darkTitle: true,
    title: 'Dark Title'
  }
};

export const WithoutBorder: Story = {
  args: {
    border: false,
    boxShadow: true,
    shadow: '0px 8px 24px rgba(0,0,0,0.12)'
  }
};

export const CustomContent: Story = {
  args: {
    title: 'Card With Custom Content',
    children: (
      <Stack spacing={2}>
        <Typography variant="body1">Mix arbitrary elements inside the card.</Typography>
        <Divider />
        <Stack direction="row" spacing={1}>
          <Button variant="contained">Accept</Button>
          <Button variant="outlined">Cancel</Button>
        </Stack>
      </Stack>
    )
  }
};

export const NoContentWrapper: Story = {
  args: {
    content: false,
    children: <Typography variant="body1">The `content` prop disables the CardContent wrapper so children render directly.</Typography>
  }
};
