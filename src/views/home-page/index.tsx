import Hero from 'sections/hero';
import MainLayout from '@src/layout/main-layout';
import { MainLayoutType } from '@src/config';

const HomePage = () => {
  return (
    <MainLayout variant={MainLayoutType.HOME}>
      <Hero variant={MainLayoutType.HOME} />
    </MainLayout>
  );
};

export default HomePage;
