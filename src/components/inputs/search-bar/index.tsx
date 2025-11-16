import { Box, Divider, Paper } from '@mui/material';
import useSearchBar from './useSearchBar';
import { searchContainerStyle, paperStyle, inputGroupStyle, dividerStyle } from './style';
import QueryField from './QueryField';
import LocationField from './LocationField';
import SearchButton from './SearchButton';
import SearchOverlayModal from './SearchOverlayModal';
import { useIsMdScreen } from '@src/constants/breakpoints';
import ProfessionalButton from '@src/components/professionalButton';
import { searchBarProps } from '@src/types/searchBar';
import { useTheme } from '@mui/material/styles';
import DateField from './DateField';
import { useEffect, useState } from 'react';

export default function SearchBar({
  variant,
  initialQuery = '',
  initialLocation = null,
  onFocusChange,
  enableExpand = true
}: searchBarProps) {
  const theme = useTheme();
  const isMdScreen = useIsMdScreen();
  const isHome = variant === 'home';
  const isSearch = variant === 'search';
  const [isExpanded, setIsExpanded] = useState(false);

  const {
    query,
    setQuery,
    location,
    setLocation,
    selectedDate,
    setSelectedDate,
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
    closeOverlay,
  } = useSearchBar(isMdScreen, initialQuery, initialLocation);

  useEffect(() => {
    if (!enableExpand) {
      setIsExpanded(false);
      onFocusChange?.(false);
      return;
    }
    if (focusedInput) {
      setIsExpanded(true);
      onFocusChange?.(true);
    } else {
      setIsExpanded(false);
      onFocusChange?.(false);
    }
  }, [focusedInput, enableExpand, onFocusChange]);

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
          variant={variant}
          isExpanded={isExpanded}
        />
        {(isSearch || (isHome && isExpanded)) && <Divider orientation="vertical" flexItem sx={dividerStyle(theme, isExpanded)} />}

        <LocationField
          location={location}
          setLocation={setLocation}
          focusedInput={focusedInput}
          setFocusedInput={setFocusedInput}
          suggestions={suggestions}
          isLoading={isLoading}
          highlightedIndex={highlightedIndex}
          handleKeyDown={handleKeyDown}
          variant={variant}
          isExpanded={isExpanded}
        />
        {(isSearch || (isHome && isExpanded)) && <Divider orientation="vertical" flexItem sx={dividerStyle(theme, isExpanded)} />}
        {(isSearch || (isHome && isExpanded)) && (
          <DateField
            focusedInput={focusedInput}
            setFocusedInput={setFocusedInput}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            variant={variant}
            isExpanded={isExpanded}
          />
        )}
      </Box>
      <SearchButton onClick={handleSearch} disabled={Boolean(isSearchDisabled)} size={28} variant={variant} />
    </>
  );

  const smallScreenFields = () => (
    <>
      <Box sx={inputGroupStyle}>
        <QueryField query={query} readOnly={true} onOuterMouseDown={openOverlay} />
      </Box>
      <SearchButton onClick={handleSearch} disabled={Boolean(isSearchDisabled)} size={28} variant={variant}/>
    </>
  );

  return (
    <Box sx={searchContainerStyle}>
      <Paper sx={paperStyle(theme, variant, isExpanded) as any}>{isMdScreen ? smallScreenFields() : largeScreenFields()}</Paper>

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
            variant={variant}
          />
          {isHome && <ProfessionalButton />}
        </Box>
      )}
    </Box>
  );
}