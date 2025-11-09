import * as Yup from 'yup';
import { isValidPhoneNumber } from 'libphonenumber-js';

export const DOB_FORMAT_REGEX = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;

export const AUTH_REGISTER_VALIDATION_SCHEMA = Yup.object().shape({
  firstname: Yup.string().max(255).required('First Name is required'),
  lastname: Yup.string().max(255).required('Last Name is required'),
  email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),

  phonenumber: Yup.string()
    .required('Phone number is required')
    .test('valid-phone', 'Invalid phone number format', (value) => {
      if (!value) return false;
      return isValidPhoneNumber(value.trim());
    }),

  password: Yup.string()
    .required('Password is required')
    .test('no-leading-trailing-whitespace', 'Password cannot start or end with spaces', (value) =>
      value ? value === value.trim() : true
    )
    .min(10, 'Password must be at least 10 characters')
    .max(128, 'Password must not exceed 128 characters'),

  dateofbirth: Yup.string()
    .transform((value) => (value ? value.trim() : value))
    .required('Date of birth is required')
    .test('dob-format', 'Date of birth must be in MM/DD/YYYY format', (value) => {
      if (!value) return false;
      return DOB_FORMAT_REGEX.test(value);
    })
    .test('dob-range', 'Invalid date of birth', (value) => {
      if (!value) return false;

      const [month, day, year] = value.split('/').map(Number);
      const parsedDate = new Date(year, month - 1, day);

      // Check valid calendar date
      if (
        parsedDate.getFullYear() !== year ||
        parsedDate.getMonth() !== month - 1 ||
        parsedDate.getDate() !== day
      ) {
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
