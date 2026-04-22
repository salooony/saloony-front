import * as Yup from 'yup';
import { VALIDATION_MESSAGES } from '@src/constants/validationMessages';

export const AUTH_OTP_VALIDATION_SCHEMA = Yup.object().shape({
  otp: Yup.string().length(4, VALIDATION_MESSAGES.OTP_LENGTH).required(VALIDATION_MESSAGES.OTP_REQUIRED)
});
