import { LoginFormValues } from '@src/types/auth';
import * as Yup from 'yup';
// Auth Text Constants
export const AUTH_TEXT = {
  // OTP Verification
  OTP_VERIFICATION_TITLE: 'OTP Verification',
  OTP_VERIFICATION_DESCRIPTION: "Enter the OTP From SMS that we've sent to",
  OTP_RESEND_PROMPT: "Didn't receive the OTP?",
  // Login
  LOGIN_TITLE: 'Sign In',
  LOGIN_WELCOME: 'Welcome Back',
  // Register
  REGISTER_TITLE: 'Sign Up',
  REGISTER_WELCOME: 'Create Your Account',
  // Password Reset
  FORGOT_PASSWORD_TITLE: 'Forgot Password',
  RESET_PASSWORD_TITLE: 'Reset Password',
  // Common
  SUBMIT_BUTTON: 'Submit',
  CANCEL_BUTTON: 'Cancel',
  BACK_BUTTON: 'Back',
  BACK_TO_LOGIN: 'Back to Login Page',
  VERIFY_BUTTON: 'Verify',
  RESEND_BUTTON: 'RESEND'
} as const;

export const AUTH_LOGIN_VALIDATION_SCHEMA = Yup.object().shape({
  email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .test('no-leading-trailing-whitespace', 'Password cannot start or end with spaces', (value) => (value ? value === value.trim() : true))
    .max(10, 'Password must be less than 10 characters')
});

export const AUTH_LOGIN_INITIAL_VALUES: LoginFormValues = {
  email: '',
  password: '',
  submit: null
};
