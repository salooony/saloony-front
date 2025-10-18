import { Box } from '@mui/material';
import Image from 'next/image';
import serviceImage from '@public/assets/images/home/services.png';
import JustifiedTextWithLine from '../@extended/JustifiedTextWithLine'; 
import ImageSlider from 'components/ImageSlider';

export default function Services() {
  return( 
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: { xs: 'center', sm: 'center', md: 'flex-start' },
          gap: 4,
          mb: 4
        }}
      >
        <JustifiedTextWithLine lineWidth="35px">Main Services</JustifiedTextWithLine>
        <Image src={serviceImage} alt="service" height={40} width={40}/>
      </Box>
      <ImageSlider />
    </Box>
  );
}
