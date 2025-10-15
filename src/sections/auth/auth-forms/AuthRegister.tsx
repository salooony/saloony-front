'use client';

import { useEffect, useState, SyntheticEvent, ReactNode } from 'react';

// next
import Image from 'next/image';
import { signIn } from 'next-auth/react';

// material-ui
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import FormHelperText from '@mui/material/FormHelperText';

import Link from '@mui/material/Link';
import InputAdornment, { InputAdornmentProps } from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// third-party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import FirebaseSocial from './FirebaseSocial';
import IconButton from 'components/@extended/IconButton';
import AnimateButton from 'components/@extended/AnimateButton';

import { APP_DEFAULT_PATH } from 'config';
import { strengthColor, strengthIndicator } from 'utils/password-strength';



import { TextField } from '@mui/material';
// types
import { StringColorProps } from 'types/password';

const Auth0 = '/assets/images/icons/auth0.svg';
const Cognito = '/assets/images/icons/aws-cognito.svg';
const Google = '/assets/images/icons/google.svg';

// ============================|| AWS CONNITO - LOGIN ||============================ //

export default function AuthRegister({ providers, csrfToken }: any) {
  const downSM = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  const [level, setLevel] = useState<StringColorProps>();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  const changePassword = (value: string) => {
    const temp = strengthIndicator(value);
    setLevel(strengthColor(temp));
  };

  useEffect(() => {
    changePassword('');
  }, []);

  const inputs: Field[] = [
    {
      name: 'firstname',
      title: 'First Name',
      type: 'text',
      required: true
    },
    {
      name: 'lastname',
      title: 'Last Name',
      type: 'text',
      required: true
    },
    {
      name: 'email',
      title: 'Email',
      type: 'email',
      required: true
    },
    {
      name: 'phone',
      title: 'Phone number',
      type: 'text',
      required: true,
      slotProps: {
        input: {
          endAdornment: <InputAdornment position="end">{/* <ErrorOutlineIcon className="text-red-500" /> */}</InputAdornment>
        }
      }
    },
    {
      name: 'password',
      title: 'Password',
      type: showPassword ? 'text' : 'password',
      required: true,
      slotProps: {
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword(!showPassword)}>{showPassword ? '' : ''}</IconButton>
            </InputAdornment>
          )
        }
      }
    },

    {
      name: 'date',
      title: 'Date of Birth',
      type: 'date',
      required: true,
      InputLabelProps: { shrink: true }
    }
  ];

  type FormValues = {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    date: string;
    password: string;
  };
  type Field<k extends keyof FormValues = keyof FormValues> = {
    name: k;
    title: string;
    type: string;
    required: boolean;
    slotProps?: {
      input?: {
        endAdornment?: ReactNode | InputAdornmentProps;
      };
    };
    InputLabelProps?: InputLabelProps;
  };
  // type FieldKeys = keyof typeof Field;
  return (
    <>
      <Formik
        initialValues={{
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          date: '',
          password: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          firstname: Yup.string().max(255).required('First Name is required'),
          lastname: Yup.string().max(255).required('Last Name is required'),
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          password: Yup.string()
            .required('Password is required')
            .test('no-leading-trailing-whitespace', 'Password cannot start or end with spaces', (value) => value === value.trim())
            .max(10, 'Password must be less than 10 characters'),
          phone: Yup.string()
            .matches(/^(970|972)\d{10}$/, 'Phone must start with 970 or 972 and be 10 digits total')
            .required('Phone number is required'),
          date: Yup.date().required('Date is required')
        })}
        onSubmit={async (values, { setErrors, setSubmitting }) => {
          const trimmedEmail = values.email.trim();
          signIn('register', {
            redirect: false,
            firstname: values.firstname,
            lastname: values.lastname,
            email: trimmedEmail,
            password: values.password,
            date: values.date,
            phone: values.phone,
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

            <Box
              sx={{
                maxWidth: '1700px',
                mx: 'auto',
                paddingInline: '20px'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px'
                }}
              >
                <Box
                  sx={{
                    flex: '1'
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 3
                    }}
                  >
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: '45px',
                        fontWeight: 700,
                        color: '#000000',
                        lineHeight: '100%',
                        letterSpacing: '0'
                      }}
                    >
                      Create an Account
                    </Typography>
                    <Box
                      sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: 'repeat(1, minmax(0, 1fr))', sm: 'repeat(2, minmax(0, 1fr))' },
                        gap: '20px'
                      }}
                    >
                      {inputs.map((fields, i) => (
                        <Box key={i}>
                          <Typography variant="body1" sx={{ mb: 1, fontWeight: 500, color: 'black' }}>
                            {fields.title}
                          </Typography>
                          <TextField
                            fullWidth
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values[fields.name]}
                            error={Boolean(touched[fields.name] && errors[fields.name])}
                            name={fields.name}
                            type={fields.type}
                            required={fields.required}
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                borderRadius: 4,
                                backgroundColor: '#fafafa'
                              }
                            }}
                          />
                          {touched[fields.name] && errors[fields.name] && (
                            <FormHelperText error id={`helper-text-${values[fields.name]}-signup`}>
                              {errors[fields.name]}
                            </FormHelperText>
                          )}
                        </Box>
                      ))}
                    </Box>

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{
                        width: '228px',
                        height: '47px',
                        borderRadius: '10px',
                        padding: '10px 4px 10px 5px',
                        backgroundColor: '#AC8D5F',
                        color: 'white',
                        alignSelf: 'center'
                      }}
                    >
                      Get OTP
                    </Button>

                    <Typography align="center" sx={{ mb: 2, color: 'text.secondary', opacity: 0.5 }}>
                      Already have an account?{' '}
                      <Link href="/login" className="text-[#AC8D5F]">
                        login
                      </Link>
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    flex: '1',
                    display: { xs: 'none', lg: 'block' }
                  }}
                >
                  <Image src="/assets/images/signup.png" alt="alt" width={700} height={700} />
                </Box>
              </Box>
            </Box>

            {errors.submit && <FormHelperText error>{errors.submit}</FormHelperText>}
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
