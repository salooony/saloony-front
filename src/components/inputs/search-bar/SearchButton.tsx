'use client';
import { Box, IconButton } from '@mui/material';
import { iconButtonStyle, iconContainerStyle } from './style';
import { FiSearch } from 'react-icons/fi';
import { SearchButtonProps } from '@src/types/SearchButton';
import { useTheme } from '@mui/material/styles';
import { JSX } from 'react';

export default function SearchButton({ onClick, disabled, size = 28, variant }: SearchButtonProps): JSX.Element {
  const theme = useTheme();
  return (
    <Box sx={iconContainerStyle(theme, variant)}>
      <IconButton sx={iconButtonStyle(theme, Boolean(disabled), variant)} onClick={onClick} disabled={disabled} aria-label="Search">
        <FiSearch size={28} />
      </IconButton>
    </Box>
  );
}

