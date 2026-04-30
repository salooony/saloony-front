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
import { PROFILE_TEXTS, PERSONAL_INFO_FIELDS } from './profile-constants';

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
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
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
          {PROFILE_TEXTS.CONTACT_DETAILS_TITLE}
        </Typography>

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ errors, handleBlur, handleChange, handleSubmit, handleReset, isSubmitting, touched, values }: FormikProps<PersonalInfoValues>) => (
            <form noValidate onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                {PERSONAL_INFO_FIELDS.map((field) => (
                  <ProfileFormField
                    key={field.name}
                    label={field.label}
                    name={field.name}
                    value={values[field.name]}
                    error={errors[field.name]}
                    touched={touched[field.name]}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    disabled={field.disabled}
                    sx={field.sx || inputFieldStyle}
                  />
                ))}
                <Grid size={{ xs: 12 }} sx={contactActionBoxStyle}>
                  <Button variant="outlined" color="inherit" sx={cancelButtonStyle} onClick={() => handleReset()}>
                    {PROFILE_TEXTS.CANCEL_BUTTON}
                  </Button>
                  <Button type="submit" variant="contained" disabled={isSubmitting} sx={saveButtonStyle}>
                    {PROFILE_TEXTS.SAVE_BUTTON}
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
          {PROFILE_TEXTS.CREDIT_CARDS_TITLE}
        </Typography>
        <Box sx={creditCardContentBoxStyle}>
          <Typography variant="body2" color="text.disabled" sx={creditCardFooterStyle}>
            {PROFILE_TEXTS.ADD_CARD_HINT}
          </Typography>
        </Box>
      </Card>

      {/* Password */}
      <Card sx={cardStyle}>
        <Typography variant="h5" sx={sectionTitleStyle}>
          {PROFILE_TEXTS.PASSWORD_TITLE}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={passwordInstructionStyle}>
          {PROFILE_TEXTS.PASSWORD_INSTRUCTION}
        </Typography>
        <Grid container spacing={2}>
          <ProfileFormField
            label={`${PROFILE_TEXTS.PASSWORD_TITLE}*`}
            name="currentPassword"
            value=""
            placeholder={PROFILE_TEXTS.PASSWORD_PLACEHOLDER}
            type="password"
            sx={passwordInputStyle}
          />
        </Grid>
        <Button variant="contained" disabled sx={{ ...confirmButtonStyle, mt: 3 }}>
          {PROFILE_TEXTS.CONFIRM_BUTTON}
        </Button>
      </Card>

      <Button variant="outlined" sx={logoutButtonStyle} onClick={() => signOut()}>
        {PROFILE_TEXTS.LOGOUT_BUTTON}
      </Button>
    </Box>
  );
};
