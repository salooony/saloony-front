import { Box, Divider, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useSearchBar from './useSearchBar';
import { searchContainerStyle, paperStyle, inputGroupStyle, dividerStyle } from './style';
import QueryField from './QueryField';
import LocationField from './LocationField';
import SearchButton from './SearchButton';
import SearchOverlayModal from './SearchOverlayModal';
import { useIsMdScreen } from '@src/constants/breakpoints';
import ProfessionalButton from '@src/components/professionalButton';
import { searchBarProps } from '@src/types/searchBar';
import DateField from './DateField';
import { useEffect, useState, useRef } from 'react';
import { MainLayoutType } from '@src/config';

export default function SearchBar({
  variant,
  initialQuery = '',
  initialLocation = null,
  onFocusChange,
  enableExpand = true
}: searchBarProps) {
  const isMdScreen = useIsMdScreen();
  const isHome = variant === MainLayoutType.HOME;
  const isSearch = variant === MainLayoutType.SEARCH;
  const [isExpanded, setIsExpanded] = useState(false);
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const searchBarRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

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
    closeOverlay
  } = useSearchBar({ isMdScreen, initialQuery, initialLocation });

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
          searchBarRef={searchBarRef}
          datePickerOpen={datePickerOpen}
        />
        {(isSearch || (isHome && isExpanded)) && <Divider orientation="vertical" flexItem sx={dividerStyle(isExpanded)} />}

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
          searchBarRef={searchBarRef}
          datePickerOpen={datePickerOpen}
        />
        {(isSearch || (isHome && isExpanded)) && <Divider orientation="vertical" flexItem sx={dividerStyle(isExpanded)} />}
        {(isSearch || (isHome && isExpanded)) && (
          <DateField
            focusedInput={focusedInput}
            setFocusedInput={setFocusedInput}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            variant={variant}
            isExpanded={isExpanded}
            searchBarRef={searchBarRef}
            onOpenChange={setDatePickerOpen}
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
      <SearchButton onClick={handleSearch} disabled={Boolean(isSearchDisabled)} size={28} variant={variant} />
    </>
  );

  return (
    <Box ref={searchBarRef} sx={searchContainerStyle}>
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
