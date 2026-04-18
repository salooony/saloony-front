import { Box, Card, Typography } from '@mui/material';

/**
 * Generic placeholder component for profile sections that haven't been implemented yet.
 */
export const ProfilePlaceholder = ({ title }: { title: string }) => {
  return (
    <Card
      sx={{
        p: 3,
        minHeight: 400,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px dashed',
        borderColor: 'divider',
        bgcolor: 'background.paper'
      }}
    >
      <Box textAlign="center">
        <Typography variant="h5" color="text.secondary" gutterBottom>
          [{title} Placeholder]
        </Typography>
        <Typography variant="body2" color="text.disabled">
          Actual functionality and layout for this section has not been implemented yet.
        </Typography>
      </Box>
    </Card>
  );
};
