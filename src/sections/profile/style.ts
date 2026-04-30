import { SxProps, Theme } from '@mui/material';

export const profileWrapperStyle: SxProps<Theme> = {
  width: '100%',
  maxWidth: 1240,
  mx: 'auto',
  py: 4,
  px: { xs: 2, md: 3 }
};

export const profileTitleStyle: SxProps<Theme> = {
  mb: 4,
  fontWeight: 700,
  fontFamily: (theme) => theme.typography.fontFamily
};

export const placeholderCardStyle: SxProps<Theme> = {
  p: 3,
  minHeight: 400,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px dashed',
  borderColor: 'divider',
  bgcolor: 'background.paper'
};

export const sidebarContainerStyle: SxProps<Theme> = {
  width: '100%',
  maxWidth: 280,
  bgcolor: 'transparent'
};

export const sidebarItemStyle = (isActive: boolean = false) => ({
  borderRadius: 2,
  py: 1.5,
  px: 2,
  backgroundColor: isActive ? 'primary.lighter' : 'transparent',
  '&:hover': {
    backgroundColor: isActive ? 'primary.lighter' : 'action.hover'
  }
});

export const sidebarTextProps = (isActive: boolean = false, isError: boolean = false) => ({
  primary: {
    variant: 'subtitle1' as const,
    fontWeight: isActive || isError ? 600 : 500,
    color: isError ? 'error.main' : isActive ? 'text.primary' : 'text.secondary'
  }
});
