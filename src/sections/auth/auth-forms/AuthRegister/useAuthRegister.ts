import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { RegisterFormValues } from '@src/types/auth';
import { FormikHelpers } from 'formik';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { SyntheticEvent, useState } from 'react';
import { APP_DEFAULT_PATH } from 'config';

export const useAuthRegister = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const downSM = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const [isLoading, setIsLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  const handleOnSubmit = async (values: RegisterFormValues, { setErrors, setSubmitting }: FormikHelpers<RegisterFormValues>) => {
    try {
      setIsLoading(true);

      const registerResult = await signIn('register', {
        redirect: false,
        firstname: values?.firstname?.trim(),
        lastname: values?.lastname?.trim(),
        email: values?.email?.trim(),
        mobileNumber: values?.phonenumber?.trim(),
        birthdate: values?.dateofbirth,
        password: values?.password,
        role: 'client',
        language: 'french'
      });

      if (registerResult?.error) {
        setErrors({ submit: registerResult.error });
        return;
      }

      if (registerResult?.ok) {
        router.push(APP_DEFAULT_PATH);
      }
    } catch (error: any) {
      setErrors({ submit: error?.message || 'Registration failed' });
    } finally {
      setIsLoading(false);
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
    handleOnSubmit
  };
};
