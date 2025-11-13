import { SocialBtn, SocialButtonsConfig } from '@src/types/auth';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { signIn } from 'next-auth/react';

import { APP_DEFAULT_PATH } from '@src/config';

export const buildSocialButtons = (config: SocialButtonsConfig = {}): SocialBtn[] => {
  return [
    {
      key: 'google',
      label: 'Sign up with your Google account',
      Icon: GoogleIcon,
      onClick: () => signIn('google', { callbackUrl: APP_DEFAULT_PATH })
    },
    {
      key: 'facebook',
      label: 'Sign up with your Facebook account',
      Icon: FacebookIcon,
      onClick: () => signIn('facebook', { callbackUrl: APP_DEFAULT_PATH })
    }
  ];
};

// 😎 Default set; call buildSocialButtons(config) when custom IDs or callbackUrl are needed 😎.
export const items = buildSocialButtons();
