import * as Yup from 'yup';
import { isValidPhoneNumber } from 'libphonenumber-js';
import { VALIDATION_MESSAGES } from '@src/constants/validationMessages';
import { RegisterFormValues } from '@src/types/auth';

export const DOB_FORMAT_REGEX = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;

export const AUTH_REGISTER_VALIDATION_SCHEMA = Yup.object().shape({
  firstname: Yup.string().max(255, VALIDATION_MESSAGES.FIRSTNAME_MAX).required(VALIDATION_MESSAGES.FIRSTNAME_REQUIRED),
  lastname: Yup.string().max(255, VALIDATION_MESSAGES.LASTNAME_MAX).required(VALIDATION_MESSAGES.LASTNAME_REQUIRED),
  email: Yup.string().email(VALIDATION_MESSAGES.EMAIL_INVALID).max(255, VALIDATION_MESSAGES.EMAIL_MAX).required(VALIDATION_MESSAGES.EMAIL_REQUIRED),

  phonenumber: Yup.string()
    .required(VALIDATION_MESSAGES.PHONE_REQUIRED)
    .test('valid-phone', VALIDATION_MESSAGES.PHONE_INVALID, (value) => {
      if (!value) return false;
      return isValidPhoneNumber(value.trim());
    }),

  password: Yup.string()
    .required(VALIDATION_MESSAGES.PASSWORD_REQUIRED)
    .test('no-leading-trailing-whitespace', VALIDATION_MESSAGES.PASSWORD_WHITESPACE, (value) => (value ? value === value.trim() : true))
    .min(10, VALIDATION_MESSAGES.PASSWORD_MIN)
    .max(128, VALIDATION_MESSAGES.PASSWORD_MAX),

  dateofbirth: Yup.string()
    .transform((value) => (value ? value.trim() : value))
    .required(VALIDATION_MESSAGES.DOB_REQUIRED)
    .test('dob-format', VALIDATION_MESSAGES.DOB_FORMAT, (value) => {
      if (!value) return false;
      return DOB_FORMAT_REGEX.test(value);
    })
    .test('dob-range', VALIDATION_MESSAGES.DOB_INVALID, (value) => {
      if (!value) return false;

      const [month, day, year] = value.split('/').map(Number);
      const parsedDate = new Date(year, month - 1, day);

      // Check valid calendar date
      if (parsedDate.getFullYear() !== year || parsedDate.getMonth() !== month - 1 || parsedDate.getDate() !== day) {
        return false;
      }

      const today = new Date();
      const maxAgeDate = new Date(today.getFullYear() - 120, today.getMonth(), today.getDate());
      const minAgeDate = new Date(today.getFullYear() - 13, today.getMonth(), today.getDate());

      // Must be in the past
      if (parsedDate >= today) return false;

      // Must not exceed max age (120 years)
      if (parsedDate < maxAgeDate) return false;

      // Must be older than 13 years
      if (parsedDate > minAgeDate) return false;

      return true;
    })
});

export const AUTH_REGISTER_INITIAL_VALUES: RegisterFormValues = {
  firstname: '',
  lastname: '',
  email: '',
  phonenumber: '',
  password: '',
  dateofbirth: '',
  role: 'Client',
  language: 'French',
  submit: null
};
