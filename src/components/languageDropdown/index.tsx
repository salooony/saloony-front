'use client';

import { Box, Menu, MenuItem, Button } from '@mui/material';
import { DownOutlined } from '@ant-design/icons';
import useLanguageDropdown from './useLanguageDropdown';
import { buttonStyle, menuPaperStyle } from './style';
import { LanguageDropdownProps } from '@src/types/langDropdown';

export default function LanguageDropdown({ color, bgColor, listItemColor, ml = 0 }: LanguageDropdownProps) {
  const { anchorEl, selectedLang, handleClick, handleClose } = useLanguageDropdown();

  return (
    <Box>
      <Button onClick={handleClick} endIcon={<DownOutlined style={{ fontSize: 15 }} />} sx={buttonStyle(color)}>
        {selectedLang}
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleClose()}
        PaperProps={{
          sx: menuPaperStyle(bgColor, listItemColor, ml),
        }}
      >
        <MenuItem onClick={() => handleClose('EN')}>EN</MenuItem>
        <MenuItem onClick={() => handleClose('AR')}>AR</MenuItem>
        <MenuItem onClick={() => handleClose('FR')}>FR</MenuItem>
      </Menu>
    </Box>
  );
}
