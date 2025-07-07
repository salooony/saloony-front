"use client";

import { useState } from "react";
import { Menu, MenuItem, Button } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Link from "next/link";
import Image from "next/image";
const Navbar=()=> {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center text-white z-0">
      <div className="flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2 text-white text-2xl font-bold">
          <Image
            src="/images/logo-white.png"
            alt="Saloony Logo"
            width={150}
            height={20}
            priority
          />
        </Link>

        <div className="hidden md:flex gap-4 font-medium">
          <button className="text-white text-lg">Hairdresser</button>
          <button className="text-white text-lg">Barber</button>
        </div>
</div>
      <div className="flex items-center gap-4">
        <button className="text-white text-lg">Log in</button>
        <button style={{ backgroundColor: '#AC8D5F' }} className="text-white px-4 py-2 rounded hover:bg-yellow-500 transition">
          I am a beauty professional
        </button>
        <div>
          <Button
            onClick={handleClick}
            endIcon={<ArrowDropDownIcon />}
            className="!text-white !hover:bg-gray-800 px-3 py-1 rounded normal-case text-lg"
          >
            EN
          </Button>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem onClick={handleClose}>EN</MenuItem>
            <MenuItem onClick={handleClose}>AR</MenuItem>
          </Menu>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;