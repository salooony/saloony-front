// material-ui
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
// project imports
import AuthWrapper from 'sections/auth/AuthWrapper';
import AuthCodeVerification from 'sections/auth/auth-forms/AuthCodeVerification';

// ================================|| CODE VERIFICATION ||================================ //

export default function CodeVerification() {
  return (
    <AuthWrapper>
      <Box
        sx={{
          display: 'flex',
          paddingInline: '20px',
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            flex: 1,
            maxWidth: '700px'
          }}
        >
          <Grid
            sx={{
              textAlign: 'center'
            }}
            size={12}
          >
            <Typography variant="h1" fontWeight="bold">
              OTP Verification
            </Typography>

            <Typography
              sx={{
                marginTop: '50px'
              }}
              variant="h3"
            >
              Enter the OTP From SMS that we’ve sent to{' '}
              <Typography sx={{ fontWeight: 600, fontSize: '19px', color: 'saddlebrown' }}>+970597624323</Typography>
            </Typography>

            <Typography variant="h4" sx={{ marginTop: '40px', fontWeight: 600, color: 'saddlebrown' }}>
              2:06
            </Typography>
          </Grid>

          <Grid size={12}>
            <AuthCodeVerification />
          </Grid>
        </Box>
        <Box
          sx={{
            position: 'relative',
            flex: 1,
            width: '100%',
            height: 700,
            display: { xs: 'none', lg: 'block' }
          }}
        >
          <Image src="/assets/images/verify.png" alt="alt" fill style={{ objectFit: 'contain' }} />
        </Box>
      </Box>
    </AuthWrapper>
  );
}
