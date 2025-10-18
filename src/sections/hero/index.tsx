import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import SearchBar from '@components/inputs/search-bar';
import heroBg from '@public/assets/images/home/hero.jpg';

const Hero: React.FC = () => {
  return (
    <Box width={'100vw'} height={'100vh'} position={'relative'}>
      <Image src={heroBg} alt="Saloony hero" priority fill style={{ objectFit: 'cover', objectPosition: 'center 40%', zIndex: -1 }} />
      <Container
        maxWidth="lg"
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          pt: 15,
          position: 'relative',
          zIndex: 1
        }}
      >
        <Typography variant="h1" align="center" color="text.tertiary">
          Welcome To Saloony
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.tertiary">
          Search for Barber Shop
        </Typography>
        <SearchBar />
      </Container>
    </Box>
  );
};
export default Hero;
