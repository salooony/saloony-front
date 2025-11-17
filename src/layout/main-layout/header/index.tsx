'use client';

import { AppBar, Container, Toolbar, Box, List, ListItemButton, ListItemText, Drawer, Button, Link, ListItem } from '@mui/material';
import Logo from 'components/logo';
import IconButton from 'components/@extended/IconButton';
import AnimateButton from 'components/@extended/AnimateButton';
import AnimatedLink from '@src/components/@extended/animated-link';
import LanguageDropdown from '@src/components/languageDropdown';
import useHeader from './useHeader.hook';
import useConfig from 'hooks/useConfig';
import { APP_DEFAULT_PATH, MainLayoutType, ThemeMode } from 'config';
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

export default function Header({ variant = MainLayoutType.HOME }: HeaderProps) {
  const { container } = useConfig();
  const { user, downMD, drawerToggle, drawerToggler } = useHeader();
  const { scrolled } = useScroll();
  const theme = useTheme();
  const homePath = '/';
  const loginPath = '/login';

  return (
    <AppBar sx={appBarStyle(theme, scrolled)}>
      <Container disableGutters={downMD} maxWidth={container ? 'xl' : false}>
        <Toolbar sx={toolbarStyle}>
          <IconButton color="secondary" onClick={drawerToggler(true)} sx={menuIconStyle(theme)}>
            <MenuOutlined />
          </IconButton>

          <Box sx={logoBoxStyle}>
            <Logo isHeader to={homePath} color={variant === MainLayoutType.HOME ? ThemeMode.LIGHT : ThemeMode.DARK} />
            {variant === MainLayoutType.SEARCH ? (
              <></>
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

          <Box sx={rightBoxStyle(scrolled)}>
            <Link
              className="header-link"
              component={Link}
              href={user ? APP_DEFAULT_PATH : loginPath}
              target="_blank"
              underline="none"
              sx={{ color: theme.palette.common.white }}
            >
              <AnimateButton>
                <Button
                  variant="text"
                  sx={headerButtonStyle(
                    theme,
                    variant === MainLayoutType.HOME ? theme.palette.common.white : 'transparent',
                    variant === MainLayoutType.HOME
                      ? theme.palette.primary.main
                      : scrolled
                        ? theme.palette.common.white
                        : theme.palette.primary.main,
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
                variant === MainLayoutType.HOME
                  ? theme.palette.common.white
                  : scrolled
                    ? theme.palette.common.white
                    : theme.palette.primary.main
              }
              textColor={
                variant === MainLayoutType.HOME
                  ? theme.palette.primary.main
                  : scrolled
                    ? theme.palette.primary.main
                    : theme.palette.common.white
              }
            />
          </Box>

          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <Link href={user ? APP_DEFAULT_PATH : loginPath} target="_blank">
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
            <Logo isIcon to={homePath} />
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
              <ListItemButton component={Link} href={user ? APP_DEFAULT_PATH : loginPath}>
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
