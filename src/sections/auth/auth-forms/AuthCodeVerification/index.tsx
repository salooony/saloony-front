'use client';

// material-ui
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import FormHelperText from '@mui/material/FormHelperText';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// third-party
import { Formik } from 'formik';
import OtpInput from 'react-otp-input';

// project imports
import AnimateButton from 'components/@extended/AnimateButton';
import {
  otpContainerStyle,
  otpContainerErrorStyle,
  otpInputContainerStyle,
  otpInputStyle,
  gridCenterStyle,
  resendTextStyle,
  resendLinkStyle,
  verifyButtonContainerStyle,
  backLinkStyle
} from './style';
import { AUTH_OTP_VALIDATION_SCHEMA } from '@src/schemas/otp';
import { AUTH_TEXT } from '@src/constants/auth';

// ============================|| STATIC - CODE VERIFICATION ||============================ //

export default function AuthCodeVerification() {
  return (
    <Formik
      initialValues={{ otp: '' }}
      validationSchema={AUTH_OTP_VALIDATION_SCHEMA}
      onSubmit={(values, { resetForm }) => {
        resetForm();
        console.log(values);

        // reset focus after submission
        const activeElement = document.activeElement as HTMLElement | null;
        if (activeElement) activeElement.blur();
      }}
    >
      {({ errors, handleSubmit, touched, values, setFieldValue }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid size={12}>
              <Box
                sx={(theme) => ({
                  ...otpContainerStyle(theme),
                  ...(touched.otp && errors.otp && otpContainerErrorStyle(theme))
                })}
              >
                <OtpInput
                  value={values.otp}
                  onChange={(otp) => setFieldValue('otp', otp)}
                  inputType="tel"
                  shouldAutoFocus
                  renderInput={(props, index) => (
                    <input
                      {...props}
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
                  numInputs={4}
                  containerStyle={otpInputContainerStyle}
                  inputStyle={otpInputStyle}
                />
                {touched.otp && errors.otp && (
                  <FormHelperText error id="standard-weight-helper-text-otp">
                    {errors.otp}
                  </FormHelperText>
                )}
              </Box>
            </Grid>
            <Grid size={12} sx={gridCenterStyle}>
              <Typography variant="h5" sx={resendTextStyle}>
                {AUTH_TEXT.OTP_RESEND_PROMPT}{" "}
                <Box component="span" sx={resendLinkStyle}>
                  {AUTH_TEXT.RESEND_BUTTON}
                </Box>
              </Typography>

              <Box sx={verifyButtonContainerStyle}>
                <AnimateButton>
                  <Button disableElevation fullWidth size="large" type="submit" variant="contained">
                    {AUTH_TEXT.VERIFY_BUTTON}
                  </Button>
                </AnimateButton>
              </Box>

              <Typography sx={backLinkStyle}>{AUTH_TEXT.BACK_TO_LOGIN}</Typography>
            </Grid>
          
          </Grid>
        </form>
      )}
    </Formik>
  );
}
