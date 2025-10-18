'use client';

import { Box, Grid, Link, Stack, List, ListItem, Typography } from '@mui/material';

import { motion } from 'framer-motion';

import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons';

import Logo from '@components/logo';
import { FooterLink, linkSX } from './styles';

export default function FooterBlock() {
  return (
    <Box
      sx={{
        bgcolor: '#877754',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        p: { xs: 2, sm: 2, md: 0 },
        alignItems: 'center'
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          width: { xs: '100%', sm: '100%', md: '90%' },
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'column', md: 'row' },
          gap: 4,
          alignItems: { xs: 'center', sm: 'center', md: 'stretch' },
          justifyContent: 'center',
          borderBottom: '1px solid #ccc',
          pb: 4
        }}
      >
        <Grid>
          <motion.div
            initial={{ opacity: 0, translateY: 550 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              type: 'spring',
              stiffness: 150,
              damping: 30
            }}
          >
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Logo sx={{ width: 'auto' }} to="/" />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: { md: '20px' },
                  display: 'flex',
                  gap: 1
                }}
              >
                <Link href="https://www.facebook.com/codedthemes/" underline="none" target="_blank" sx={linkSX}>
                  <FacebookOutlined />
                </Link>
                <Link href="https://www.instagram.com/codedthemes" underline="none" target="_blank" sx={linkSX}>
                  <InstagramOutlined />
                </Link>
              </Box>
            </Box>
          </motion.div>
        </Grid>

        <Grid
          container
          justifyContent="space-evenly"
          width={{
            xs: '100%',
            sm: '100%',
            md: '70%'
          }}
        >
          <Grid
            container
            justifyContent="center"
            sx={{
              my: { xs: 0, sm: 0, md: 7 }
            }}
          >
            <Stack spacing={2}>
              <Typography variant="h3"> About Saloony</Typography>
              <List sx={{ p: 0, display: 'flex', flexDirection: 'column', gap: 1 }}>
                <ListItem disablePadding>
                  <FooterLink href="#">Join us</FooterLink>
                </ListItem>
                <ListItem disablePadding>
                  <FooterLink href="#">Add your establishment</FooterLink>
                </ListItem>
                <ListItem disablePadding>
                  <FooterLink href="#">Terms and Conditions</FooterLink>
                </ListItem>
                <ListItem disablePadding>
                  <FooterLink href="#">Privacy Policy</FooterLink>
                </ListItem>
              </List>
            </Stack>
          </Grid>

          <Grid
            container
            justifyContent="center"
            sx={{
              my: { xs: 0, sm: 0, md: 7 }
            }}
          >
            <Stack spacing={2}>
              <Typography variant="h3">Find your Service</Typography>
              <List sx={{ p: 0, display: 'flex', flexDirection: 'column', gap: 1 }}>
                <ListItem disablePadding>
                  <FooterLink href="https://mui.com/store/license/" target="_blank">
                    Hairdresser
                  </FooterLink>
                </ListItem>
                <ListItem disablePadding>
                  <FooterLink href="https://mui.com/store/customer-refund-policy/" target="_blank">
                    Barber
                  </FooterLink>
                </ListItem>
                <ListItem disablePadding>
                  <FooterLink href="#">Manicure</FooterLink>
                </ListItem>
                <ListItem disablePadding>
                  <FooterLink href="#">Massage</FooterLink>
                </ListItem>
              </List>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      <Box
        sx={{
          width: '100%',
          textAlign: 'center',
          py: 2,
          fontSize: 18,
          color: '#fff'
        }}
      >
        &copy; {new Date().getFullYear()} Saloony. All rights reserved.
      </Box>
    </Box>
  );
}
