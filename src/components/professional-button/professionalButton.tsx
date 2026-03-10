import { Box, Button, Link } from '@mui/material';
import React from 'react';
import AnimateButton from '../@extended/AnimateButton';
import { ProfessionalButtonStyle } from './style';

export default function ProfessionalButton({ scrolled = false, isMdScreen = false }: { scrolled?: boolean; isMdScreen?: boolean }) {
  return (
    <Box sx={{ width: '100%' }}>
      <AnimateButton>
        <Button
          component={Link}
          href="https://mui.com/store/items/mantis-react-admin-dashboard-template/"
          target="_blank"
          disableElevation
          variant="contained"
          sx={ProfessionalButtonStyle(scrolled, isMdScreen)}
        >
          I am a beauty professional
        </Button>
      </AnimateButton>
    </Box>
  );
}
