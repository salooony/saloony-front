'use client';

import { Box, Typography, List, ListItem, ListItemText, Paper, IconButton } from '@mui/material';
import { FiClock, FiEdit3, FiMapPin, FiSearch, FiX } from 'react-icons/fi';
import { useIsMdScreen } from '@src/constants/breakpoints';
import SearchOverlayModal from '@src/components/inputs/search-bar/SearchOverlayModal';
import useSearchBar from '@src/components/inputs/search-bar/useSearchBar';
import useSearchResults from './useSearchResult';
import { mobileCollapsedBox, mobileHeaderBox, mobileFieldBox } from './style';
import { FocusedInputType } from '@src/config';
import { SearchResultsProps } from '@src/types/searchResults';
import { useTheme } from '@mui/material/styles';

export default function SearchResults({ query: initialQuery, location: initialLocation }: SearchResultsProps) {
  const isMdScreen = useIsMdScreen();
  const theme = useTheme();

  const { selectedDate, openFields, setOpenFields, locationItem, filteredSalons, isOpenAtTime, getOpeningHoursForDay } = useSearchResults(
    initialQuery,
    initialLocation
  );

  const {
    setQuery,
    query,
    setLocation,
    location,
    focusedInput,
    setFocusedInput,
    suggestions,
    isLoading,
    isSearchDisabled,
    handleSearch,
    highlightedIndex,
    handleKeyDown,
    isOverlayOpen,
    closeOverlay,
    openOverlay,
    activeField,
    setActiveField
  } = useSearchBar({ isMdScreen });

  return (
    <Box pt={7}>
      {isMdScreen && (
        <Box onClick={!openFields ? () => setOpenFields(true) : undefined} sx={mobileHeaderBox}>
          {!openFields ? (
            <Box sx={mobileCollapsedBox}>
              <Box display="flex" alignItems={'center'} gap={2}>
                <IconButton sx={{ color: theme.palette.primary.dark }}>
                  <FiSearch size={18}/>
                </IconButton>

                <Box>
                  <Box display="flex" gap={0.5} alignItems={'center'}>
                    <Typography variant="h6">{initialQuery}</Typography>
                    <Typography variant="h3" color={'primary.dark'}>
                      •
                    </Typography>
                    <Typography variant="h6">{initialLocation}</Typography>
                  </Box>
                  <Typography variant="body2" color={theme.palette.grey[400]}>
                    {selectedDate?.format('YYYY-MM-DD') || 'At any time'}
                  </Typography>
                </Box>
              </Box>

              <IconButton sx={{ color: theme.palette.primary.dark }}>
                <FiEdit3 size={18}/>
              </IconButton>
            </Box>
          ) : (
            <Box display="flex" flexDirection="column" gap={0.5}>
              <IconButton onClick={() => setOpenFields(false)} sx={{ color: theme.palette.primary.dark }}>
                <FiX size={20} />
              </IconButton>
              <Box display="flex" flexDirection="column" gap={2}>
                <Box
                  sx={mobileFieldBox}
                  onClick={() => {
                    setActiveField(FocusedInputType.QUERY);
                    openOverlay();
                  }}
                >
                  <IconButton sx={{ color: theme.palette.primary.dark }}>
                    <FiSearch size={22} />
                  </IconButton>
                  <Typography variant="h6">{initialQuery}</Typography>
                </Box>

                <Box
                  sx={mobileFieldBox}
                  onClick={() => {
                    setActiveField(FocusedInputType.LOCATION);
                    openOverlay();
                  }}
                >
                  <IconButton sx={{ color: theme.palette.primary.dark }}>
                    <FiMapPin size={22} />
                  </IconButton>
                  <Typography variant="h6">{initialLocation}</Typography>
                </Box>

                <Box
                  sx={mobileFieldBox}
                  onClick={() => {
                    setActiveField(FocusedInputType.DATE);
                    openOverlay();
                  }}
                >
                  <IconButton sx={{ color: theme.palette.primary.dark }}>
                    <FiClock size={22} />
                  </IconButton>
                  <Typography variant="h6">{selectedDate?.format('YYYY-MM-DD') || 'AT any time'}</Typography>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      )}

      <Box p={8}>
        <Paper sx={{ p: 2, mb: 2 }}>
          <Typography variant="h6">Search Results</Typography>

          <Typography>
            <strong>Service:</strong> {initialQuery}
          </Typography>

          <Typography>
            <strong>Location:</strong> {initialLocation}
          </Typography>

          <Typography>
            <strong>Day & Time:</strong> {selectedDate?.format('YYYY-MM-DD HH:mm') || 'Any time'}
          </Typography>

          <Typography>Found {filteredSalons.length} salons</Typography>
        </Paper>

        <List>
          {filteredSalons.map((salon) => (
            <ListItem key={salon.id} sx={{ border: '1px solid #ddd', mb: 1 }}>
              <ListItemText
                primary={<Typography variant="h6">{salon.name}</Typography>}
                secondary={
                  <Box>
                    <Typography variant="body2">{salon.serviceName}</Typography>
                    <Typography variant="body2">{locationItem?.name}</Typography>
                    <Typography variant="body2" color={isOpenAtTime(salon, selectedDate) ? 'green' : 'red'}>
                      {selectedDate ? getOpeningHoursForDay(salon, selectedDate) : 'Opening hours available'}
                    </Typography>
                  </Box>
                }
                secondaryTypographyProps={{
                  component: 'span'
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>

      <SearchOverlayModal
        open={isOverlayOpen}
        onClose={closeOverlay}
        query={query}
        setQuery={setQuery}
        location={location}
        setLocation={setLocation}
        focusedInput={focusedInput}
        setFocusedInput={setFocusedInput}
        suggestions={suggestions}
        isLoading={isLoading}
        highlightedIndex={highlightedIndex}
        handleKeyDown={handleKeyDown}
        handleSearch={handleSearch}
        isSearchDisabled={Boolean(isSearchDisabled)}
        activeField={activeField}
        setActiveField={setActiveField}
      />
    </Box>
  );
}
