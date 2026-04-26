import * as Yup from 'yup';

// project-imports
import { VALIDATION_MESSAGES } from '@src/constants/validationMessages';
import { LoginFormValues } from '@src/types/auth';

/** Authentication login validation schema following strict enterprise constraints. */
export const AUTH_LOGIN_VALIDATION_SCHEMA: Yup.ObjectSchema<LoginFormValues> = Yup.object().shape({
  email: Yup.string()
    .email(VALIDATION_MESSAGES.EMAIL_INVALID)
    .max(255, VALIDATION_MESSAGES.EMAIL_MAX) // Aligned with global RFC standards
    .required(VALIDATION_MESSAGES.EMAIL_REQUIRED),
  password: Yup.string()
    .max(255, VALIDATION_MESSAGES.PASSWORD_MAX) // DoS protection limit
    .required(VALIDATION_MESSAGES.PASSWORD_REQUIRED),
  submit: Yup.string().nullable()
}) as Yup.ObjectSchema<LoginFormValues>;

export const AUTH_LOGIN_INITIAL_VALUES: LoginFormValues = {
  email: '',
  password: '',
  submit: null
};
