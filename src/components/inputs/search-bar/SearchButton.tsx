'use client';
import { Box, IconButton } from '@mui/material';
import { iconButtonStyle, iconContainerStyle } from './style';
import { IoSearchOutline } from 'react-icons/io5';
import { SearchButtonProps } from '@src/types/SearchButton';
import { JSX } from 'react';

export default function SearchButton({ onClick, disabled, size = 28, variant }: SearchButtonProps): JSX.Element {
  return (
    <Box sx={iconContainerStyle(variant)}>
      <IconButton sx={iconButtonStyle(Boolean(disabled), variant)} onClick={onClick} disabled={disabled} aria-label="Search">
        <IoSearchOutline size={size} />
      </IconButton>
    </Box>
  );
}
