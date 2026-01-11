'use client';

import { Box, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { JSX, useRef } from 'react';
import CircularLoader from 'components/CircularLoader';
import { noWrapStyle, searchBoxStyle, MdSuggestionBoxStyle, suggestionBoxStyle, suggestionItemStyle } from './style';
import { QueryFieldProps } from '@src/types/QueryField';
import { useIsMdScreen } from '@src/constants/breakpoints';
import useClickOutside from './useClickOutside';
import { FocusedInputType, MainLayoutType } from '@src/config';

export default function QueryField(props: QueryFieldProps): JSX.Element {
  const { query, readOnly = false, onOuterMouseDown, onSelectQuery, variant, isExpanded, searchBarRef } = props;
  const isMdScreen = useIsMdScreen();
  const theme = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const suggestionListId = 'query-suggestion-list';
  const SuggestionStyle = isMdScreen ? MdSuggestionBoxStyle : suggestionBoxStyle;
  const isHome = variant === MainLayoutType.HOME;
  const isSearch = variant === MainLayoutType.SEARCH;

  useClickOutside([containerRef, searchBarRef!], () => {
    if ('setFocusedInput' in props) props.setFocusedInput(null);
  });

  const handleFocus = () => {
    if (!readOnly && 'setFocusedInput' in props) {
      props.setFocusedInput(FocusedInputType.QUERY);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setTimeout(() => {
      const activeElement = document.activeElement;
      let isMovingToOtherField =
        activeElement?.id === 'location-input' ||
        activeElement?.id === 'date-input' ||
        searchBarRef?.current?.contains(activeElement) ||
        Boolean(props.datePickerOpen);

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
      if (!isMovingToOtherField && 'setFocusedInput' in props) {
        props.setFocusedInput(null);
      }
    }, 10);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!readOnly && 'setQuery' in props) {
      props.setQuery(e.target.value);
    }
  };

  const onKeyDown = !readOnly && 'handleKeyDown' in props ? props.handleKeyDown : undefined;

  const open =
    !readOnly &&
    'focusedInput' in props &&
    props.focusedInput === FocusedInputType.QUERY &&
    (props.isLoading || props.suggestions.length > 0);

  return (
    <Box
      ref={containerRef}
      sx={searchBoxStyle(
        theme,
        !readOnly && 'focusedInput' in props && props.focusedInput === FocusedInputType.QUERY && !isMdScreen
          ? FocusedInputType.QUERY
          : null,
        FocusedInputType.QUERY,
        variant,
        isExpanded
      )}
    >
      {!isMdScreen && !isSearch && (
        <Typography
          variant="h5"
          component="label"
          htmlFor="service-input"
          color={isHome ? 'common.black' : theme.palette.grey[400]}
          sx={noWrapStyle}
        >
          What are you looking for?
        </Typography>
      )}

      <TextField
        id="service-input"
        fullWidth
        variant="standard"
        value={query}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseDown={onOuterMouseDown}
        onChange={handleChange}
        onKeyDown={onKeyDown}
        placeholder="Name of the salon, services..."
        aria-autocomplete="list"
        aria-expanded={open}
        aria-controls={suggestionListId}
        aria-label="Search for salon or services"
        InputProps={{
          disableUnderline: true,
          readOnly,
          sx: {
            fontSize: isMdScreen ? 'h5.fontSize' : 'h6.fontSize',
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
          {props.isLoading ? (
            <CircularLoader />
          ) : (
            props.suggestions.map((item, i) => (
              <Box
                key={item.id}
                role="option"
                aria-selected={i === props.highlightedIndex}
                sx={suggestionItemStyle(theme, i === props.highlightedIndex)}
                onMouseDown={() => {
                  props.setQuery(item.name);
                  if (props.setFocusedInput) props.setFocusedInput(null);
                  if (onSelectQuery) onSelectQuery();
                }}
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