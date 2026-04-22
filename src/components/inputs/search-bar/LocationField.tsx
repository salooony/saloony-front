'use client';

import { Box, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { searchBoxStyle, MdSuggestionBoxStyle, suggestionBoxStyle, suggestionItemStyle, noWrapStyle } from './style';
import CircularLoader from 'components/CircularLoader';
import { LocationFieldProps } from '@src/types/locationField';
import { useIsMdScreen } from '@src/constants/breakpoints';
import { JSX, useMemo, useRef } from 'react';
import useClickOutside from './useClickOutside';
import { FocusedInputType, MainLayoutType } from '@src/config';

export default function LocationField(props: LocationFieldProps): JSX.Element {
  const isMdScreen = useIsMdScreen();
  const containerRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  const SuggestionStyle = isMdScreen ? MdSuggestionBoxStyle : suggestionBoxStyle;

  const {
    location,
    setLocation,
    focusedInput,
    setFocusedInput,
    suggestions,
    isLoading,
    highlightedIndex,
    handleKeyDown,
    disableFocusStyle,
    variant,
    isExpanded,
    searchBarRef
  } = props;
  const suggestionListId = 'location-suggestion-list';
  const isHome = variant === MainLayoutType.HOME;
  const isSearch = variant === MainLayoutType.SEARCH;

  const clickOutsideRefs = useMemo(() => [containerRef, searchBarRef!], [containerRef, searchBarRef]);

  useClickOutside(clickOutsideRefs, () => {
    setFocusedInput(null);
  });

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setTimeout(() => {
      const activeElement = document.activeElement;
      let isMovingToOtherField =
        activeElement?.id === 'service-input' ||
        activeElement?.id === 'date-input' ||
        searchBarRef?.current?.contains(activeElement) ||
        Boolean(props?.datePickerOpen);

      let el = activeElement as HTMLElement | null;
      while (el && !isMovingToOtherField) {
        const cn = el.className;
        if (typeof cn === 'string' && /Mui.*(Pickers|Calendar|Day|Popper)/.test(cn)) {
          isMovingToOtherField = true;
          break;
        }
        if (el.getAttribute && (el.getAttribute('role') === 'dialog' || el.hasAttribute('data-mui'))) {
          isMovingToOtherField = true;
          break;
        }
        el = el.parentElement;
      }

      if (!isMovingToOtherField) {
        setFocusedInput(null);
      }
    }, 10);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setLocation({ id: 0, name: e.target.value });
  };

  const open = focusedInput === FocusedInputType.LOCATION && (isLoading || suggestions.length > 0);

  return (
    <Box
      ref={containerRef}
      sx={searchBoxStyle(
        theme,
        !disableFocusStyle && focusedInput === FocusedInputType.LOCATION ? FocusedInputType.LOCATION : null,
        FocusedInputType.LOCATION,
        variant,
        isExpanded
      )}
      onClick={() => setFocusedInput(FocusedInputType.LOCATION)}
    >
      {!isMdScreen && !isSearch && (
        <Typography
          variant="caption"
          component="label"
          htmlFor="location-input"
          color={isHome ? theme.palette.grey[500] : theme.palette.grey[400]}
          sx={{ ...noWrapStyle, fontWeight: 400, mb: 0.2 }}
        >
          Or
        </Typography>
      )}

      <TextField
        id="location-input"
        fullWidth
        variant="standard"
        value={location?.name || ''}
        onFocus={() => setFocusedInput(FocusedInputType.LOCATION)}
        onBlur={handleBlur}
        onChange={handleChange}
        autoComplete="off"
        inputRef={(input) => {
          if (input && focusedInput === FocusedInputType.LOCATION) {
            input.focus();
          }
        }}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
        placeholder="Address, city..."
        aria-autocomplete="list"
        aria-expanded={open}
        aria-controls={suggestionListId}
        aria-label="Search for location"
        InputProps={{
          disableUnderline: true,
          sx: {
            fontSize: isHome ? '1rem' : '0.875rem',
            fontWeight: isHome ? 600 : 400,
            '& .MuiInputBase-input': {
              ...noWrapStyle,
              color: isHome ? 'common.black' : 'text.primary',
              p: 0
            },
            '& .MuiInputBase-input::placeholder': {
              color: isHome ? 'common.black' : 'text.secondary',
              opacity: 1
            }
          }
        }}
      />

      {open && (
        <Box id={suggestionListId} role="listbox" sx={SuggestionStyle}>
          {isLoading ? (
            <CircularLoader />
          ) : (
            suggestions.map((item, i) => (
              <Box
                key={item.id}
                role="option"
                aria-selected={i === highlightedIndex}
                sx={suggestionItemStyle(theme, i === highlightedIndex)}
                onMouseDown={() => setLocation(item)}
              >
                <Typography>{item.name}</Typography>
              </Box>
            ))
          )}
        </Box>
      )}
    </Box>
  );
}
