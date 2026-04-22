import * as Yup from 'yup';
import { isValidPhoneNumber } from 'libphonenumber-js';
import { VALIDATION_MESSAGES } from '@src/constants/validationMessages';
import { RegisterFormValues } from '@src/types/auth';

/** Regex for strict MM/DD/YYYY date format validation. */
export const DOB_FORMAT_REGEX = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;

//Constants for domain business logic constraints.
const AGE_CONSTRAINTS = {
  MIN_AGE: 13,
  MAX_AGE: 120
} as const;

//Authentication registration validation schema.
const schema = Yup.object().shape({
  firstname: Yup.string().max(255, VALIDATION_MESSAGES.FIRSTNAME_MAX).required(VALIDATION_MESSAGES.FIRSTNAME_REQUIRED),
  lastname: Yup.string().max(255, VALIDATION_MESSAGES.LASTNAME_MAX).required(VALIDATION_MESSAGES.LASTNAME_REQUIRED),
  email: Yup.string()
    .email(VALIDATION_MESSAGES.EMAIL_INVALID)
    .max(255, VALIDATION_MESSAGES.EMAIL_MAX)
    .required(VALIDATION_MESSAGES.EMAIL_REQUIRED),

  phonenumber: Yup.string()
    .required(VALIDATION_MESSAGES.PHONE_REQUIRED)
    .test('valid-phone', VALIDATION_MESSAGES.PHONE_INVALID, function (value) {
      return value ? isValidPhoneNumber(value.trim()) : false;
    }),
  password: Yup.string()
    .required(VALIDATION_MESSAGES.PASSWORD_REQUIRED)
    .test('no-whitespace', VALIDATION_MESSAGES.PASSWORD_WHITESPACE, function (value) {
      return value ? value === value.trim() : true;
    })
    .min(10, VALIDATION_MESSAGES.PASSWORD_MIN)
    .max(128, VALIDATION_MESSAGES.PASSWORD_MAX),
  dateofbirth: Yup.string()
    .transform((value) => (value ? value.trim() : value))
    .required(VALIDATION_MESSAGES.DOB_REQUIRED)
    .test('dob-format', VALIDATION_MESSAGES.DOB_FORMAT, function (value) {
      return value ? DOB_FORMAT_REGEX.test(value) : false;
    })
    .test('dob-range', VALIDATION_MESSAGES.DOB_INVALID, function (value) {
      if (!value) return false;
      const [month, day, year] = value.split('/').map(Number);
      const parsedDate = new Date(year, month - 1, day);

      if (parsedDate.getFullYear() !== year || parsedDate.getMonth() !== month - 1 || parsedDate.getDate() !== day) {
        return false;
      }

      const today = new Date();
      const maxAgeDate = new Date(today.getFullYear() - AGE_CONSTRAINTS.MAX_AGE, today.getMonth(), today.getDate());
      const minAgeDate = new Date(today.getFullYear() - AGE_CONSTRAINTS.MIN_AGE, today.getMonth(), today.getDate());

      return parsedDate < today && parsedDate >= maxAgeDate && parsedDate <= minAgeDate;
    }),
  role: Yup.string().required(),
  language: Yup.string().required(),
  submit: Yup.string().nullable()
});

/** Typed schema for internal use in form validation components. */
export const AUTH_REGISTER_VALIDATION_SCHEMA = schema as Yup.ObjectSchema<RegisterFormValues>;

/** Default initial values for the authentication registration form. */
export const AUTH_REGISTER_INITIAL_VALUES: RegisterFormValues = {
  firstname: '',
  lastname: '',
  email: '',
  phonenumber: '',
  password: '',
  dateofbirth: '',
  role: 'client',
  language: 'french',
  submit: null
};
