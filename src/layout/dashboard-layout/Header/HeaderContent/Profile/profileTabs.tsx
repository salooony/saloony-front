import React from 'react';
// assets
import EditOutlined from '@ant-design/icons/EditOutlined';
import ProfileOutlined from '@ant-design/icons/ProfileOutlined';
import UserOutlined from '@ant-design/icons/UserOutlined';
import WalletOutlined from '@ant-design/icons/WalletOutlined';
import { ROUTES } from '@src/constants/routes';

/**
 * Tab configuration for the profile menu.
 */
export const profileTabs = [
  { id: 0, label: 'Edit Profile', icon: React.createElement(EditOutlined), route: ROUTES.PROFILE },
  { id: 1, label: 'View Profile', icon: React.createElement(UserOutlined), route: ROUTES.PROFILE },
  { id: 3, label: 'Social Profile', icon: React.createElement(ProfileOutlined) },
  { id: 4, label: 'Billing', icon: React.createElement(WalletOutlined) }
];
