'use client';

import { AppBar, Container, Toolbar, Box, List, ListItemButton, ListItemText, Drawer, Button, Link, ListItem } from '@mui/material';
import Logo from 'components/logo';
import IconButton from 'components/@extended/IconButton';
import AnimateButton from 'components/@extended/AnimateButton';
import AnimatedLink from '@src/components/@extended/animated-link';
import LanguageDropdown from '@src/components/languageDropdown';
import useHeader from './useHeader.hook';
import useConfig from 'hooks/useConfig';
import { APP_DEFAULT_PATH } from 'config';
import { useScroll } from 'contexts/scrollProvider';
import { useTheme } from '@mui/material/styles';
import { HeaderProps } from '@src/types/header';
import MenuOutlined from '@ant-design/icons/MenuOutlined';
import ProfessionalButton from '@src/components/professionalButton';
import LoginOutlined from '@ant-design/icons/LoginOutlined';

import {
  appBarStyle,
  toolbarStyle,
  logoBoxStyle,
  listStyle,
  rightBoxStyle,
  drawerStyle,
  drawerBoxStyle,
  drawerListItemStyle,
  menuIconStyle,
  headerButtonStyle
} from './style';
import SearchBar from '@src/components/inputs/search-bar';
import { useIsLgScreen, useIsMdScreen } from '@src/constants/breakpoints';
import { ADDRESSES } from '@src/components/inputs/search-bar/constants';
import { useState } from 'react';

export default function Header({ variant = 'home', initialQuery = '', initialLocation = '' }: HeaderProps) {
  const [headerExpanded, setHeaderExpanded] = useState(false);
  const { container } = useConfig();
  const { user, downMD, drawerToggle, drawerToggler } = useHeader();
  const { scrolled } = useScroll();
  const isMdScreen = useIsMdScreen();
  const isLgScreen = useIsLgScreen();
  const theme = useTheme();
  const isSearch = variant === 'search';
  const locationItem = initialLocation ? ADDRESSES.find((addr) => addr.name === initialLocation) || null : null;
  return (
    <AppBar sx={appBarStyle(theme, scrolled)}>
      <Container disableGutters={downMD} maxWidth={container ? 'xl' : false}>
        <Toolbar sx={toolbarStyle}>
          <IconButton color="secondary" onClick={drawerToggler(true)} sx={menuIconStyle(theme)}>
            <MenuOutlined />
          </IconButton>

          <Box sx={logoBoxStyle(isSearch ? (isLgScreen ? '1px' : 15) : 3)}>
            <Logo isHeader to="/" color={variant === 'home' ? 'light' : 'dark'}/>
            {variant === 'search' ? (
              !isMdScreen && (
                !headerExpanded ? (
                  <SearchBar
                    variant="search"
                    initialQuery={initialQuery}
                    initialLocation={locationItem}
                    onFocusChange={(focused) => setHeaderExpanded(focused)}
                    enableExpand={true}
                  />
                ) : (
                  <SearchBar
                    variant="home"
                    initialQuery={initialQuery}
                    initialLocation={locationItem}
                    onFocusChange={(focused) => setHeaderExpanded(focused)}
                    enableExpand={true}
                  />
                )
              )
            ) : (
              <List sx={listStyle}>
                <AnimatedLink href="/components-overview/buttons" target="_blank" darkLink={variant !== 'home'}>
                  Hairdresser
                </AnimatedLink>
                <AnimatedLink href="https://codedthemes.gitbook.io/mantis/" target="_blank" darkLink={variant !== 'home'}>
                  Barber
                </AnimatedLink>
              </List>
            )}
          </Box>

          <Box sx={rightBoxStyle(isSearch ? '3px' : 1.5)}>
            <Link
              className="header-link"
              component={Link}
              href={user ? APP_DEFAULT_PATH : '/login'}
              target="_blank"
              underline="none"
              sx={{
                color: theme.palette.common.white,
                paddingLeft: '0 !important',
                paddingRight: '0 !important'
              }}
            >
              <AnimateButton>
                <Button
                  variant="text"
                  sx={headerButtonStyle(
                    theme,
                    variant === 'home' ? theme.palette.common.white : 'transparent',
                    variant === 'home' ? theme.palette.primary.main : scrolled ? theme.palette.common.white : theme.palette.primary.main,
                    scrolled ? theme.palette.common.white : theme.palette.primary.main,
                    scrolled ? theme.palette.primary.main : theme.palette.common.white
                  )}
                >
                  {user ? 'Mon compte' : 'Login'}
                </Button>
              </AnimateButton>
            </Link>

            <ProfessionalButton
              mainColor={scrolled ? theme.palette.common.white : theme.palette.primary.main}
              textColor={scrolled ? theme.palette.primary.main : theme.palette.common.white}
            />

            <LanguageDropdown 
              mainColor={scrolled ? theme.palette.common.white : theme.palette.primary.main}
              backColor={
                variant === 'home' ? theme.palette.common.white : scrolled ? theme.palette.common.white : theme.palette.primary.main
              }
              textColor={
                variant === 'home' ? theme.palette.primary.main : scrolled ? theme.palette.primary.main : theme.palette.common.white
              }
            />
          </Box>

          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <Link href={user ? APP_DEFAULT_PATH : '/login'} target="_blank">
              <AnimateButton>
                <IconButton
                  color="secondary"
                  sx={{
                    bgcolor: theme.palette.common.white,
                    '&:hover': {
                      bgcolor: theme.palette.primary.lighter,
                      color: theme.palette.primary.main
                    }
                  }}
                >
                  {user ? 'Mon compte' : <LoginOutlined />}
                </IconButton>
              </AnimateButton>
            </Link>
          </Box>
        </Toolbar>

        <Drawer anchor="left" open={drawerToggle} onClose={drawerToggler(false)} sx={drawerStyle(theme)}>
          <Box sx={drawerBoxStyle}>
            <Logo isIcon to="/" />
            <List>
              <ListItem sx={drawerListItemStyle}>
                <LanguageDropdown mainColor={theme.palette.common.white} />
              </ListItem>
              <ListItemButton component={Link} href="/components-overview/buttons">
                <ListItemText primary="Hairdresser" />
              </ListItemButton>
              <ListItemButton component={Link} href="https://codedthemes.gitbook.io/mantis/" target="_blank">
                <ListItemText primary="Barber" />
              </ListItemButton>
              <ListItemButton component={Link} href={user ? APP_DEFAULT_PATH : '/login'}>
                <ListItemText primary={user ? 'Mon compte' : 'Login'} />
              </ListItemButton>
              <ListItemButton component={Link} href="https://mui.com/store/items/mantis-react-admin-dashboard-template/" target="_blank">
                <ListItemText primary="I am a beauty professional" />
              </ListItemButton>
            </List>
          </Box>
        </Drawer>
      </Container>
    </AppBar>
  );
}
