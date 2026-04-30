import { Box, List, ListItemButton, ListItemText } from '@mui/material';
import { signOut } from 'next-auth/react';
import { PROFILE_MENU_ITEMS } from './profile-menu-items';
import { sidebarContainerStyle, sidebarItemStyle, sidebarTextProps } from './style';
import { PROFILE_TEXTS } from './profile-constants';

interface ProfileSidebarProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

/**
 * Handles the left-hand navigation sidebar for the Profile layout.
 * Enforces strict domain UI logic for active states and layout constraints.
 */
export const ProfileSidebar = ({ activeTab, onTabChange }: ProfileSidebarProps) => {
  return (
    <Box sx={sidebarContainerStyle}>
      <List component="nav" sx={{ p: 0, display: 'flex', flexDirection: 'column', gap: 1 }}>
        {PROFILE_MENU_ITEMS.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <ListItemButton key={item.id} onClick={() => onTabChange(item.id)} sx={sidebarItemStyle(isActive)}>
              <ListItemText primary={item.label} slotProps={sidebarTextProps(isActive)} />
            </ListItemButton>
          );
        })}

        {/* Dedicated Log Out Button */}
        <ListItemButton
          onClick={() => signOut()}
          sx={{
            ...sidebarItemStyle(false),
            mt: 2,
            '&:hover': { backgroundColor: 'error.lighter' }
          }}
        >
          <ListItemText primary={PROFILE_TEXTS.LOGOUT_BUTTON} slotProps={sidebarTextProps(false, true)} />
        </ListItemButton>
      </List>
    </Box>
  );
};
