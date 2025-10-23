import NextLink from 'next/link';

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Logo from 'components/logo';
import IconButton from 'components/@extended/IconButton';
import AnimateButton from 'components/@extended/AnimateButton';

import { APP_DEFAULT_PATH } from 'config';

import MenuOutlined from '@ant-design/icons/MenuOutlined';
import LineOutlined from '@ant-design/icons/LineOutlined';
import { ElevationScroll } from './elevationScroll';
import useHeader from './useHeader.hook';
import { usePathname } from 'next/navigation';

export default function Header() {
  const { user, downMD, drawerToggle, drawerToggler } = useHeader();
  const pathName = usePathname();
  return (
    <ElevationScroll>
      <AppBar sx={{ bgcolor: 'transparent', color: 'text.primary', boxShadow: 'none' }}>
        <Container disableGutters={downMD}>
          <Toolbar sx={{ px: { xs: 1.5, md: 0, lg: 0 }, py: 2 }}>
            <Stack direction="row" spacing={3} sx={{ alignItems: 'center', flexGrow: 1, display: { xs: 'none', md: 'block' } }}>
              <Logo to="/" />
              <Link
                className="header-link"
                color={`${pathName === '/login' ? 'black' : 'white'}`}
                component={NextLink}
                href="/components-overview/buttons"
                underline="none"
              >
                Coiffeur
              </Link>
              <Link
                className="header-link"
                color={`${pathName === '/login' ? 'black' : 'white'}`}
                href="https://codedthemes.gitbook.io/mantis/"
                target="_blank"
                underline="none"
              >
                Barbier
              </Link>
            </Stack>
            <Box sx={{ '& .header-link': { px: 2, '&:hover': { color: 'primary.main' } }, display: { xs: 'none', md: 'block' } }}>
              {pathName !== '/login' && (
                <Link
                  className="header-link"
                  color={`${pathName === '/login' ? 'black' : 'white'}`}
                  component={NextLink}
                  href={user ? APP_DEFAULT_PATH : '/login'}
                  target="_blank"
                  underline="none"
                >
                  {user ? 'Mon compte' : 'Login'}
                </Link>
              )}
              <Box sx={{ display: 'inline-block', ml: 1 }}>
                <AnimateButton>
                  <Button
                    component={Link}
                    href="https://mui.com/store/items/mantis-react-admin-dashboard-template/"
                    target="_blank"
                    disableElevation
                    color="primary"
                    variant="contained"
                  >
                    Je suis un professionnel de beauté
                  </Button>
                </AnimateButton>
              </Box>
            </Box>
            <Box sx={{ width: '100%', alignItems: 'center', justifyContent: 'space-between', display: { xs: 'flex', md: 'none' } }}>
              <Typography sx={{ textAlign: 'left', display: 'inline-block' }}>
                <Logo to="/" />
              </Typography>
              <Stack direction="row" sx={{ gap: 2, alignItems: 'center' }}>
                <Button
                  variant="outlined"
                  size="small"
                  color="warning"
                  component={NextLink}
                  href="/components-overview/buttons"
                  sx={{ height: 28 }}
                >
                  All Components
                </Button>

                <IconButton
                  color="secondary"
                  onClick={drawerToggler(true)}
                  sx={(theme) => ({
                    color: 'grey.100',
                    '&:hover': { bgcolor: 'secondary.dark', color: 'grey.100' },
                    ...theme.applyStyles('dark', { color: 'inherit', '&:hover': { bgcolor: 'secondary.lighter' } })
                  })}
                >
                  <MenuOutlined />
                </IconButton>
              </Stack>
              <Drawer anchor="top" open={drawerToggle} onClose={drawerToggler(false)}>
                <Box
                  sx={{ width: 'auto', '& .MuiListItemIcon-root': { fontSize: '1rem', minWidth: 28 } }}
                  role="presentation"
                  onClick={drawerToggler(false)}
                  onKeyDown={drawerToggler(false)}
                >
                  <List>
                    <Link underline="none" href={user ? APP_DEFAULT_PATH : '/login'} target="_blank">
                      <ListItemButton>
                        <ListItemIcon>
                          <LineOutlined />
                        </ListItemIcon>
                        <ListItemText
                          primary={user ? 'Dashboard' : 'Login'}
                          slotProps={{ primary: { variant: 'h6', color: 'text.primary' } }}
                        />
                      </ListItemButton>
                    </Link>
                    <Link underline="none" href="/components-overview/buttons" target="_blank">
                      <ListItemButton>
                        <ListItemIcon>
                          <LineOutlined />
                        </ListItemIcon>
                        <ListItemText primary="All Components" slotProps={{ primary: { variant: 'h6', color: 'text.primary' } }} />
                      </ListItemButton>
                    </Link>
                    <Link underline="none" href="https://github.com/codedthemes/mantis-free-react-admin-template" target="_blank">
                      <ListItemButton>
                        <ListItemIcon>
                          <LineOutlined />
                        </ListItemIcon>
                        <ListItemText primary="Free Version" slotProps={{ primary: { variant: 'h6', color: 'text.primary' } }} />
                      </ListItemButton>
                    </Link>
                    <Link underline="none" href="https://codedthemes.gitbook.io/mantis/" target="_blank">
                      <ListItemButton>
                        <ListItemIcon>
                          <LineOutlined />
                        </ListItemIcon>
                        <ListItemText primary="Documentation" slotProps={{ primary: { variant: 'h6', color: 'text.primary' } }} />
                      </ListItemButton>
                    </Link>
                    <Link underline="none" href="https://codedthemes.support-hub.io/" target="_blank">
                      <ListItemButton>
                        <ListItemIcon>
                          <LineOutlined />
                        </ListItemIcon>
                        <ListItemText primary="Support" slotProps={{ primary: { variant: 'h6', color: 'text.primary' } }} />
                      </ListItemButton>
                    </Link>
                    <Link underline="none" href="https://mui.com/store/items/mantis-react-admin-dashboard-template/" target="_blank">
                      <ListItemButton>
                        <ListItemIcon>
                          <LineOutlined />
                        </ListItemIcon>
                        <ListItemText primary="Purchase Now" slotProps={{ primary: { variant: 'h6', color: 'text.primary' } }} />
                        <Chip color="primary" label={process.env.NEXT_PUBLIC_VERSION} size="small" />
                      </ListItemButton>
                    </Link>
                  </List>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
}
