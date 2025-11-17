import { Box, Paper } from '@mui/material';
import useSearchBar from './useSearchBar';
import { searchContainerStyle, paperStyle, inputGroupStyle } from './style';
import QueryField from './QueryField';
import LocationField from './LocationField';
import SearchButton from './SearchButton';
import SearchOverlayModal from './SearchOverlayModal';
import { useIsSmallScreen } from '@src/constants/breakpoints';
import ProfessionalButton from '@src/components/professionalButton';

export default function SearchBar() {
  const isSmallScreen = useIsSmallScreen();

  const {
    query,
    setQuery,
    location,
    setLocation,
    focusedInput,
    setFocusedInput,
    suggestions,
    isLoading,
    isSearchDisabled,
    handleSearch,
    highlightedIndex,
    handleKeyDown,
    isOverlayOpen,
    openOverlay,
    closeOverlay
  } = useSearchBar(isSmallScreen);

  const largeScreenFields = () => (
    <>
      <Box sx={inputGroupStyle}>
        <QueryField
          query={query}
          setQuery={setQuery}
          focusedInput={focusedInput}
          setFocusedInput={setFocusedInput}
          suggestions={suggestions}
          isLoading={isLoading}
          highlightedIndex={highlightedIndex}
          handleKeyDown={handleKeyDown}
          readOnly={false}
        />
        <LocationField
          location={location}
          setLocation={setLocation}
          focusedInput={focusedInput}
          setFocusedInput={setFocusedInput}
          suggestions={suggestions}
          isLoading={isLoading}
          highlightedIndex={highlightedIndex}
          handleKeyDown={handleKeyDown}
        />
      </Box>
      <SearchButton onClick={handleSearch} disabled={Boolean(isSearchDisabled)} size={28} />
    </>
  );

  const smallScreenFields = () => (
    <>
      <Box sx={inputGroupStyle}>
        <QueryField query={query} readOnly={true} onOuterMouseDown={openOverlay} />
      </Box>
      <SearchButton onClick={handleSearch} disabled={Boolean(isSearchDisabled)} size={28} />
    </>
  );

  return (
    <Box sx={searchContainerStyle}>
      <Paper sx={paperStyle}>{isSmallScreen ? smallScreenFields() : largeScreenFields()}</Paper>

      {isSmallScreen && (
        <Box>
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
          />
          <ProfessionalButton />
        </Box>
      )}
    </Box>
  );
}
