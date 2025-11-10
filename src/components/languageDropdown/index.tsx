'use client';

import { Box, Menu, MenuItem, Button } from '@mui/material';
import { DownOutlined } from '@ant-design/icons';
import useLanguageDropdown from './useLanguageDropdown';
import { buttonStyle, langListStyle } from './style';
import { LanguageDropdownProps } from '@src/types/langDropdown';
import { useTheme } from '@mui/material/styles';

export default function LanguageDropdown({ mainColor, backColor, textColor }: LanguageDropdownProps) {
  const { anchorEl, selectedLang, handleClick, handleClose } = useLanguageDropdown();
  const theme = useTheme();

  return (
    <Box>
      <Button onClick={handleClick} endIcon={<DownOutlined />} sx={buttonStyle(theme, mainColor)}>
        {selectedLang} 
      </Button>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => handleClose()} sx={langListStyle(theme, backColor, textColor)}>
        <MenuItem onClick={() => handleClose('EN')}>EN</MenuItem>
        <MenuItem onClick={() => handleClose('AR')}>AR</MenuItem>
        <MenuItem onClick={() => handleClose('FR')}>FR</MenuItem>
      </Menu>
    </Box>
  );
}
