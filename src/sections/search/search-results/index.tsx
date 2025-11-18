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

export default function SearchResults({ query: initialQuery, location: initialLocation, date: initialDate }: SearchResultsProps) {
  const isMdScreen = useIsMdScreen();

  const { selectedDate, openFields, setOpenFields, locationItem, filteredSalons, isOpenAtTime, getOpeningHoursForDay } = useSearchResults(
    initialQuery,
    initialLocation,
    initialDate
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
    <Box sx={{ pt: 7 }}>
      {isMdScreen && (
        <Box onClick={!openFields ? () => setOpenFields(true) : undefined} sx={mobileHeaderBox}>
          {!openFields ? (
            <Box sx={mobileCollapsedBox}>
              <Box display="flex" alignItems={'center'} gap={2}>
                <IconButton>
                  <FiSearch size={22} />
                </IconButton>

                <Box>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Typography variant="h5">{initialQuery}</Typography>
                    <Typography variant="h3" color="text.secondary">•</Typography>
                    <Typography variant="h5">{initialLocation}</Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {initialDate || 'At all time'}
                  </Typography>
                </Box>
              </Box>

              <IconButton>
                <FiEdit3 size={20} />
              </IconButton>
            </Box>
          ) : (

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, px: 2 }}>
              <IconButton onClick={() => setOpenFields(false)}>
                <FiX size={20} />
              </IconButton>

              <Box
                sx={mobileFieldBox}
                onClick={() => {
                  setActiveField(FocusedInputType.QUERY);
                  openOverlay();
                }}
              >
                <IconButton>
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
                <IconButton>
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
                <IconButton>
                  <FiClock size={22} />
                </IconButton>
                <Typography variant="h6">{initialDate || 'At all time'}</Typography>
              </Box>
            </Box>
          )}
        </Box>
      )}

      <Box sx={{ p: 8 }}>
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

          <Typography sx={{ mt: 1 }}>Found {filteredSalons.length} salons</Typography>
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
                  component: 'span',
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
