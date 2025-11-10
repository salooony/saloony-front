import { Box, Menu, MenuItem, Button } from '@mui/material';
import { DownOutlined } from '@ant-design/icons';
import { useState } from 'react';

interface LanguageDropdownProps {
  color?: string;
  bgColor?: string;
  listItemColor?: string;
  ml?: number;
}

export default function LanguageDropdown({
  color = '#877754',
  bgColor = '#877754',
  listItemColor = '#fff',
  ml = 0
}: LanguageDropdownProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedLang, setSelectedLang] = useState('EN');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (lang?: string) => {
    if (lang) setSelectedLang(lang);
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        onClick={handleClick}
        endIcon={<DownOutlined style={{ fontSize: 15 }} />}
        sx={{
          color: color,
          textTransform: 'none',
          fontWeight: 500,
        }}
      >
        {selectedLang}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleClose()}
        PaperProps={{
          sx: {
            bgcolor: bgColor,
            color: listItemColor,
            ml: ml
          },
        }}
      >
        <MenuItem onClick={() => handleClose('EN')}>EN</MenuItem>
        <MenuItem onClick={() => handleClose('AR')}>AR</MenuItem>
        <MenuItem onClick={() => handleClose('FR')}>FR</MenuItem>
      </Menu>
    </Box>
  );
}
