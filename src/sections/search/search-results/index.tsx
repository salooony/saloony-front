import { Box } from '@mui/material';

interface SearchResultsProps {
  query?: string;
  location?: string;
}

export default function SearchResults({ query, location }: SearchResultsProps) {
  return (
    <Box sx={{ mt: '60px' }}>
      Search Results for: <strong>{query || 'All'}</strong> in <strong>{location || 'All Locations'}</strong>
    </Box>
  );
}
