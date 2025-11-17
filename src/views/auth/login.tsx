'use client';
// next
import Image from 'next/image';
import NextLink from 'next/link';

// material-ui
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import AuthLogin from 'sections/auth/auth-forms/AuthLogin';
import Auth_Login from '@src/sections/auth/social-links';
import {
  formWrapperBoxStyle,
  loginGridStyle,
  loginIllustrationBoxStyle,
  loginTitleStyle,
  loginWrapperStyle,
  noAccountTextStyle
} from './style';

export default function Login() {
  return (
    <Box sx={loginWrapperStyle}>
      <Grid container spacing={3} sx={loginGridStyle}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={formWrapperBoxStyle}>
            <Typography variant="h1" sx={loginTitleStyle}>
              Log in
            </Typography>

            <AuthLogin providers={null} csrfToken="" />

            <Typography sx={noAccountTextStyle}>
              Don&apos;t have an account?{' '}
              <Link component={NextLink} href="/register" sx={{ fontWeight: 'bold', ...noAccountTextStyle }}>
                Create one
              </Link>
            </Typography>

            <Auth_Login />
          </Box>
        </Grid>

        <Grid size={{ xs: 0, md: 6 }}>
          <Box sx={loginIllustrationBoxStyle}>
            <Image
              src="/assets/images/auth/283236feb227c4e600d857182cf653d4cabce2c3 (2).png"
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
