'use client';
import { Box, IconButton } from '@mui/material';
import { iconButtonStyle, iconContainerStyle } from './style';
import { FiSearch } from 'react-icons/fi';
import { SearchButtonProps } from '@src/types/SearchButton';
import { JSX } from 'react';

export default function SearchButton({ onClick, disabled, size = 28, variant }: SearchButtonProps): JSX.Element {
  return (
    <Box sx={iconContainerStyle(variant)}>
      <IconButton sx={iconButtonStyle(Boolean(disabled), variant)} onClick={onClick} disabled={disabled} aria-label="Search">
        <FiSearch size={28} />
      </IconButton>
    </Box>
  );
}
