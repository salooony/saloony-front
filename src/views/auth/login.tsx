'use client';
<<<<<<< HEAD

// next
import NextLink from 'next/link';
import { getProviders, getCsrfToken, useSession } from 'next-auth/react';

// material-ui
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project imports
import AuthWrapper from 'sections/auth/AuthWrapper';
import AuthLogin from 'sections/auth/auth-forms/AuthLogin';

export default function SignIn() {
  const { data: session } = useSession();
  const csrfToken = getCsrfToken();
  const providers = getProviders();

  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid size={12}>
          <Stack direction="row" sx={{ alignItems: 'baseline', justifyContent: 'space-between', mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h3">Login</Typography>
            <Link variant="body1" component={NextLink} href={session ? '/pages/register' : '/register'} color="primary">
              Don&apos;t have an account?
            </Link>
          </Stack>
        </Grid>
        <Grid size={12}>
          <AuthLogin providers={providers} csrfToken={csrfToken} />
        </Grid>
      </Grid>
    </AuthWrapper>
=======
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
>>>>>>> aa9dff1 (feature/SALOONY-016-UserLogin)
  );
}
