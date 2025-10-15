'use client';

// material-ui
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import FormHelperText from '@mui/material/FormHelperText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// third-party
import * as Yup from 'yup';
import { Formik } from 'formik';
import OtpInput from 'react-otp-input';

// project imports
import Link from 'next/link';

// ============================|| STATIC - CODE VERIFICATION ||============================ //

export default function AuthCodeVerification() {
  return (
    <Formik
      initialValues={{ otp: '' }}
      validationSchema={Yup.object({
        otp: Yup.string().length(5, 'OTP must be exactly 5 digits').required('OTP is required')
      })}
      onSubmit={(values, { resetForm }) => {
        resetForm();

        // reset focus after submission
        const activeElement = document.activeElement as HTMLElement | null;
        if (activeElement) activeElement.blur();
      }}
    >
      {({ errors, handleSubmit, touched, values, setFieldValue }) => (
        <form onSubmit={handleSubmit}>
          <Grid
            sx={{
              justifyContent: 'center'
            }}
            container
            spacing={5}
          >
            <Grid size={12}>
              <Box
                sx={(theme) => ({
                  '& input': {
                    border: '1px solid',
                    borderColor: 'divider',
                    ...(touched.otp && errors.otp && { borderColor: 'error.main' }),
                    '&:focus-visible': {
                      outline: 'none !important',
                      borderColor: 'primary.main',
                      boxShadow: theme.customShadows.primary,
                      ...(touched.otp && errors.otp && { borderColor: 'error.main', boxShadow: theme.customShadows.error })
                    }
                  }
                })}
              >
                <Box
                  sx={{
                    mx: 'auto',
                    maxWidth: '350px',
                    marginTop: '20px'
                  }}
                >
                  <OtpInput
                    value={values.otp}
                    onChange={(otp) => setFieldValue('otp', otp)}
                    inputType="tel"
                    shouldAutoFocus
                    renderInput={(props, index) => (
                      <input
                        {...props}
                        style={{ width: '50px', height: '50px', borderRadius: '20px', textAlign: 'center' }}
                        onKeyDown={(e) => {
                          if (e.key === 'Tab') {
                            e.preventDefault();
                          } else if (e.key === 'Backspace' && !props.value) {
                            const previousInput = document.getElementById(`otp-input-${index - 1}`);
                            if (previousInput) {
                              previousInput.focus();
                            }
                          } else if (e.key !== 'Backspace') {
                            const nextInput = document.getElementById(`otp-input-${index + 1}`);
                            if (nextInput && props.value) {
                              setTimeout(() => {
                                nextInput.focus();
                              }, 0);
                            }
                          }
                          props.onKeyDown?.(e);
                        }}
                      />
                    )}
                    numInputs={5}
                    containerStyle={{ justifyContent: 'center', gap: '10px' }}
                  />
                </Box>
                {touched.otp && errors.otp && (
                  <FormHelperText
                    sx={{
                      textAlign: 'center',
                      fontSize: '19px',
                      marginTop: '12px'
                    }}
                    error
                    id="standard-weight-helper-text-otp"
                  >
                    {errors.otp}
                  </FormHelperText>
                )}

                <Typography variant="h5" sx={{ mt: '15px', textAlign: 'center', fontWeight: 600, color: 'saddlebrown' }}>
                  Didn’t receive the OTP? RESEND
                </Typography>
              </Box>
            </Grid>
            <Box>
              <Stack sx={{ justifyContent: 'center' }} direction="row">
                <Button
                  sx={{
                    px: '30px'
                  }}
                  disableElevation
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Verify
                </Button>
              </Stack>
              <Link
                style={{
                  color: 'saddlebrown',
                  display: 'block',
                  textDecoration: 'none',
                  marginTop: '20px',
                  fontSize: '16px'
                }}
                href="/login"
              >
                Back to login Page
              </Link>
            </Box>
          </Grid>
        </form>
      )}
    </Formik>
  );
}
