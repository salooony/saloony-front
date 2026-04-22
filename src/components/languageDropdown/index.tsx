'use client';

import { Box, Menu, MenuItem, Button } from '@mui/material';
import { DownOutlined } from '@ant-design/icons';
import useLanguageDropdown from './useLanguageDropdown';
import { buttonStyle, langListStyle } from './style';
import { MainLayoutType } from '@src/config';

export default function LanguageDropdown({
  variant = MainLayoutType.HOME,
  scrolled = false,
  inDrawer = false,
  isMdScreen = false
}: {
  variant?: MainLayoutType;
  scrolled?: boolean;
  inDrawer?: boolean;
  isMdScreen?: boolean;
}) {
  const { anchorEl, selectedLang, handleClick, handleClose } = useLanguageDropdown();

  return (
    <Box>
      <Button onClick={handleClick} endIcon={<DownOutlined />} sx={buttonStyle(scrolled, inDrawer, variant, isMdScreen)}>
        {selectedLang}
      </Button>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => handleClose()} sx={langListStyle(variant, scrolled, inDrawer)}>
        <MenuItem onClick={() => handleClose('EN')}>EN</MenuItem>
        <MenuItem onClick={() => handleClose('AR')}>AR</MenuItem>
        <MenuItem onClick={() => handleClose('FR')}>FR</MenuItem>
      </Menu>
    </Box>
  );
}
