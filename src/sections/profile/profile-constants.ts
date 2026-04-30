import { SxProps, Theme } from '@mui/material/styles';
import { readOnlyInputFieldStyle } from './personal-info-style';

/**
 * Static text constants for the profile section.
 */
export const PROFILE_TEXTS = {
  CONTACT_DETAILS_TITLE: 'My contact details',
  CREDIT_CARDS_TITLE: 'Credit cards',
  PASSWORD_TITLE: 'Password',
  PASSWORD_INSTRUCTION: 'To change your password, please enter your current password to confirm your identity.',
  ADD_CARD_HINT: 'want to add another card? Book an appointment or place an order and select "Add a card" before confirming',
  CANCEL_BUTTON: 'Cancel',
  SAVE_BUTTON: 'Save',
  CONFIRM_BUTTON: 'Confirm',
  LOGOUT_BUTTON: 'Log out',
  PASSWORD_PLACEHOLDER: 'Enter your current password',
  PLACEHOLDER_TITLE: 'Placeholder',
  PLACEHOLDER_DESCRIPTION: 'Actual functionality and layout for this section has not been implemented yet.'
};

import { PersonalInfoValues } from './usePersonalInformation';

/**
 * Form field configuration type.
 */
export interface FieldConfig {
  label: string;
  name: keyof PersonalInfoValues;
  disabled?: boolean;
  sx?: SxProps<Theme>;
}

/**
 * Personal information form fields configuration.
 */
export const PERSONAL_INFO_FIELDS: FieldConfig[] = [
  { label: 'First Name*', name: 'firstname' },
  { label: 'Last Name*', name: 'lastname' },
  { label: 'Email address', name: 'email', disabled: true, sx: readOnlyInputFieldStyle },
  { label: 'Phone Number*', name: 'phonenumber' }
];
