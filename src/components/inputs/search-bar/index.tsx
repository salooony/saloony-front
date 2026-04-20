import { Box, Divider, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useSearchBar from './useSearchBar';
import { searchContainerStyle, paperStyle, inputGroupStyle, dividerStyle, searchBarMotionVariants } from './style';
import QueryField from './QueryField';
import LocationField from './LocationField';
import SearchButton from './SearchButton';
import SearchOverlayModal from './SearchOverlayModal';
import { useIsMdScreen } from '@src/constants/breakpoints';
import ProfessionalButton from '@src/components/professional-button/professionalButton';
import { searchBarProps } from '@src/types/searchBar';
import { motion } from 'framer-motion';
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
  const searchBarRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const MotionPaper = motion(Paper);

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
    closeOverlay,
    setActiveField,
    activeField
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
          datePickerOpen={false}
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
          datePickerOpen={false}
        />
      </Box>
      <SearchButton onClick={handleSearch} disabled={Boolean(isSearchDisabled)} variant={variant} />
    </>
  );

  const smallScreenFields = () => (
    <>
      <Box sx={inputGroupStyle}>
        <QueryField query={query} readOnly={true} onOuterMouseDown={openOverlay} />
      </Box>
      <SearchButton onClick={handleSearch} disabled={Boolean(isSearchDisabled)} size={24} variant={variant} />
    </>
  );

  return (
    <Box ref={searchBarRef} sx={searchContainerStyle}>
      <MotionPaper
        sx={paperStyle(theme, variant, isExpanded) as any}
        initial={false}
        animate={isExpanded ? 'expanded' : 'collapsed'}
        variants={searchBarMotionVariants as any}
        transition={{ type: 'spring', stiffness: 40, damping: 30, mass: 1 }}
      >
        {isMdScreen ? smallScreenFields() : largeScreenFields()}
      </MotionPaper>

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
            activeField={activeField}
            setActiveField={setActiveField}
          />
          {isHome && <ProfessionalButton />}
        </Box>
      )}
    </Box>
  );
}
