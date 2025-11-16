'use client';

import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import SearchBar from '@components/inputs/search-bar';
import heroBg from '@public/assets/images/home/hero.jpg';
import About from '@src/components/about';
import Services from '@src/components/services';
import Questions from '@src/components/questions';
import { useTheme } from '@mui/material/styles';
import { heroBgStyle, heroContainerStyle, heroContentStyle, heroTitleStyle, heroSubtitleStyle, contentSectionStyle } from './style';
import { MainLayoutType } from '@src/config';

export default function Hero({ variant }: { variant?: MainLayoutType }) {
  const theme = useTheme();

  return (
    <>
      <Box sx={heroContainerStyle}>
        <Image src={heroBg} alt="Saloony hero" priority fill style={heroBgStyle} />

        <Container maxWidth="lg" sx={heroContentStyle}>
          <Typography variant="h1" align="center" color="text.tertiary" sx={heroTitleStyle(theme)}>
            Welcome To Saloony
          </Typography>

          <Typography variant="subtitle1" align="center" color="text.tertiary" sx={heroSubtitleStyle(theme)}>
            Search for Barber Shop
          </Typography>

          <SearchBar variant={variant}/>
        </Container>
      </Box>

      <Box sx={contentSectionStyle(theme)}>
        <About />
        <Services />
        <Questions />
      </Box>
    </>
  );
}
