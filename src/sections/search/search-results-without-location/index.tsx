import { Box } from '@mui/material';

interface SearchResultsWithoutLocationProps {
  query?: string;
}

export default function SearchResultsWithoutLocation({ query }: SearchResultsWithoutLocationProps) {
  return (
    <Box sx={{ mt: '60px' }}>
      Search Results for: <strong>{query || 'All'}</strong> without location
    </Box>
  );
}
