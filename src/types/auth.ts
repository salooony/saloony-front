import GoogleIcon from '@mui/icons-material/Google';
import { ReactNode } from 'react';
// ==============================|| AUTH TYPES ||============================== //

export type GuardProps = {
  readonly children: ReactNode;
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


 export interface RegisterFormValues {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  password: string;
  dateofbirth: string;
  submit: null | string;
}

export interface RegisterUserRequest {
  firstname: string;
  lastname: string;
  email: string;
  mobileNumber: string;
  birthdate: string;
  password: string;
  role: string;
  language: string;
}

export interface RegisterUserResponse {
  success: boolean;
  user: User;
}

export interface User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  mobileNumber: string;
  birthdate: string; // ISO string
  language: string;
  role: 'user' | 'admin';
  saloons: any[];
  createdAt: string;
  updatedAt: string;
}
