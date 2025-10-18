'use client';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { motion } from 'framer-motion';

import FacebookFilled from '@ant-design/icons/FacebookFilled';
import InstagramFilled from '@ant-design/icons/InstagramFilled';

import Logo from '@components/logo';
import { FooterLink, linkSX } from './styles';
import { frameworks } from './content';

export default function FooterBlock() {
  return (
    <Box sx={{ pt: 10, pb: 10, bgcolor: 'grey.A700' }}>
      <Container>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, translateY: 550 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                type: 'spring',
                stiffness: 150,
                damping: 30
              }}
            >
              <Grid container display={'flex'} justifyContent={'center'}>
                <Grid size={7} display={'flex'} justifyContent={'center'}>
                  <Logo sx={{ width: 'auto' }} to="/" />
                </Grid>
                <Grid size={7} display={'flex'} justifyContent={'center'}>
                  <Link href="https://www.facebook.com/codedthemes/" underline="none" target="_blank" sx={linkSX}>
                    <FacebookFilled />
                  </Link>
                  <Link href="https://www.instagram.com/codedthemes" underline="none" target="_blank" sx={linkSX}>
                    <InstagramFilled />
                  </Link>
                </Grid>
              </Grid>
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <Grid container spacing={{ xs: 5, md: 2 }}>
              <Grid size={{ xs: 6, sm: 3 }}>
                <Stack sx={{ gap: { xs: 3, md: 5 } }}>
                  <Typography
                    variant="h5"
                    sx={(theme) => ({
                      fontWeight: 500,
                      color: 'background.paper',
                      ...theme.applyStyles('dark', { color: 'text.primary' })
                    })}
                  >
                    À propos de Saloony
                  </Typography>
                  <Stack sx={{ gap: { xs: 1.5, md: 2.5 } }}>
                    <FooterLink href="https://blog.codedthemes.com/" target="_blank" underline="none">
                      Je suis un professionnel de beauté
                    </FooterLink>
                    <FooterLink href="https://codedthemes.gitbook.io/mantis/" target="_blank" underline="none">
                      Rejoignez-nous
                    </FooterLink>
                  </Stack>
                </Stack>
              </Grid>
              <Grid size={{ xs: 6, sm: 3 }}>
                <Stack sx={{ gap: { xs: 3, md: 5 } }}>
                  <Typography
                    variant="h5"
                    sx={(theme) => ({
                      fontWeight: 500,
                      color: 'background.paper',
                      ...theme.applyStyles('dark', { color: 'text.primary' })
                    })}
                  >
                    Trouvez votre prestation
                  </Typography>
                  <Stack sx={{ gap: { xs: 1.5, md: 2.5 } }}>
                    <FooterLink href="https://mui.com/store/license/" target="_blank" underline="none">
                      Coiffeur
                    </FooterLink>
                    <FooterLink href="https://mui.com/store/customer-refund-policy/" target="_blank" underline="none">
                      Barbier
                    </FooterLink>
                  </Stack>
                </Stack>
              </Grid>
              <Grid size={{ xs: 6, sm: 3 }}>
                <Stack sx={{ gap: { xs: 3, md: 5 } }}>
                  <Typography
                    variant="h5"
                    sx={(theme) => ({
                      fontWeight: 500,
                      color: 'background.paper',
                      ...theme.applyStyles('dark', { color: 'text.primary' })
                    })}
                  >
                    Recherches fréquentes
                  </Typography>
                  <Stack sx={{ gap: { xs: 1.5, md: 2.5 } }}>
                    {frameworks.map((item) => (
                      <FooterLink href={item.link} target="_blank" underline="none" key={item.link}>
                        {item.title}
                      </FooterLink>
                    ))}
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
