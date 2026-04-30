import { useState } from 'react';
// next
import { useRouter } from 'next/navigation';

// material-ui
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import LogoutOutlined from '@ant-design/icons/LogoutOutlined';
import { profileTabs } from './profileTabs';

interface Props {
  handleLogout: () => void;
}

export default function ProfileTab({ handleLogout }: Props) {
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState<number>();

  const handleListItemClick = (index: number, route?: string) => {
    setSelectedIndex(index);
    if (route) {
      router.push(route);
    }
  };

  return (
    <List component="nav" sx={{ p: 0, '& .MuiListItemIcon-root': { minWidth: 32 } }}>
      {profileTabs.map((tab) => (
        <ListItemButton key={tab.id} selected={selectedIndex === tab.id} onClick={() => handleListItemClick(tab.id, tab.route)}>
          <ListItemIcon>{tab.icon}</ListItemIcon>
          <ListItemText primary={tab.label} />
        </ListItemButton>
      ))}
      <ListItemButton selected={selectedIndex === 2} onClick={handleLogout}>
        <ListItemIcon>
          <LogoutOutlined />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </List>
  );
}
