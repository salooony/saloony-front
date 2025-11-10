import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { circularProgressStyle } from './inputs/search-bar/style';

export default function CircularLoader() {
  return (
    <Box sx={circularProgressStyle}>
      <CircularProgress />
    </Box>
  )
}
