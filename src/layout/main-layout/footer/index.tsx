'use client';

import { Box, Grid, Link, Stack, List, ListItem, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons';
import Logo from '@components/logo';

import {
  centerBoxStyle,
  FooterLink,
  socialIconStyle,
  linkSX,
  footerContainerStyle,
  footerGridStyle,
  footerColumnStyle,
  footerTextStyle,
  footerListsStyle
} from './style';

export default function FooterBlock() {

  return (
    <Box sx={footerContainerStyle}>
      <Grid container spacing={4} sx={footerGridStyle}>
        <Grid>
          <motion.div
            initial={{ opacity: 0, translateY: 550 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'spring', stiffness: 150, damping: 30 }}
          >
            <Grid container sx={centerBoxStyle}>
              <Logo sx={{ width: 'auto' }} to="/" />
              <Grid sx={socialIconStyle}>
                <Link href="https://www.facebook.com/codedthemes/" underline="none" target="_blank" sx={linkSX}>
                  <FacebookOutlined />
                </Link>
                <Link href="https://www.instagram.com/codedthemes" underline="none" target="_blank" sx={linkSX}>
                  <InstagramOutlined />
                </Link>
              </Grid>
            </Grid>
          </motion.div>
        </Grid>

        <Grid container justifyContent="space-evenly" width={{ xs: '100%', sm: '100%', md: '70%' }}>
          <Grid container sx={footerColumnStyle}>
            <Stack spacing={2}>
              <Typography variant="h3"> About Saloony</Typography>
              <List sx={footerListsStyle}>
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

          <Grid container sx={footerColumnStyle}>
            <Stack spacing={2}>
              <Typography variant="h3">Find your Service</Typography>
              <List sx={footerListsStyle}>
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

      <Box sx={footerTextStyle}>&copy; {new Date().getFullYear()} Saloony. All rights reserved.</Box>
    </Box>
  );
}
