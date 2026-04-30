'use client';

import React, { FocusEvent } from 'react';

// next
import NextLink from 'next/link';

// material-ui
import Button from '@mui/material/Button';
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
import IconButton from 'components/@extended/IconButton';
import AnimateButton from 'components/@extended/AnimateButton';

import { forgotPasswordStackStyle, inputFieldStyle, inputLabelStyle, submitButtonGridStyle, submitButtonStyle } from '../style';

// assets
import EyeOutlined from '@ant-design/icons/EyeOutlined';
import EyeInvisibleOutlined from '@ant-design/icons/EyeInvisibleOutlined';
import CloseCircleOutlined from '@ant-design/icons/CloseCircleOutlined';
import { AUTH_LOGIN_INITIAL_VALUES, AUTH_LOGIN_VALIDATION_SCHEMA } from '@src/schemas/login';
import { useAuthLogin } from './useAuthLogin';

// ============================|| AWS CONNITO - LOGIN ||============================ //

export default function AuthLogin({ providers, csrfToken }: any) {
  const {
    capsWarning,
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
    onKeyDown,
    handleLoginSubmit,
    session,
    setCapsWarning
  } = useAuthLogin();

  return (
    <>
      <Formik initialValues={AUTH_LOGIN_INITIAL_VALUES} validationSchema={AUTH_LOGIN_VALIDATION_SCHEMA} onSubmit={handleLoginSubmit}>
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values, setFieldValue }) => (
          <form noValidate onSubmit={handleSubmit}>
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <Grid container direction="column" alignItems="center">
              <Grid size={{ xs: 12 }}>
                <Box sx={{ position: 'relative' }}>
                  <InputLabel htmlFor="email-login" sx={{ ...inputLabelStyle, opacity: values.email ? 0 : 1 }}>
                    Email
                  </InputLabel>
                  <OutlinedInput
                    id="email-login"
                    type="email"
                    value={values.email}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    fullWidth
                    error={Boolean(touched.email && errors.email)}
                    sx={inputFieldStyle}
                    endAdornment={
                      <InputAdornment position="end">
                        {values.email !== '' && (
                          <IconButton
                            aria-label="clear email"
                            onClick={() => setFieldValue('email', '')}
                            edge="end"
                            sx={{ color: touched.email && errors.email ? '#FF0000' : '#A88D67' }}
                          >
                            <CloseCircleOutlined style={{ fontSize: '20px' }} />
                          </IconButton>
                        )}
                      </InputAdornment>
                    }
                  />
                </Box>
                {touched.email && errors.email ? (
                  <FormHelperText error id="standard-weight-helper-text-email-login" sx={{ ml: 1, color: '#FF0000', fontWeight: 500 }}>
                    {errors.email}
                  </FormHelperText>
                ) : (
                  <Typography variant="caption" sx={{ ml: 1.5, mt: 0.5, color: '#7E7E7E', display: 'block' }}>
                    Please enter a valid email address
                  </Typography>
                )}
              </Grid>
              <Grid size={{ xs: 12 }} sx={{ mt: 2 }}>
                <Box sx={{ position: 'relative' }}>
                  <InputLabel htmlFor="password-login" sx={{ ...inputLabelStyle, opacity: values.password ? 0 : 1 }}>
                    Password
                  </InputLabel>
                  <OutlinedInput
                    sx={inputFieldStyle}
                    fullWidth
                    color={capsWarning ? 'warning' : 'primary'}
                    error={Boolean(touched.password && errors.password)}
                    id="password-login"
                    type={showPassword ? 'text' : 'password'}
                    value={values.password}
                    name="password"
                    onBlur={(event: FocusEvent<any, Element>) => {
                      setCapsWarning(false);
                      handleBlur(event);
                    }}
                    onKeyDown={onKeyDown}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          color="secondary"
                          sx={{ mr: -1 }} // Shifted further to the right
                        >
                          {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                        </IconButton>
                        {values.password !== '' && (
                          <IconButton
                            aria-label="clear password"
                            onClick={() => setFieldValue('password', '')}
                            edge="end"
                            sx={{ color: touched.password && errors.password ? '#FF0000' : '#A88D67' }}
                          >
                            <CloseCircleOutlined style={{ fontSize: '20px' }} />
                          </IconButton>
                        )}
                      </InputAdornment>
                    }
                  />
                  {capsWarning && (
                    <Typography
                      variant="caption"
                      sx={{ color: 'warning.main', position: 'absolute', bottom: -20, left: 0 }}
                      id="warning-helper-text-password-login"
                    >
                      Caps lock on!
                    </Typography>
                  )}
                </Box>
                {touched.password && errors.password && (
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5, ml: 1 }}>
                    <FormHelperText error id="standard-weight-helper-text-password-login" sx={{ m: 0, color: '#FF0000', fontWeight: 500 }}>
                      {errors.password}.&nbsp;
                    </FormHelperText>
                    <Link
                      component={NextLink}
                      href={session ? '#!' : '/forget-pass'}
                      sx={{ color: '#FF0000', fontWeight: 700, fontSize: '0.75rem', textDecoration: 'none' }}
                    >
                      Forget Password?
                    </Link>
                  </Box>
                )}
                {!errors.password && (
                  <Stack sx={forgotPasswordStackStyle}>
                    <Link
                      variant="h6"
                      component={NextLink}
                      href={session ? '#!' : '/forget-pass'}
                      sx={{ color: '#7E7E7E', textDecoration: 'none', fontWeight: 400 }}
                    >
                      Forget Password?
                    </Link>
                  </Stack>
                )}
              </Grid>

              {errors.submit && (
                <Grid size={{ xs: 12 }} sx={{ mt: 1 }}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )}
              <Grid size={{ xs: 12 }} sx={submitButtonGridStyle}>
                <AnimateButton>
                  <Button
                    disableElevation
                    disabled={isSubmitting}
                    size="large"
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={submitButtonStyle}
                  >
                    Log in
                  </Button>
                </AnimateButton>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
}
