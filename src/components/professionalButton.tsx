import { Box, Button, Link } from '@mui/material';
import React from 'react';
import AnimateButton from './@extended/AnimateButton';
import { headerButtonStyle } from '@src/layout/main-layout/header/style';
import { ProfessionalButtonProps } from '@src/types/professionalButton';

export default function ProfessionalButton({ mainColor, textColor }: ProfessionalButtonProps) {

  return (
    <Box sx={{ width: '100%' }}>
      <AnimateButton>
        <Button
          component={Link}
          href="https://mui.com/store/items/mantis-react-admin-dashboard-template/"
          target="_blank"
          disableElevation
          variant="contained"
          sx={headerButtonStyle(mainColor, textColor)}
        >
          I am a beauty professional
        </Button>
      </AnimateButton>
    </Box>
  );
}
