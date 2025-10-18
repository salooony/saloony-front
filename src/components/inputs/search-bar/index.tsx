'use client';

import { Box, Paper, TextField, IconButton, InputLabel } from '@mui/material';
import { FiSearch } from 'react-icons/fi';
import useSearchBar from './useSearchBar';

export default function SearchBar() {
  const { query, setQuery, focusedInput, setFocusedInput, location, setLocation } = useSearchBar();

  return (
    <Box sx={{ p: '20px 0 0 20px' }}>
      <Paper
        elevation={3}
        sx={{
          width: 800,
          minHeight: 80,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: '18px',
          px: 3,
          py: 2
        }}
      >
        <Box sx={{ flex: 1, mr: 3 }}>
          <Box
            sx={{
              borderRadius: '12px',
              px: 2,
              py: 1,
              transition: 'all 0.2s ease',
              bgcolor: focusedInput === 'query' ? 'grey.100' : 'transparent',
              border: focusedInput === 'query' ? '1px solid black' : 'none'
            }}
          >
            <InputLabel shrink>What are you looking for ?</InputLabel>
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
                sx: { color: 'black', fontSize: '1rem' }
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            borderRadius: '12px',
            px: 2,
            py: 1,
            transition: 'all 0.2s ease',
            bgcolor: focusedInput === 'location' ? 'grey.100' : 'transparent',
            border: focusedInput === 'location' ? '1px solid black' : 'none',
            minWidth: 250
          }}
        >
          <InputLabel shrink sx={{ fontSize: '0.875rem', color: 'grey.500' }}>
            Or
          </InputLabel>
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
              sx: { color: 'black', fontSize: '1rem' }
            }}
          />
        </Box>
        <IconButton sx={{ ml: 2, color: 'black', '&:hover': { color: 'grey.700' } }}>
          <FiSearch size={22} />
        </IconButton>
      </Paper>
    </Box>
  );
}
