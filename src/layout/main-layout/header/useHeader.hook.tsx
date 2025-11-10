import useUser from 'hooks/useUser';
import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

const useHeader = () => {
  const user = useUser();

  const downMD = useMediaQuery((theme: any) => theme.breakpoints.down('md'));

  const [drawerToggle, setDrawerToggle] = useState<boolean>(false);

  const drawerToggler = (open: boolean) => (event: any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setDrawerToggle(open);
  };

  return { user, downMD, drawerToggle, drawerToggler };
};

export default useHeader;
