'use client';
// next
import Image from 'next/legacy/image';
import { signIn, useSession } from 'next-auth/react';

// material-ui
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
import { Formik } from 'formik';

// project imports
import FirebaseSocial from '../FirebaseSocial';
import IconButton from 'components/@extended/IconButton';
import AnimateButton from 'components/@extended/AnimateButton';

import { APP_DEFAULT_PATH } from 'config';
import { AUTH_REGISTER_INITIAL_VALUES, AUTH_REGISTER_VALIDATION_SCHEMA } from 'constants/auth';
import { LOGIN_LINK, SESSION_LOGIN_LINK } from 'constants/links';

// assets
import EyeOutlined from '@ant-design/icons/EyeOutlined';
import EyeInvisibleOutlined from '@ant-design/icons/EyeInvisibleOutlined';

// types
import { btn, Gridbtn, InputLabelStyles, LinklStyles, OutlinedInputStyles } from './styles';
import { useAuthRegister } from './useAuthRegister';

const Auth0 = '/assets/images/icons/auth0.svg';
const Cognito = '/assets/images/icons/aws-cognito.svg';
const Google = '/assets/images/icons/google.svg';

// ============================|| AWS CONNITO - LOGIN ||============================ //

export default function AuthRegister({ providers, csrfToken }: any) {
  const {
    session,
    downSM,
    isLoading,
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
    handleOnSubmit,
  } = useAuthRegister();

  return (
    <>
      <Formik initialValues={AUTH_REGISTER_INITIAL_VALUES} 
      validationSchema={AUTH_REGISTER_VALIDATION_SCHEMA} 
      onSubmit={handleOnSubmit}>
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
                    id="firstname-signup"
                    type="text"
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
                    type="text"
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
                    id="email-signup"
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
                  <InputLabel htmlFor="phonenumber-signup" sx={InputLabelStyles}>
                    Phone number
                  </InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.phonenumber && errors.phonenumber)}
                    id="phonenumber-signup"
                    type="tel"
                    value={values.phonenumber}
                    name="phonenumber"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    sx={OutlinedInputStyles}
                  />
                </Stack>
                {touched.phonenumber && errors.phonenumber && (
                  <FormHelperText error id="helper-text-phonenumber-signup">
                    {errors.phonenumber}
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
                  <InputLabel htmlFor="dateofbirth-signup" sx={InputLabelStyles}>
                    Date of birth
                  </InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.dateofbirth && errors.dateofbirth)}
                    id="dateofbirth-signup"
                    type="text"
                    value={values.dateofbirth}
                    name="dateofbirth"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="MM/DD/YYYY"
                    sx={OutlinedInputStyles}
                  />
                </Stack>
                {touched.dateofbirth && errors.dateofbirth && (
                  <FormHelperText error id="helper-text-dateofbirth-signup">
                    {errors.dateofbirth}
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
                  <Button
                    disableElevation
                    disabled={isSubmitting || isLoading}
                    sx={btn}
                    size="large"
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Get OTP
                  </Button>
                </AnimateButton>
                <Typography>
                  Already have an account?
                  <Link href={session ? SESSION_LOGIN_LINK : LOGIN_LINK} sx={LinklStyles}>
                    Log in
                  </Link>
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
