'use client';

import { useState } from 'react';
// material-ui
import { Box, Grid, Typography } from '@mui/material';
// project imports
import { ProfileSidebar } from '@sections/profile/ProfileSidebar';
import { ProfilePlaceholder } from '@sections/profile/ProfilePlaceholder';
import { PROFILE_MENU_ITEMS } from '@sections/profile/profile-menu-items';
import { PersonalInformation } from '@sections/profile/PersonalInformation';
import { profileWrapperStyle, profileTitleStyle } from '@sections/profile/style';

/**
 * Main layout container for the Profile Management section.
 * Manages the "Active Tab" state locally to swap out placeholder components.
 */
export const ProfileLayout = () => {
  const [activeTab, setActiveTab] = useState<string>(PROFILE_MENU_ITEMS[0].id);

  const activeItem = PROFILE_MENU_ITEMS.find((item) => item.id === activeTab) || PROFILE_MENU_ITEMS[0];

  const renderContent = () => {
    switch (activeTab) {
      case 'personal-information':
        return <PersonalInformation />;
      default:
        return <ProfilePlaceholder title={activeItem.label} />;
    }
  };

  return (
    <Box sx={profileWrapperStyle}>
      <Typography variant="h3" sx={profileTitleStyle}>
        Profile Management
      </Typography>

      <Grid container spacing={4}>
        {/* Left Sidebar Pane */}
        <Grid size={{ xs: 12, md: 3 }}>
          <ProfileSidebar activeTab={activeTab} onTabChange={setActiveTab} />
        </Grid>

        {/* Right Content Pane */}
        <Grid size={{ xs: 12, md: 9 }}>
          <Box>{renderContent()}</Box>
        </Grid>
      </Grid>
    </Box>
  );
};
