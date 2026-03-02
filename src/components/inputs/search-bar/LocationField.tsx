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
    >
      {!isMdScreen && !isSearch && (
        <Typography
          variant="h5"
          component="label"
          htmlFor="location-input"
          color={isHome ? 'common.black' : theme.palette.grey[400]}
          sx={noWrapStyle}
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
        onKeyDown={handleKeyDown}
        placeholder="Address, city..."
        aria-autocomplete="list"
        aria-expanded={open}
        aria-controls={suggestionListId}
        aria-label="Search for location"
        InputProps={{
          disableUnderline: true,
          sx: {
            '& .MuiInputBase-input': {
              ...noWrapStyle,
            },
            '& .MuiInputBase-input::placeholder': {
              color: isHome ? theme.palette.grey[400] : 'common.black',
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
