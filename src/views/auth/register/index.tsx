'use client';
import Image from 'next/image';
// next
import { getProviders, getCsrfToken } from 'next-auth/react';

// material-ui
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// project imports
import AuthRegister from 'sections/auth/auth-forms/AuthRegister';
import { registerGridStyle, registerIllustrationBoxStyle, registerTitleStyle, registerWrapperStyle } from './styles';

// ================================|| REGISTER ||================================ //

export default function Register() {
  const csrfToken = getCsrfToken();
  const providers = getProviders();

  return (
    <Box sx={registerWrapperStyle}>
      <Grid container spacing={3} sx={registerGridStyle}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h1" sx={registerTitleStyle}>
            Create an Account
          </Typography>

          <AuthRegister providers={providers} csrfToken={csrfToken} />
        </Grid>
        <Grid size={{ xs: 0, md: 6 }}>
          <Box sx={registerIllustrationBoxStyle}>
            <Image
              src="/assets/images/auth/Barber-rafiki 1.png"
              alt="register illustration"
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
