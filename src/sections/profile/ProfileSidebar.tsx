import { Box, List, ListItemButton, ListItemText, Typography } from '@mui/material';
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
  return (
    <Box sx={{ width: '100%', maxWidth: 280, bgcolor: 'transparent' }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
        Profile Managment
      </Typography>

      <List component="nav" sx={{ p: 0, display: 'flex', flexDirection: 'column', gap: 1 }}>
        {PROFILE_MENU_ITEMS.map((item) => {
          const isActive = activeTab === item.id;

          return (
            <ListItemButton
              key={item.id}
              onClick={() => onTabChange(item.id)}
              sx={{
                borderRadius: 2,
                py: 1.5,
                px: 2,
                backgroundColor: isActive ? 'primary.lighter' : 'transparent',
                '&:hover': {
                  backgroundColor: isActive ? 'primary.lighter' : 'action.hover'
                }
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  variant: 'subtitle1',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? 'text.primary' : 'text.secondary'
                }}
              />
            </ListItemButton>
          );
        })}

        {/* Dedicated Log Out Button */}
        <ListItemButton
          onClick={() => {
            // Placeholder: Wire up NextAuth or logout logic here eventually.
            console.log('Logging out...');
          }}
          sx={{
            borderRadius: 2,
            py: 1.5,
            px: 2,
            mt: 2,
            '&:hover': {
              backgroundColor: 'error.lighter'
            }
          }}
        >
          <ListItemText
            primary="Log out"
            primaryTypographyProps={{
              variant: 'subtitle1',
              fontWeight: 600,
              color: 'error.main'
            }}
          />
        </ListItemButton>
      </List>
    </Box>
  );
};
