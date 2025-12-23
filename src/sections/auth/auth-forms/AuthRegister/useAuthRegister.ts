import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useRegisterUserMutation } from '@src/store/api/userApi';
import { RegisterFormValues } from '@src/types/auth';
import { FormikHelpers } from 'formik';
import { useSession } from 'next-auth/react';
import { SyntheticEvent, useState } from 'react';

export const useAuthRegister = () => {
    
  const { data: session } = useSession();
  const downSM = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  const handleOnSubmit = async (values: RegisterFormValues, { setErrors, setSubmitting }: FormikHelpers<any>) => {
    try {
      const trimmedEmail = values.email.trim();
      const trimmedFirstname = values.firstname.trim();
      const trimmedLastname = values.lastname.trim();
      const trimmedPhone = values.phonenumber.trim();

      // Convert MM/DD/YYYY to Date object
      const [month, day, year] = values.dateofbirth.split('/').map(Number);
      const birthdate = new Date(year, month - 1, day);

      const payload = {
        firstname: trimmedFirstname,
        lastname: trimmedLastname,
        email: trimmedEmail,
        mobileNumber: trimmedPhone,
        birthdate: birthdate.toISOString(),
        password: values.password,
        role: 'user',
        language: 'en'
      };

      const result = await registerUser(payload).unwrap();

      console.log('Registration successful:', result);
    } catch (error: any) {
      setErrors({ submit: error?.data?.message || error?.message || 'Registration failed' });
    } finally {
      setSubmitting(false);
    }
  };

  return {
    session,
    downSM,
    isLoading,
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
    handleOnSubmit,
  };
};
