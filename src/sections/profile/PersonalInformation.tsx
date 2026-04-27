'use client';

import React from 'react';
// material-ui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
// third-party
import { Formik, FormikProps } from 'formik';
import { signOut } from 'next-auth/react';
import { SxProps, Theme } from '@mui/material/styles';

// project imports
import { PersonalInfoValues, usePersonalInformation } from '@sections/profile/usePersonalInformation';
import {
  cardStyle,
  sectionTitleStyle,
  labelStyle,
  logoutButtonStyle,
  inputFieldStyle,
  readOnlyInputFieldStyle,
  contactActionBoxStyle,
  saveButtonStyle,
  cancelButtonStyle,
  passwordInputStyle,
  confirmButtonStyle,
  creditCardCardStyle,
  creditCardFooterStyle,
  passwordInstructionStyle,
  personalInfoWrapperStyle,
  creditCardContentBoxStyle
} from '@sections/profile/personal-info-style';

/**
 * Reusable form field component to maintain DRY principles.
 */
interface ProfileFormFieldProps {
  label: string;
  name: keyof PersonalInfoValues;
  value: string | null;
  error?: string;
  touched?: boolean;
  disabled?: boolean;
  sx?: SxProps<Theme>;
  onBlur?: (e: React.FocusEvent<any>) => void;
  onChange?: (e: React.ChangeEvent<any>) => void;
  placeholder?: string;
  type?: string;
}

const ProfileFormField = ({
  label,
  name,
  value,
  error,
  touched,
  disabled,
  sx,
  onBlur,
  onChange,
  placeholder,
  type = 'text'
}: ProfileFormFieldProps) => (
  <Grid size={{ xs: 12, sm: 6 }}>
    <Box>
      <Typography sx={labelStyle}>{label}</Typography>
      <OutlinedInput
        fullWidth
        name={name}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        disabled={disabled}
        error={Boolean(touched && error)}
        sx={sx}
        placeholder={placeholder}
        type={type}
      />
      {touched && error && (
        <Typography variant="caption" color="error">
          {error}
        </Typography>
      )}
    </Box>
  </Grid>
);

/**
 * Personal Information section for Profile Management.
 * Consolidates contact details, credit cards, and password management.
 */
export const PersonalInformation = () => {
  const { initialValues, validationSchema, handleSubmit } = usePersonalInformation();

  return (
    <Box sx={personalInfoWrapperStyle}>
      {/* My Contact Details */}
      <Card sx={cardStyle}>
        <Typography variant="h5" sx={sectionTitleStyle}>
          My contact details
        </Typography>

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }: FormikProps<PersonalInfoValues>) => (
            <form noValidate onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                {[
                  { label: 'First Name*', name: 'firstname', value: values.firstname, touched: touched.firstname, error: errors.firstname },
                  { label: 'Last Name*', name: 'lastname', value: values.lastname, touched: touched.lastname, error: errors.lastname },
                  { label: 'Email address*', name: 'email', value: values.email, disabled: true, sx: readOnlyInputFieldStyle },
                  {
                    label: 'Phone Number*',
                    name: 'phonenumber',
                    value: values.phonenumber,
                    touched: touched.phonenumber,
                    error: errors.phonenumber
                  }
                ].map((field) => (
                  <ProfileFormField
                    key={field.name}
                    label={field.label}
                    name={field.name as any}
                    value={field.value}
                    error={field.error as string}
                    touched={field.touched}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    disabled={field.disabled}
                    sx={field.sx || inputFieldStyle}
                  />
                ))}
                <Grid size={{ xs: 12 }} sx={contactActionBoxStyle}>
                  <Button variant="outlined" color="inherit" sx={cancelButtonStyle}>
                    Cancel
                  </Button>
                  <Button type="submit" variant="contained" disabled={isSubmitting} sx={saveButtonStyle}>
                    Save
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </Card>

      {/* Credit Cards */}
      <Card sx={creditCardCardStyle}>
        <Typography variant="h5" sx={sectionTitleStyle}>
          Credit cards
        </Typography>
        <Box sx={creditCardContentBoxStyle}>
          <Typography variant="body2" color="text.disabled" sx={creditCardFooterStyle}>
            want to add another card? Book an appointment or place an order and select &quot;Add a card&quot; before confirming
          </Typography>
        </Box>
      </Card>

      {/* Password */}
      <Card sx={cardStyle}>
        <Typography variant="h5" sx={sectionTitleStyle}>
          Password
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={passwordInstructionStyle}>
          To change your password, please enter your current password to confirm your identity.
        </Typography>
        <Grid container spacing={2}>
          <ProfileFormField
            label="Password*"
            name="submit"
            value=""
            placeholder="Enter your current password"
            type="password"
            sx={passwordInputStyle}
          />
        </Grid>
        <Button variant="contained" disabled sx={{ ...confirmButtonStyle, mt: 3 }}>
          Confirm
        </Button>
      </Card>

      <Button variant="outlined" sx={logoutButtonStyle} onClick={() => signOut()}>
        Log out
      </Button>
    </Box>
  );
};
