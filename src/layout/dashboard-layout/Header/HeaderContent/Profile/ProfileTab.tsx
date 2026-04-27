import { useState } from 'react';
// next
import { useRouter } from 'next/navigation';

// material-ui
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// assets
import EditOutlined from '@ant-design/icons/EditOutlined';
import ProfileOutlined from '@ant-design/icons/ProfileOutlined';
import LogoutOutlined from '@ant-design/icons/LogoutOutlined';
import UserOutlined from '@ant-design/icons/UserOutlined';
import WalletOutlined from '@ant-design/icons/WalletOutlined';

interface Props {
  handleLogout: () => void;
}

// Tab configuration for the profile menu.
const tabs = [
  { id: 0, label: 'Edit Profile', icon: <EditOutlined />, route: '/profile' },
  { id: 1, label: 'View Profile', icon: <UserOutlined />, route: '/profile' },
  { id: 3, label: 'Social Profile', icon: <ProfileOutlined /> },
  { id: 4, label: 'Billing', icon: <WalletOutlined /> }
];

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
      {tabs.map((tab) => (
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
