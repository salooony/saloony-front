import { Box, Typography } from '@mui/material';
import scissorsImage from '@public/assets/images/home/scissors.png';
import aboutImage from '@public/assets/images/home/about.png';
import Image from 'next/image';
import JustifiedTextWithLine from '../@extended/justified-text-with-line';
import { useTheme } from '@mui/material/styles';
import { sectionBoxStyle } from '@src/styled/commonStyles';


export default function About() {
  const theme = useTheme();
  return( 
    <Box>
      <Box sx={sectionBoxStyle}>
        <JustifiedTextWithLine>About Saloony</JustifiedTextWithLine>
        <Image src={scissorsImage} alt="service" height={40} width={40}/>
      </Box>
      <Box sx={{ display: 'flex', gap: 4, alignItems: 'center', flexDirection: { xs: 'column', sm: 'column', md: 'row' } }}>
        <Image src={aboutImage} alt="About Saloony" height={430} width={370} style={{ maxWidth: '370px', width: '100%', height: 'auto' }} />
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: theme.typography.h4.fontSize, md: theme.typography.h3.fontSize }, textAlign: 'justify' }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui um.qui
          officia deserunt est laborum.
        </Typography>
      </Box>
    </Box>
  );
}
