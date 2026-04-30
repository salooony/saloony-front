export interface ProfileMenuItem {
  id: string;
  label: string;
}

export const PROFILE_MENU_ITEMS: ProfileMenuItem[] = [
  { id: 'personal-information', label: 'Personal Information' },
  { id: 'my-appointments', label: 'My appointments' },
  { id: 'close-contacts', label: 'Close Contacts' },
  { id: 'service-preferences', label: 'Service Preferences' },
  { id: 'notification-settings', label: 'Notification Settings' },
  { id: 'account-management', label: 'Account Management' }
];
