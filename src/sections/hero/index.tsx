import { Box, Container, Typography  } from '@mui/material';
import Image from 'next/image';
import SearchBar from '@components/inputs/search-bar';
import heroBg from '@public/assets/images/home/hero.jpg';
import About from '@src/components/about';
import Services from '@src/components/services';
import Questions from '@src/components/questions';
export default function Hero() {
  return (
    <>
      <Box height={'85vh'} sx={{ py: { xs: 4, sm: 6, md: 10 }, mt: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image src={heroBg} alt="Saloony hero" priority fill style={{ objectFit: 'cover', objectPosition: 'center 40%', zIndex: -1 }} />
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            position: 'relative',
            zIndex: 1
          }}
        >
          <Typography 
            variant="h1" 
            align="center" 
            color="text.tertiary"
            sx={{
              fontSize: {
                xs: '1.5rem',
                sm: '2rem',
                md: '2.5rem',
                lg: '3rem',
                xl: '3.5rem'
              },
              lineHeight: 1.2
            }}
          >
            Welcome To Saloony
          </Typography>
          <Typography 
            variant="subtitle1" 
            align="center" 
            color="text.tertiary"
            sx={{
              fontSize: {
                sm: '1rem',
                md: '1.5rem',
                lg: '2rem',
                xl: '2.5rem'
              },
              lineHeight: 1.2
            }}
            >
            Search for Barber Shop
          </Typography>
          <SearchBar />
        </Container>
      </Box>
      <Box
        sx={{
          bgcolor: '#FCF7F3',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 20,
          p: 10
        }}
      >
        <About />
        <Services />
        <Questions />
      </Box>
    </>
  );
};

