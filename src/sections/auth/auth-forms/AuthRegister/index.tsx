'use client';

import { useEffect, useState, SyntheticEvent } from 'react';

// next
import Image from 'next/legacy/image';
import { signIn, useSession } from 'next-auth/react';

// material-ui
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// third-party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import FirebaseSocial from '../FirebaseSocial';
import IconButton from 'components/@extended/IconButton';
import AnimateButton from 'components/@extended/AnimateButton';

import { APP_DEFAULT_PATH } from 'config';

// assets
import EyeOutlined from '@ant-design/icons/EyeOutlined';
import EyeInvisibleOutlined from '@ant-design/icons/EyeInvisibleOutlined';

// types
import { btn, Gridbtn, InputLabelStyles, LinklStyles, OutlinedInputStyles } from './styles';

const Auth0 = '/assets/images/icons/auth0.svg';
const Cognito = '/assets/images/icons/aws-cognito.svg';
const Google = '/assets/images/icons/google.svg';
const DOB_FORMAT_REGEX = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;

// ============================|| AWS CONNITO - LOGIN ||============================ //

export default function AuthRegister({ providers, csrfToken }: any) {
  const { data: session } = useSession();
  const downSM = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  useEffect(() => {}, []);

  return (
    <>
      <Formik
        initialValues={{
          firstname: '',
          lastname: '',
          email: '',
          Phonenumber: '',
          password: '',
          Dateofbirth: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          firstname: Yup.string().max(255).required('First Name is required'),
          lastname: Yup.string().max(255).required('Last Name is required'),
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          Phonenumber: Yup.string()
            .trim()
            .required('Phone number is required')
            .matches(/^[0-9]{9,}$/, 'Phone number must contain at least 9 digits'),
          password: Yup.string()
            .required('Password is required')
            .test('no-leading-trailing-whitespace', 'Password cannot start or end with spaces', (value) =>
              value ? value === value.trim() : true
            )
            .max(10, 'Password must be less than 10 characters'),
          Dateofbirth: Yup.string()
            .transform((value) => (value ? value.trim() : value))
            .required('Date of birth is required')
            .test('dob-format', 'Date of birth must be in MM/DD/YYYY format', (value) => {
              if (!value) {
                return false;
              }

              if (!DOB_FORMAT_REGEX.test(value)) {
                return false;
              }

              const [month, day, year] = value.split('/').map(Number);
              const parsedDate = new Date(year, month - 1, day);

              return (
                parsedDate.getFullYear() === year &&
                parsedDate.getMonth() === month - 1 &&
                parsedDate.getDate() === day
              );
            })
        })}
        onSubmit={async (values, { setErrors, setSubmitting }) => {
          console.log('values : => ', values);

          const trimmedEmail = values.email.trim();
          const trimmedFirstname = values.firstname.trim();
          const trimmedLastname = values.lastname.trim();
          const trimmedPhone = values.Phonenumber.trim();
          await signIn('register', {
            redirect: false,
            firstname: trimmedFirstname,
            lastname: trimmedLastname,
            email: trimmedEmail,
            Phonenumber: trimmedPhone,
            Dateofbirth: values.Dateofbirth,
            password: values.password,
            callbackUrl: APP_DEFAULT_PATH
          }).then((res: any) => {
            if (res?.error) {
              setErrors({ submit: res.error });
              setSubmitting(false);
            }
          });
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit}>
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <Grid container spacing={3}>
              <Grid size={6}>
                <Stack sx={{ gap: 1 }}>
                  <InputLabel htmlFor="firstname-signup" sx={InputLabelStyles}>
                    First name
                  </InputLabel>
                  <OutlinedInput
                    id="firstname-login"
                    type="firstname"
                    value={values.firstname}
                    name="firstname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    sx={OutlinedInputStyles}
                  />
                </Stack>
                {touched.firstname && errors.firstname && (
                  <FormHelperText error id="helper-text-firstname-signup">
                    {errors.firstname}
                  </FormHelperText>
                )}
              </Grid>
              <Grid size={6}>
                <Stack sx={{ gap: 1 }}>
                  <InputLabel htmlFor="lastname-signup" sx={InputLabelStyles}>
                    Last name
                  </InputLabel>
                  <OutlinedInput
                    id="lastname-signup"
                    type="lastname"
                    value={values.lastname}
                    name="lastname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    sx={OutlinedInputStyles}
                  />
                </Stack>
                {touched.lastname && errors.lastname && (
                  <FormHelperText error id="helper-text-lastname-signup">
                    {errors.lastname}
                  </FormHelperText>
                )}
              </Grid>
              <Grid size={6}>
                <Stack sx={{ gap: 1 }}>
                  <InputLabel htmlFor="email-signup" sx={InputLabelStyles}>
                    Email
                  </InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.email && errors.email)}
                    id="email-login"
                    type="email"
                    value={values.email}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    sx={OutlinedInputStyles}
                  />
                </Stack>
                {touched.email && errors.email && (
                  <FormHelperText error id="helper-text-email-signup">
                    {errors.email}
                  </FormHelperText>
                )}
              </Grid>
              <Grid size={6}>
                <Stack sx={{ gap: 1 }}>
                  <InputLabel htmlFor="Phonenumber-signup" sx={InputLabelStyles}>
                    Phone number
                  </InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.Phonenumber && errors.Phonenumber)}
                    id="company-signup"
                    value={values.Phonenumber}
                    name="Phonenumber"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    sx={OutlinedInputStyles}
                  />
                </Stack>
                {touched.Phonenumber && errors.Phonenumber && (
                  <FormHelperText error id="helper-text-Phonenumber-signup">
                    {errors.Phonenumber}
                  </FormHelperText>
                )}
              </Grid>

              <Grid size={6}>
                <Stack sx={{ gap: 1 }}>
                  <InputLabel htmlFor="password-signup" sx={InputLabelStyles}>
                    Password
                  </InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.password && errors.password)}
                    id="password-signup"
                    type={showPassword ? 'text' : 'password'}
                    value={values.password}
                    name="password"
                    onBlur={handleBlur}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          color="secondary"
                        >
                          {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                        </IconButton>
                      </InputAdornment>
                    }
                    sx={OutlinedInputStyles}
                  />
                </Stack>
                {touched.password && errors.password && (
                  <FormHelperText error id="helper-text-password-signup">
                    {errors.password}
                  </FormHelperText>
                )}
              </Grid>
              <Grid size={6}>
                <Stack sx={{ gap: 1 }}>
                  <InputLabel htmlFor="Dateofbirth-signup" sx={InputLabelStyles}>
                    Date of birth
                  </InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.Dateofbirth && errors.Dateofbirth)}
                    id="Dateofbirth-signup"
                    type="lastname"
                    value={values.Dateofbirth}
                    name="Dateofbirth"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="MM/DD/YYYY"
                    sx={OutlinedInputStyles}
                  />
                </Stack>
                {touched.Dateofbirth && errors.Dateofbirth && (
                  <FormHelperText error id="helper-text-Dateofbirth-signup">
                    {errors.Dateofbirth}
                  </FormHelperText>
                )}
              </Grid>

              {errors.submit && (
                <Grid size={12}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )}
              <Grid size={12} sx={Gridbtn}>
                <AnimateButton>
                  <Button disableElevation disabled={isSubmitting} sx={btn} size="large" type="submit" variant="contained" color="primary">
                    Get OTP
                  </Button>
                </AnimateButton>
                <Typography>
                  Already have an account?{' '}
                  <Link href={session ? '/pages/login' : '/login'} sx={LinklStyles}  >Log in</Link>
                </Typography>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
      {providers && (
        <Stack
          direction="row"
          sx={{
            gap: { xs: 1, sm: 2 },
            justifyContent: { xs: 'space-around', sm: 'space-between' },
            mt: 3,
            '& .MuiButton-startIcon': { mr: { xs: 0, sm: 1 }, ml: { xs: 0, sm: -0.5 } }
          }}
        >
          {Object.values(providers).map((provider: any) => {
            if (provider.id === 'login' || provider.id === 'register') {
              return;
            }
            return (
              <Box key={provider.name} sx={{ width: '100%' }}>
                <Divider sx={{ mt: 2 }}>
                  <Typography variant="caption"> Sign up with</Typography>
                </Divider>
                {provider.id === 'google' && (
                  <Button
                    variant="outlined"
                    color="secondary"
                    fullWidth={!downSM}
                    startIcon={<Image src={Google} alt="Twitter" width={16} height={16} />}
                    onClick={() => signIn(provider.id, { callbackUrl: APP_DEFAULT_PATH })}
                  >
                    {!downSM && 'Google'}
                  </Button>
                )}
                {provider.id === 'auth0' && (
                  <Button
                    variant="outlined"
                    color="secondary"
                    fullWidth={!downSM}
                    startIcon={<Image src={Auth0} alt="Twitter" width={16} height={16} />}
                    onClick={() => signIn(provider.id, { callbackUrl: APP_DEFAULT_PATH })}
                  >
                    {!downSM && 'Auth0'}
                  </Button>
                )}
                {provider.id === 'cognito' && (
                  <Button
                    variant="outlined"
                    color="secondary"
                    fullWidth={!downSM}
                    startIcon={<Image src={Cognito} alt="Twitter" width={16} height={16} />}
                    onClick={() => signIn(provider.id, { callbackUrl: APP_DEFAULT_PATH })}
                  >
                    {!downSM && 'Cognito'}
                  </Button>
                )}
              </Box>
            );
          })}
        </Stack>
      )}
      {!providers && (
        <Box sx={{ mt: 3 }}>
          <FirebaseSocial />
        </Box>
      )}
    </>
  );
}
