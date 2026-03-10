'use client';

import Image from 'next/image';

// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import AuthCodeVerification from '@src/sections/auth/auth-forms/AuthCodeVerification';

// project imports
import {
  verificationGridStyle,
  verificationIllustrationBoxStyle,
  verificationWrapperStyle,
  verificationStackStyle,
  verificationTitleStyle,
  verificationDescriptionStyle,
  verificationPhoneStyle,
  verificationTimerStyle
} from './styles';
import { AUTH_TEXT } from '@src/constants/auth';
import { useCodeVerification } from './useCodeVerification';

// ================================|| CODE VERIFICATION ||================================ //

export default function CodeVerification() {
  const { verificationTarget, countdownLabel } = useCodeVerification();

  return (
    <Box sx={verificationWrapperStyle}>
      <Grid container spacing={3} sx={verificationGridStyle} alignItems="center">
        <Grid size={{ xs: 12, md: 5 }}>
          <Stack sx={verificationStackStyle}>
            <Typography variant="h1" sx={verificationTitleStyle}>
              {AUTH_TEXT.OTP_VERIFICATION_TITLE}
            </Typography>

            <Typography variant="h4" sx={verificationDescriptionStyle}>
              {AUTH_TEXT.OTP_VERIFICATION_DESCRIPTION}{' '}
              <Box component="span" sx={verificationPhoneStyle}>
                {verificationTarget ?? 'the number we sent the code to'}
              </Box>
            </Typography>
            {countdownLabel !== null && (
              <Typography variant="h4" sx={verificationTimerStyle}>
                {countdownLabel}
              </Typography>
            )}
          </Stack>
          <AuthCodeVerification />
        </Grid>
        <Grid size={{ xs: 0, md: 7 }}>
          <Box sx={verificationIllustrationBoxStyle}>
            <Image
              src="/assets/images/auth/authentication-amico1.png"
              alt="verification illustration"
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
