import { Box, Typography } from '@mui/material';
import scissorsImage from '@public/assets/images/home/scissors.png';
import aboutImage from '@public/assets/images/home/about.png';
import Image from 'next/image';
import JustifiedTextWithLine from '../@extended/JustifiedTextWithLine';


export default function About() {
  return( 
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', sm: 'center', md: 'flex-start' }, gap: 4, mb: 4 }}>
        <JustifiedTextWithLine lineWidth="35px">About Saloony</JustifiedTextWithLine>
        <Image src={scissorsImage} alt="service" height={40} width={40}/>
      </Box>
      <Box sx={{ display: 'flex', gap: 4, alignItems: 'center', flexDirection: { xs: 'column', sm: 'column', md: 'row' } }}>
        <Image src={aboutImage} alt="About Saloony" height={430} width={370} style={{ maxWidth: '370px', width: '100%', height: 'auto' }} />
        <Typography variant="body1" sx={{ fontSize: { xs: 20, md: 25 }, textAlign: 'justify' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui um.qui
          officia deserunt est laborum.
        </Typography>
      </Box>
    </Box>
  );
}
