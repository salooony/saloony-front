import type { Meta, StoryObj } from '@storybook/react';
import ProfessionalButton from 'components/professional-button/professionalButton';

const meta: Meta<typeof ProfessionalButton> = {
  title: 'Components/ProfessionalButton',
  component: ProfessionalButton,
  argTypes: {
    scrolled: { control: 'boolean' },
    isMdScreen: { control: 'boolean' }
  }
};

export default meta;

type Story = StoryObj<typeof ProfessionalButton>;

export const Default: Story = {
  args: {
    scrolled: false,
    isMdScreen: false
  }
};

export const Scrolled: Story = {
  args: {
    scrolled: true,
    isMdScreen: false
  }
};
