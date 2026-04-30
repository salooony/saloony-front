import * as Yup from 'yup';
import { FormikHelpers } from 'formik';
import { isValidPhoneNumber } from 'libphonenumber-js';
import { useSession } from 'next-auth/react';
// project imports
import { VALIDATION_MESSAGES } from '@src/constants/validationMessages';
// import axiosServices from '@src/utils/axios';

/** Shape of the Personal Information form values. */
export interface PersonalInfoValues {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  currentPassword: string;
}

/**
 * Hook for managing Personal Information form state, validation, and submission.
 */
export const usePersonalInformation = () => {
  const { data: session } = useSession();

  const initialValues: PersonalInfoValues = {
    firstname: session?.user?.firstname ?? '',
    lastname: session?.user?.lastname ?? '',
    email: session?.user?.email ?? '',
    phonenumber: session?.user?.mobileNumber ?? '',
    currentPassword: ''
  };

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().max(255, VALIDATION_MESSAGES.FIRSTNAME_MAX).required(VALIDATION_MESSAGES.FIRSTNAME_REQUIRED),
    lastname: Yup.string().max(255, VALIDATION_MESSAGES.LASTNAME_MAX).required(VALIDATION_MESSAGES.LASTNAME_REQUIRED),
    phonenumber: Yup.string()
      .required(VALIDATION_MESSAGES.PHONE_REQUIRED)
      .test('valid-phone', VALIDATION_MESSAGES.PHONE_INVALID, (value) => {
        return value ? isValidPhoneNumber(value.trim()) : false;
      })
  });

  const handleSubmit = async (values: PersonalInfoValues, { setSubmitting }: FormikHelpers<PersonalInfoValues>) => {
    try {
      // TODO: Replace with actual API call to update user profile
    } finally {
      setSubmitting(false);
    }
  };

  return {
    initialValues,
    validationSchema,
    handleSubmit
  };
};
