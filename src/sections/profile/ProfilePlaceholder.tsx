import { Box, Card, Typography } from '@mui/material';
import { placeholderCardStyle } from './style';
import { PROFILE_TEXTS } from './profile-constants';

/**
 * Generic placeholder component for profile sections that haven't been implemented yet.
 */
export const ProfilePlaceholder = ({ title }: { title: string }) => {
  return (
    <Card sx={placeholderCardStyle}>
      <Box textAlign="center">
        <Typography variant="h5" color="text.secondary" gutterBottom>
          [{title} {PROFILE_TEXTS.PLACEHOLDER_TITLE}]
        </Typography>
        <Typography variant="body2" color="text.disabled">
          {PROFILE_TEXTS.PLACEHOLDER_DESCRIPTION}
        </Typography>
      </Box>
    </Card>
  );
};
