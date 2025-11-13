import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

interface JustifiedTextWithLineProps {
  children: React.ReactNode;
  lineWidth?: string | number;
}

const JustifiedTextWithLine: FC<JustifiedTextWithLineProps> = ({ children, lineWidth }) => {
  return (
    <Box sx={{ position: 'relative' }}>
      <Typography variant="body1" align="justify" sx={{ fontSize: 40, fontWeight: 900 }}>
        {children}
      </Typography>
      <Box
        sx={{
          width: lineWidth,
          height: 3,
          bgcolor: '#8D5FAC',
          position: 'absolute',
          bottom: 3
        }}
      />
    </Box>
  );
};

export default JustifiedTextWithLine;
