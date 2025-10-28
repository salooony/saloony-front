'use client';

import { Box, Paper, TextField, IconButton, InputLabel } from '@mui/material';
import { FiSearch } from 'react-icons/fi';
import { useTheme } from '@mui/material/styles';
import useSearchBar from './useSearchBar';
import { searchContainerStyle, paperStyle, inputGroupStyle, searchBoxStyle, iconContainerStyle, iconButtonStyle } from './style';

export default function SearchBar() {
  const { query, setQuery, focusedInput, setFocusedInput, location, setLocation } = useSearchBar();
  const theme = useTheme();

  return (
    <Box sx={searchContainerStyle}>
      <Paper elevation={3} sx={paperStyle}>
        <Box sx={inputGroupStyle}>

          <Box sx={searchBoxStyle(theme, focusedInput, 'query')}>
            <InputLabel shrink>What are you looking for?</InputLabel>
            <TextField
              variant="standard"
              fullWidth
              value={query}
              onFocus={() => setFocusedInput('query')}
              onBlur={() => setFocusedInput(null)}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={focusedInput === 'query' || query ? '' : 'Name of the salon, services (cut, etc.)'}
              InputProps={{
                disableUnderline: true,
                sx: { fontSize: theme.typography.h6.fontSize }
              }}
            />
          </Box>

          <Box sx={searchBoxStyle(theme, focusedInput, 'location')}>
            <InputLabel shrink>Or</InputLabel>
            <TextField
              variant="standard"
              fullWidth
              value={location}
              onFocus={() => setFocusedInput('location')}
              onBlur={() => setFocusedInput(null)}
              onChange={(e) => setLocation(e.target.value)}
              placeholder={focusedInput === 'location' || location ? '' : 'Address, city...'}
              InputProps={{
                disableUnderline: true,
                sx: { fontSize: theme.typography.h6.fontSize }
              }}
            />
          </Box>
        </Box>

        <Box sx={iconContainerStyle}>
          <IconButton sx={iconButtonStyle}>
            <FiSearch size={28} />
          </IconButton>
        </Box>
      </Paper>
    </Box>
  );
}
