import React from 'react';
import { Box, Link as MuiLink, IconButton, Button } from '@mui/material';
import UserOutlined from '@ant-design/icons/UserOutlined';
import AnimateButton from 'components/@extended/AnimateButton';
import { MainLayoutType } from '@src/config';
import { headerButtonStyle } from './style';
type Props = {
  useIcon?: boolean;
  user?: any;
  appDefaultPath: string;
  loginPath: string;
  variant: MainLayoutType;
  scrolled: boolean;
  isMdScreen: boolean;
  openInNewTab?: boolean;
};

export default function HeaderUserButton({
  useIcon = false,
  user,
  appDefaultPath,
  loginPath,
  variant,
  scrolled,
  isMdScreen,
  openInNewTab = false,
}: Props) {
  const href = user ? appDefaultPath : loginPath;
  const target = openInNewTab ? '_blank' : undefined;
  const isSearch = variant === MainLayoutType.SEARCH;

  const content = useIcon ? (
    <Box>
      <AnimateButton>
        <IconButton
          sx={{
            bgcolor: isSearch ? 'common.black' : 'common.white',
            color: isSearch ? 'common.white' : 'primary.main',
            borderRadius: '50%',
            '&:hover': {
              bgcolor: isSearch ? 'common.black' : 'common.white',
              color: isSearch ? 'common.white' : 'primary.main'
            }
          }}
        >
          {user ? 'Mon compte' : <UserOutlined />}
        </IconButton>
      </AnimateButton>
    </Box>
  ) : (
    <AnimateButton>
      <Button variant="text" sx={headerButtonStyle(variant, scrolled, isMdScreen)}>
        {user ? 'Mon compte' : 'Login'}
      </Button>
    </AnimateButton>
  );

  return (
    <MuiLink
      className="header-link"
      href={href}
      target={target}
      underline="none"
      sx={{
        color: 'common.white',
        paddingLeft: '0 !important',
        paddingRight: '0 !important',
      }}
    >
      {content}
    </MuiLink>
  );
}
