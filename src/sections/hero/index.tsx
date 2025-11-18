'use client';

import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import SearchBar from '@components/inputs/search-bar';
import heroBg from '@public/assets/images/home/hero.jpg';
import About from '@src/components/about';
import Services from '@src/components/services';
import Questions from '@src/components/questions';
import { heroBgStyle, heroContainerStyle, heroContentStyle, heroTitleStyle, heroSubtitleStyle, contentSectionStyle } from './style';
import { MainLayoutType } from '@src/config';

export default function Hero({ variant }: { readonly variant?: MainLayoutType }) {

  return (
    <>
      <Box sx={heroContainerStyle}>
        <Image src={heroBg} alt="Saloony hero" priority fill style={heroBgStyle} />

        <Container maxWidth="lg" sx={heroContentStyle}>
          <Typography variant="h1" align="center" color="text.tertiary" sx={heroTitleStyle}>
            Welcome To Saloony
          </Typography>

          <Typography variant="subtitle1" align="center" color="text.tertiary" sx={heroSubtitleStyle}>
            Search for Barber Shop
          </Typography>

          <SearchBar variant={variant} enableExpand={false}/>
        </Container>
      </Box>

      <Box sx={contentSectionStyle}>
        <About />
        <Services />
        <Questions />
      </Box>
    </>
  );
}
