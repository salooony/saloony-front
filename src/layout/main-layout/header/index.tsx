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
import { MainLayoutType, ThemeMode } from '@src/config';
import { useScroll } from 'contexts/scrollProvider';
import { HeaderProps } from '@src/types/header';
import MenuOutlined from '@ant-design/icons/MenuOutlined';
import ProfessionalButton from '@src/components/professional-button/professionalButton';
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

export default function Header({ variant = MainLayoutType.HOME, initialQuery = '', initialLocation = '' }: HeaderProps) {
  const [headerExpanded, setHeaderExpanded] = useState(false);
  const { container } = useConfig();
  const { user, downMD, drawerToggle, drawerToggler } = useHeader();
  const { scrolled } = useScroll();
  const isMdScreen = useIsMdScreen();
  const isLgScreen = useIsLgScreen();
  const isSearch = variant === MainLayoutType.SEARCH;
  const locationItem = initialLocation ? ADDRESSES.find((addr) => addr.name === initialLocation) || null : null;
  const homePath = '/';
  const loginPath = '/login';
  return (
    <AppBar sx={appBarStyle(scrolled)}>
      <Container disableGutters={downMD} maxWidth={container ? 'xl' : false}>
        <Toolbar sx={toolbarStyle}>

          <Box sx={logoBoxStyle(isSearch ? (isLgScreen ? '1px' : 15) : 0.5)}>
            <IconButton color="secondary" onClick={drawerToggler(true)} sx={menuIconStyle}>
              <MenuOutlined />
            </IconButton>
            <Logo
              isHeader
              to={homePath}
              color={
                variant === MainLayoutType.HOME
                  ? ThemeMode.LIGHT
                  : isMdScreen
                    ? ThemeMode.LIGHT
                    : scrolled
                      ? ThemeMode.LIGHT
                      : ThemeMode.DARK
              }
            />
            {variant === MainLayoutType.SEARCH ? (
              !isMdScreen && (
                !headerExpanded ? (
                  <SearchBar
                    variant={MainLayoutType.SEARCH}
                    initialQuery={initialQuery}
                    initialLocation={locationItem}
                    onFocusChange={(focused) => setHeaderExpanded(focused)}
                    enableExpand={true}
                  />
                ) : (
                  <SearchBar
                    variant={MainLayoutType.HOME}
                    initialQuery={initialQuery}
                    initialLocation={locationItem}
                    onFocusChange={(focused) => setHeaderExpanded(focused)}
                    enableExpand={true}
                  />
                )
              )
            ) : (
              <List sx={listStyle}>
                <AnimatedLink href="/components-overview/buttons" target="_blank" darkLink={variant !== MainLayoutType.HOME}>
                  Hairdresser
                </AnimatedLink>
                <AnimatedLink href="https://codedthemes.gitbook.io/mantis/" target="_blank" darkLink={variant !== MainLayoutType.HOME}>
                  Barber
                </AnimatedLink>
              </List>
            )}
          </Box>

          <Box sx={rightBoxStyle(isSearch)}>
            <Link
              className="header-link"
              component={Link}
              href={user ? APP_DEFAULT_PATH : '/login'}
              target="_blank"
              underline="none"
              sx={{
                color: 'common.white',
                paddingLeft: '0 !important',
                paddingRight: '0 !important'
              }}
            >
              <AnimateButton>
                <Button variant="text" sx={headerButtonStyle(variant, scrolled, isMdScreen)}>
                  {user ? 'Mon compte' : 'Login'}
                </Button>
              </AnimateButton>
            </Link>

            <ProfessionalButton scrolled={scrolled} isMdScreen={isMdScreen} />

            <LanguageDropdown variant={variant} scrolled={scrolled} isMdScreen={isMdScreen} />

          </Box>

          <Box sx={{ display: isSearch ? 'none' : { xs: 'block', md: 'none' } }}>
            <Link href={user ? APP_DEFAULT_PATH : loginPath} target="_blank">
              <AnimateButton>
                <IconButton
                  component="span"
                  color="secondary"
                  sx={{
                    bgcolor: 'common.white',
                    '&:hover': {
                      bgcolor: 'primary.lighter',
                      color: 'primary.main'
                    }
                  }}
                >
                  {user ? 'Mon compte' : <LoginOutlined />}
                </IconButton>
              </AnimateButton>
            </Link>
          </Box>
        </Toolbar>

        <Drawer anchor="left" open={drawerToggle} onClose={drawerToggler(false)} sx={drawerStyle}>
          <Box sx={drawerBoxStyle}>
            <Logo isIcon to="/" />
            <List>
              <ListItem sx={drawerListItemStyle}>
                <LanguageDropdown variant={variant} inDrawer />
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
