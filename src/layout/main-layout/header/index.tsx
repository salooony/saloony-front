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

import MenuOutlined from '@ant-design/icons/MenuOutlined';
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

export default function Header() {
  const { container } = useConfig();
  const { user, downMD, drawerToggle, drawerToggler } = useHeader();
  const { scrolled } = useScroll();
  const theme = useTheme();

  return (
    <AppBar sx={appBarStyle(theme, scrolled)}>
      <Container disableGutters={downMD} maxWidth={container ? 'xl' : false}>
        <Toolbar sx={toolbarStyle}>
          <IconButton color="secondary" onClick={drawerToggler(true)} sx={menuIconStyle(theme)}>
            <MenuOutlined />
          </IconButton>

          <Box sx={logoBoxStyle}>
            <Logo isHeader to="/" />
            <List sx={listStyle}>
              <AnimatedLink href="/components-overview/buttons" target="_blank">
                Hairdresser
              </AnimatedLink>
              <AnimatedLink href="https://codedthemes.gitbook.io/mantis/" target="_blank">
                Barber
              </AnimatedLink>
            </List>
          </Box>

          <Box sx={rightBoxStyle(scrolled)}>
            <Link
              className="header-link"
              component={Link}
              href={user ? APP_DEFAULT_PATH : '/login'}
              target="_blank"
              underline="none"
              sx={{ color: theme.palette.common.white }}
            >
              <AnimateButton>
                <Button variant="contained" sx={headerButtonStyle(theme)}>
                  {user ? 'Mon compte' : 'Login'}
                </Button>
              </AnimateButton>
            </Link>

            <Box sx={{ display: 'inline-block' }}>
              <AnimateButton>
                <Button
                  component={Link}
                  href="https://mui.com/store/items/mantis-react-admin-dashboard-template/"
                  target="_blank"
                  disableElevation
                  variant="contained"
                  sx={headerButtonStyle(theme)}
                >
                  I am a beauty professional
                </Button>
              </AnimateButton>
            </Box>

            <LanguageDropdown
              color={scrolled ? theme.palette.common.white : theme.palette.primary.main}
              bgColor={scrolled ? theme.palette.common.white : theme.palette.primary.main}
              listItemColor={scrolled ? theme.palette.primary.main : theme.palette.common.white}
            />
          </Box>

          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <AnimateButton>
              <IconButton
                component={Link}
                color="secondary"
                href={user ? APP_DEFAULT_PATH : '/login'}
                target="_blank"
                sx={{ bgcolor: theme.palette.common.white }}
              >
                {user ? 'Mon compte' : <LoginOutlined />}
              </IconButton>
            </AnimateButton>
          </Box>
        </Toolbar>

        <Drawer anchor="left" open={drawerToggle} onClose={drawerToggler(false)} sx={drawerStyle(theme)}>
          <Box sx={drawerBoxStyle}>
            <Logo isIcon to="/" />
            <List>
              <ListItem sx={drawerListItemStyle}>
                <LanguageDropdown
                  color={theme.palette.common.white}
                  bgColor={theme.palette.common.white}
                  listItemColor={theme.palette.primary.main}
                  ml={1}
                />
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
