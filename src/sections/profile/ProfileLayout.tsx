'use client';

import { useState } from 'react';
import { Box, Grid } from '@mui/material';
import { ProfileSidebar } from './ProfileSidebar';
import { ProfilePlaceholder } from './ProfilePlaceholder';
import { PROFILE_MENU_ITEMS } from './profile-menu-items';

/**
 * Main layout container for the Profile Management section.
 * Manages the "Active Tab" state locally to swap out placeholder components.
 */
export const ProfileLayout = () => {
  const [activeTab, setActiveTab] = useState<string>(PROFILE_MENU_ITEMS[0].id);

  const activeItem = PROFILE_MENU_ITEMS.find((item) => item.id === activeTab) || PROFILE_MENU_ITEMS[0];

  return (
    <Box sx={{ width: '100%', maxWidth: 1200, mx: 'auto', py: 4, px: { xs: 2, md: 3 } }}>
      <Grid container spacing={4}>
        {/* Left Sidebar Pane */}
        <Grid size={{ xs: 12, md: 3 }}>
          <ProfileSidebar activeTab={activeTab} onTabChange={setActiveTab} />
        </Grid>

        {/* Right Content Pane */}
        <Grid size={{ xs: 12, md: 9 }}>
          <Box sx={{ pt: { xs: 2, md: 8 } }}>
            {/* The placeholder simulates rendering the active component for the selected tab */}
            <ProfilePlaceholder title={activeItem.label} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
