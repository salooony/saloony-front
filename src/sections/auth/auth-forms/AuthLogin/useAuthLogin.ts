import { APP_DEFAULT_PATH } from '@src/config';
import { API_ROUTES } from '@src/constants/apiRoutes';
import { LoginFormValues } from '@src/types/auth';
import { fetcher } from '@src/utils/axios';
import { FormikHelpers } from 'formik';
import { signIn, useSession } from 'next-auth/react';
import { SyntheticEvent, useState } from 'react';
import { preload } from 'swr';

export const useAuthLogin = () => {
  const { data: session } = useSession();
  const [capsWarning, setCapsWarning] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setCapsWarning(event.getModifierState('CapsLock'));
  };

  const handleLoginSubmit = async (values: LoginFormValues, { setErrors, setSubmitting }: FormikHelpers<LoginFormValues>) => {
    try {
      const trimmedEmail = values.email.trim();

      const res = await signIn('login', {
        redirect: false,
        email: trimmedEmail,
        password: values.password,
        callbackUrl: APP_DEFAULT_PATH
      });

      if (res?.error) {
        setErrors({ submit: res.error });
      } else {
        preload(API_ROUTES.DASHBOARD_MENU, fetcher);
      }
    } catch {
      setErrors({ submit: 'An error occurred while logging in' });
    } finally {
      setSubmitting(false);
    }
  };
  return {
    capsWarning,
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
    onKeyDown,
    handleLoginSubmit,
    session,
    setCapsWarning
  };
};
