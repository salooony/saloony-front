import { useState } from 'react';

export default function useLanguageDropdown() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedLang, setSelectedLang] = useState('EN');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (lang?: string) => {
    if (lang) setSelectedLang(lang);
    setAnchorEl(null);
  };

  return {
    anchorEl,
    selectedLang,
    handleClick,
    handleClose
  };
}
