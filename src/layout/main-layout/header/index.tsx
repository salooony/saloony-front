'use client';
import { useScroll } from 'contexts/scrollProvider';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { ListItem } from '@mui/material';

import Logo from 'components/logo';
import IconButton from 'components/@extended/IconButton';
import AnimateButton from 'components/@extended/AnimateButton';
import AnimatedLink from 'components/@extended/AnimatedLink';
import useHeader from './useHeader.hook';
import useConfig from 'hooks/useConfig';
import { APP_DEFAULT_PATH } from 'config';

import MenuOutlined from '@ant-design/icons/MenuOutlined';
import LoginOutlined from '@ant-design/icons/LoginOutlined';
import LanguageDropdown from 'components/LanguageDropdown';

export default function Header() {
  const { container } = useConfig();
  const { user, downMD, drawerToggle, drawerToggler } = useHeader();

  const { scrolled } = useScroll();

  return (
    <AppBar
      sx={{
        boxShadow: scrolled ? 1 : 'none',
        bgcolor: scrolled ? '#877754' : { xs: '#877754', md: 'transparent' },
        transition: 'all 0.3s ease-in-out'
      }}
    >
      <Container disableGutters={downMD} maxWidth={container ? 'xl' : false}>
        <Toolbar
          sx={{
            px: { xs: 1.5, md: 0 },
            display: 'flex',
            justifyContent: 'space-between',
            maxHeight: 60
          }}
        >
          <IconButton
            color="secondary"
            onClick={drawerToggler(true)}
            sx={{
              color: '#fff',
              display: { xs: 'block', md: 'none' },
              '&:hover': { color: '#f5f5f5' }
            }}
          >
            <MenuOutlined />
          </IconButton>

          <Box sx={{ mr: 2, display: 'flex', alignItems: 'center', gap: { xs: 0, md: 3 } }}>
            <Logo isHeader to="/" />
            <List sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
              <AnimatedLink href="/components-overview/buttons" target="_blank" color="white">
                Hairdresser
              </AnimatedLink>
              <AnimatedLink href="https://codedthemes.gitbook.io/mantis/" target="_blank" color="white">
                Barber
              </AnimatedLink>
            </List>
          </Box>

          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1.5,
              '& .header-link': {
                px: 2,
                '&:hover': {
                  color: 'primary.main'
                }
              }
            }}
          >
            <Link
              className="header-link"
              component={Link}
              href={user ? APP_DEFAULT_PATH : '/login'}
              target="_blank"
              underline="none"
              sx={{ color: '#fff' }}
            >
              <AnimateButton>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#fff',
                    color: '#877754',
                    '&:hover': { backgroundColor: '#f5f5f5' }
                  }}
                >
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
                  sx={{
                    backgroundColor: '#fff',
                    color: '#877754',
                    '&:hover': { backgroundColor: '#f5f5f5' }
                  }}
                >
                  I am a beauty professional
                </Button>
              </AnimateButton>
            </Box>

            <LanguageDropdown
              color={scrolled ? 'white' : '#877754'}
              bgColor={scrolled ? 'white' : '#877754'}
              listItemColor={scrolled ? '#877754' : 'white'}
            />

          </Box>

          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <AnimateButton>
              <IconButton
                color="secondary"
                href={user ? APP_DEFAULT_PATH : '/login'}
                target="_blank"
                sx={{
                  bgcolor: '#fff',
                  '&:hover': { bgcolor: '#f5f5f5' }
                }}
              >
                {user ? 'Mon compte' : <LoginOutlined />}
              </IconButton>
            </AnimateButton>
          </Box>
        </Toolbar>

        <Drawer
          anchor="left"
          open={drawerToggle}
          onClose={drawerToggler(false)}
          sx={{
            '& .MuiDrawer-paper': {
              bgcolor: '#877754',
              color: '#fff',
              width: 240
            }
          }}
        >
          <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Logo isIcon to="/" />
            <List>
              <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
                <LanguageDropdown color="white" bgColor="white" listItemColor="#877754" ml={1} />
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
