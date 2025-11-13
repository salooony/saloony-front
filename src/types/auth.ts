import { ReactElement } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
// ==============================|| AUTH TYPES ||============================== //

export type GuardProps = {
  children: ReactElement | null;
};

export type AuthLoginProps = {
  callbackUrl: string;
  // if you want to override provider IDs (defaults provided)
  providerIds?: {
    google?: string;
    facebook?: string;
  };
};

export type SocialBtn = {
  key: 'google' | 'facebook';
  label: string;
  Icon: typeof GoogleIcon;
  onClick: () => void;
};

export type SocialButtonsConfig = {
  callbackUrl?: string;
  providerIds?: AuthLoginProps['providerIds'];
};
