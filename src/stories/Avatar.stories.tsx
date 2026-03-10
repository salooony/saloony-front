import type { Meta, StoryObj } from '@storybook/react';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useStoryColors } from './staticColors';

import ExtendedAvatar from 'components/@extended/Avatar';

const colorOptions = ['primary', 'secondary', 'info', 'success', 'warning', 'error'] as const;
const sizeOptions = ['badge', 'xs', 'sm', 'md', 'lg', 'xl'] as const;
const typeOptions = ['filled', 'outlined', 'combined'] as const;

const meta: Meta<typeof ExtendedAvatar> = {
  title: 'Components/Avatar',
  component: ExtendedAvatar,
  args: {
    children: 'SL',
    color: 'primary',
    size: 'md',
    type: 'combined'
  },
  argTypes: {
    color: { control: 'select', options: colorOptions },
    size: { control: 'select', options: sizeOptions },
    type: { control: 'select', options: typeOptions }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

const SizesAndTypesContent = () => {
  const colors = useStoryColors();

  return (
    <Stack spacing={4}>
      {typeOptions.map((type) => (
        <Box
          key={type}
          sx={{
            p: 2,
            borderRadius: 2,
            border: '1px solid',
            borderColor: colors.border,
            bgcolor: colors.surface
          }}
        >
          <Typography variant="subtitle2" sx={{ mb: 2, textTransform: 'capitalize' }}>
            {type}
          </Typography>

          <Stack direction="row" spacing={2} alignItems="center">
            {sizeOptions.map((size, i) => (
              <ExtendedAvatar key={`${type}-${size}`} type={type} size={size} color={colorOptions[i]}>
                SL
              </ExtendedAvatar>
            ))}
          </Stack>
        </Box>
      ))}
    </Stack>
  );
};

export const SizesAndTypes: Story = {
  render: () => <SizesAndTypesContent />
};
