'use client';
import { Box, IconButton } from '@mui/material';
import { iconButtonStyle, iconContainerStyle } from './style';
import { FiSearch } from 'react-icons/fi';
import { SearchButtonProps } from '@src/types/SearchButton';
import { useTheme } from '@mui/material/styles';
import { JSX } from 'react';

export default function SearchButton({ onClick, disabled }: SearchButtonProps): JSX.Element {
  const theme = useTheme();
  return (
    <Box sx={iconContainerStyle}>
      <IconButton sx={iconButtonStyle(theme, Boolean(disabled))} onClick={onClick} disabled={disabled} aria-label="Search">
        <FiSearch size={28} />
      </IconButton>
    </Box>
  );
}

