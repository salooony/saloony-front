'use client';

import { Box, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { searchBoxStyle, MdSuggestionBoxStyle, suggestionBoxStyle, suggestionItemStyle } from './style';
import CircularLoader from 'components/CircularLoader';
import { LocationFieldProps } from '@src/types/locationField';
import { useIsMdScreen } from '@src/constants/breakpoints';
import { JSX } from 'react';
import { FocusedInputType, MainLayoutType } from '@src/config';

export default function LocationField(props: LocationFieldProps): JSX.Element {
  const theme = useTheme();
  const isMdScreen = useIsMdScreen();
  const SuggestionStyle = isMdScreen ? MdSuggestionBoxStyle(theme) : suggestionBoxStyle(theme);
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
    variant
  } = props;
  const suggestionListId = 'location-suggestion-list';
  const isHome = variant === MainLayoutType.HOME;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setLocation({ id: 0, name: e.target.value });
  };

  const open = focusedInput === FocusedInputType.LOCATION && (isLoading || suggestions.length > 0);

  return (
    <Box
      sx={searchBoxStyle(
        theme,
        !disableFocusStyle && focusedInput === FocusedInputType.LOCATION ? FocusedInputType.LOCATION : null,
        FocusedInputType.LOCATION
      )}
    >
      {!isMdScreen && (
        <Typography
          variant="h5"
          component="label"
          htmlFor="location-input"
          color={isHome ? theme.palette.common.black : theme.palette.grey[400]}
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
        onBlur={() => setFocusedInput(null)}
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
            '& .MuiInputBase-input::placeholder': {
              color: isHome ? theme.palette.grey[400] : theme.palette.common.black,
              opacity: 1,
            },
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
