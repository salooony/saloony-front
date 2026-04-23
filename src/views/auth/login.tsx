'use client';
// next
import Image from 'next/image';
import NextLink from 'next/link';

// material-ui
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AuthLogin from '@src/sections/auth/auth-forms/AuthLogin';
import Auth_Login from '@src/sections/auth/social-links';
import {
  formWrapperBoxStyle,
  loginGridStyle,
  loginIllustrationBoxStyle,
  loginTitleStyle,
  loginWrapperStyle,
  noAccountTextStyle,
  createAccountLinkStyle,
  centerFlexStyle
} from './style';
export default function Login() {
  return (
    <Box sx={loginWrapperStyle}>
      {/* Saloony Logo */}
      <Box sx={{ position: 'absolute', top: 5, left: 27 }}>
        <Image
          src="/assets/images/auth/saloony-logo-noir-png 1.png"
          alt="Saloony Logo"
          width={157}
          height={111}
          style={{ objectFit: 'contain' }}
          priority
        />
      </Box>

      <Grid container sx={loginGridStyle}>
        <Grid size={{ xs: 12, md: 6 }} sx={centerFlexStyle}>
          <Box sx={formWrapperBoxStyle}>
            <Typography variant="h1" sx={loginTitleStyle}>
              Log in
            </Typography>

            <AuthLogin providers={null} csrfToken="" />

            <Typography sx={noAccountTextStyle}>
              Don&apos;t have an account?{' '}
              <Link component={NextLink} href="/register" sx={createAccountLinkStyle}>
                Create one
              </Link>
            </Typography>

            <Auth_Login />
          </Box>
        </Grid>

        <Grid size={{ xs: 0, md: 6 }} sx={centerFlexStyle}>
          <Box sx={loginIllustrationBoxStyle}>
            <Image
              src="/assets/images/auth/login-illustration.png"
              alt="Login illustration"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
