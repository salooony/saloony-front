import { Box, Typography, Grid, Button } from '@mui/material';
import SearchBar from '@src/components/inputs/search-bar';
import { useIsMdScreen, useIsSmScreen } from '@src/constants/breakpoints';
import { SearchResultsProps } from '@src/types/searchResults';
import { buttonStyle, searchBoxStyle } from './style';
import useSearchResults from './useSearchResultsWithoutLocation';
import { ADDRESSES } from '@src/components/inputs/search-bar/constants';
import { useTheme } from '@mui/material/styles';
import AnimatedCard from '@src/components/@extended/AnimatedCard';

export default function SearchResultsWithoutLocation({ query }: SearchResultsProps) {
  const isMdScreen = useIsMdScreen();
  const isSmScreen = useIsSmScreen();
  const theme = useTheme();

  const { displayedResults, loadMore, hasMore } = useSearchResults(query, undefined, 12);

  return (
    <>
      <Box sx={searchBoxStyle}>
        <Typography variant={isSmScreen ? 'h5' : isMdScreen ? 'h4' : 'h3'} component="label" textAlign="center" px={3}>
          Book an appointment with a {query} online
        </Typography>
        <SearchBar variant="search" initialQuery={query} />
      </Box>

      <Box display="flex" flexDirection="column" px={5}>
        <Typography variant={isSmScreen ? 'h5' : isMdScreen ? 'h4' : 'h3'} my={2} component="label">
          {query}
        </Typography>

        <Grid container spacing={2} pb={2}>
          {displayedResults.map((salon) => {
            const locationName = ADDRESSES.find((l) => l.id === salon.locationId)?.name || 'Unknown';
            return (
              <Grid key={salon.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <AnimatedCard image={salon.image} alt={salon.name}>
                  <Typography variant="body2" color="text.secondary">
                    Discover our
                  </Typography>
                  <Typography variant="h6">
                    {salon.name} in {locationName}
                  </Typography>
                </AnimatedCard>
              </Grid>
            );
          })}
        </Grid>

        {hasMore && (
          <Box display="flex" justifyContent="center">
            <Button sx={buttonStyle(theme)} onClick={loadMore}>
              See more cities
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
}
