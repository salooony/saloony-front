import { Box } from '@mui/material';
import Image from 'next/image';
import serviceImage from '@public/assets/images/home/services.png';
import JustifiedTextWithLine from '../@extended/justified-text-with-line';
import ImageSlider from '@src/components/image-slider';
import { sectionBoxStyle } from '@src/styled/commonStyles';

export default function Services() {
  return (
    <Box>
      <Box sx={sectionBoxStyle}>
        <JustifiedTextWithLine>Main Services</JustifiedTextWithLine>
        <Image src={serviceImage} alt="service" height={40} width={40} />
      </Box>
      <ImageSlider />
    </Box>
  );
}
