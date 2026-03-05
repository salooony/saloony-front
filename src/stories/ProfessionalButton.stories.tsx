import type { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';

import ProfessionalButton from 'components/professionalButton';
import type { ProfessionalButtonProps } from '@src/types/professionalButton';
import { storyColors, useStoryColors } from './staticColors';

const meta: Meta<typeof ProfessionalButton> = {
  title: 'Components/ProfessionalButton',
  component: ProfessionalButton,
  args: {
    mainColor: storyColors.primaryDark,
    textColor: storyColors.white
  },
  argTypes: {
    mainColor: { control: 'color' },
    textColor: { control: 'color' }
  },
  decorators: [
    (Story: any) => (
      <Box sx={{ maxWidth: 320, mx: 'auto' }}>
        <Story />
      </Box>
    )
  ],
  parameters: {
    docs: {
      description: {
        component: 'CTA button linking beauty professionals to the onboarding funnel.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

const DefaultContent = (args: ProfessionalButtonProps) => {
  const colors = useStoryColors();
  const mergedArgs = { mainColor: colors.primaryDark, textColor: colors.white, ...args };
  return <ProfessionalButton {...mergedArgs} />;
};

export const Default: Story = {
  render: (args: ProfessionalButtonProps) => <DefaultContent {...args} />
};
