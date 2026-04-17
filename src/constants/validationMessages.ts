// Validation Error Messages
export const VALIDATION_MESSAGES = {
  // First Name
  FIRSTNAME_REQUIRED: 'First Name is required',
  FIRSTNAME_MAX: 'First Name must not exceed 255 characters',

  // Last Name
  LASTNAME_REQUIRED: 'Last Name is required',
  LASTNAME_MAX: 'Last Name must not exceed 255 characters',

  // Email
  EMAIL_REQUIRED: 'Email is required',
  EMAIL_INVALID: 'Must be a valid email',
  EMAIL_MAX: 'Email must not exceed 255 characters',

  // Phone Number
  PHONE_REQUIRED: 'Phone number is required',
  PHONE_INVALID: 'Invalid phone number format',

  // Password
  PASSWORD_REQUIRED: 'Password is required',
  PASSWORD_WHITESPACE: 'Password cannot start or end with spaces',
  PASSWORD_MIN: 'Password must be at least 10 characters',
  PASSWORD_MAX: 'Password must not exceed 128 characters',

  // Date of Birth
  DOB_REQUIRED: 'Date of birth is required',
  DOB_FORMAT: 'Date of birth must be in MM/DD/YYYY format',
  DOB_INVALID: 'Invalid date of birth',

  // OTP
  OTP_REQUIRED: 'OTP is required',
  OTP_LENGTH: 'OTP must be exactly 4 digits'
} as const;
