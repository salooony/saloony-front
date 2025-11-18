import { Box } from '@mui/material';
import { SearchResultsProps } from '@src/types/searchResults';

export default function SearchResults({ query, location }: SearchResultsProps) {
  return (
    <Box sx={{ mt: '60px' }}>
      Search Results for: <strong>{query || 'All'}</strong> in <strong>{location || 'All Locations'}</strong>
    </Box>
  );
}
