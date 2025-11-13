'use client';

import { Box, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { searchBoxStyle, SmallSuggestionBoxStyle, suggestionBoxStyle, suggestionItemStyle } from './style';
import CircularLoader from 'components/CircularLoader';
import { LocationFieldProps } from '@src/types/locationField';
import { useIsSmallScreen } from '@src/constants/breakpoints';
import { JSX } from 'react';

export default function LocationField(props: LocationFieldProps): JSX.Element {
  const theme = useTheme();
  const isSmallScreen = useIsSmallScreen();
  const SuggestionStyle = isSmallScreen ? SmallSuggestionBoxStyle(theme) : suggestionBoxStyle(theme);

  const {
    location,
    setLocation,
    focusedInput,
    setFocusedInput,
    suggestions,
    isLoading,
    highlightedIndex,
    handleKeyDown,
    disableFocusStyle
  } = props;

  const suggestionListId = 'location-suggestion-list';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setLocation({ id: 0, name: e.target.value });
  };

  const open = focusedInput === 'location' && (isLoading || suggestions.length > 0);

  return (
    <Box sx={searchBoxStyle(theme, !disableFocusStyle && focusedInput === 'location' ? 'location' : null, 'location')}>
      {!isSmallScreen && (
        <Typography variant="h5" component="label" htmlFor="location-input">
          Or
        </Typography>
      )}

      <TextField
        id="location-input"
        fullWidth
        variant="standard"
        value={location?.name || ''}
        onFocus={() => setFocusedInput('location')}
        onBlur={() => setFocusedInput(null)}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Address, city..."
        aria-autocomplete="list"
        aria-expanded={open}
        aria-controls={suggestionListId}
        aria-label="Search for location"
        InputProps={{ disableUnderline: true }}
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
