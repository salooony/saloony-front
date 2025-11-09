import Hero from 'sections/hero';
import MainLayout from '@src/layout/main-layout';

const HomePage = () => {
  return (
    <MainLayout variant="home">
      <Hero />
    </MainLayout>
  );
};

export default HomePage;
