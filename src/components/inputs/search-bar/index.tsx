'use client';

import { Box, Paper, TextField, IconButton, InputLabel } from '@mui/material';
import { FiSearch } from 'react-icons/fi';
import useSearchBar from './useSearchBar';

export default function SearchBar() {
  const { query, setQuery, focusedInput, setFocusedInput, location, setLocation } = useSearchBar();

  return (
    <Box sx={{ width: '100%', maxWidth: 800 }}>
      <Paper
        elevation={3}
        sx={{
          display: 'flex',
          alignItems: 'center',
          borderRadius: '18px',
          px: 3,
          py: 2,
          gap: 2
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', sm: 'row', md: 'row' }, width: '90%' }}>
          <Box
            sx={{
              width: { xs: '100%', md: '50%' },
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
          <Box
            sx={{
              width: { xs: '100%', md: '50%' },
              borderRadius: '12px',
              px: 2,
              py: 1,
              transition: 'all 0.2s ease',
              bgcolor: focusedInput === 'location' ? 'grey.100' : 'transparent',
              border: focusedInput === 'location' ? '1px solid black' : 'none',
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
        </Box>
        <Box sx={{ width: '10%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <IconButton sx={{ color: 'black', '&:hover': { color: 'grey.700' }, width: 48, height: 48 }}>
            <FiSearch size={28}/>
          </IconButton>
        </Box>
      </Paper>
    </Box>
  );
}
