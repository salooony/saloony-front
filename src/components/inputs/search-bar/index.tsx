import { Box, Paper } from '@mui/material';
import useSearchBar from './useSearchBar';
import { searchContainerStyle, paperStyle, inputGroupStyle } from './style';
import QueryField from './QueryField';
import LocationField from './LocationField';
import SearchButton from './SearchButton';
import SearchOverlayModal from './SearchOverlayModal';
import { useIsMdScreen } from '@src/constants/breakpoints';
import ProfessionalButton from '@src/components/professionalButton';
import { searchBarProps } from '@src/types/searchBar';
import { MainLayoutType } from '@src/config';

export default function SearchBar({ variant, initialQuery = '', initialLocation = null }: searchBarProps) {
  const isMdScreen = useIsMdScreen();
  const isHome = variant === MainLayoutType.HOME;

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
  } = useSearchBar({ isMdScreen, initialQuery, initialLocation });

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
      <Paper sx={paperStyle}>{isMdScreen ? smallScreenFields() : largeScreenFields()}</Paper>

      {isMdScreen && (
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
          {isHome && <ProfessionalButton />}
        </Box>
      )}
    </Box>
  );
}
