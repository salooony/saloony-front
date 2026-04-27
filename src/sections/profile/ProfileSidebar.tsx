import { Box, List, ListItemButton, ListItemText } from '@mui/material';
import { signOut } from 'next-auth/react';
import { PROFILE_MENU_ITEMS } from './profile-menu-items';

interface ProfileSidebarProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

/**
 * Handles the left-hand navigation sidebar for the Profile layout.
 * Enforces strict domain UI logic for active states and layout constraints.
 */
export const ProfileSidebar = ({ activeTab, onTabChange }: ProfileSidebarProps) => {
  const sidebarItemStyle = (isActive: boolean = false) => ({
    borderRadius: 2,
    py: 1.5,
    px: 2,
    backgroundColor: isActive ? 'primary.lighter' : 'transparent',
    '&:hover': {
      backgroundColor: isActive ? 'primary.lighter' : 'action.hover'
    }
  });

  const sidebarTextProps = (isActive: boolean = false, isError: boolean = false) => ({
    primary: {
      variant: 'subtitle1' as const,
      fontWeight: isActive || isError ? 600 : 500,
      color: isError ? 'error.main' : isActive ? 'text.primary' : 'text.secondary'
    }
  });

  return (
    <Box sx={{ width: '100%', maxWidth: 280, bgcolor: 'transparent' }}>
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
          <ListItemText primary="Log out" slotProps={sidebarTextProps(false, true)} />
        </ListItemButton>
      </List>
    </Box>
  );
};
