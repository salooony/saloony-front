import { Box } from '@mui/material';
import questionsImage from '@public/assets/images/home/question.png';
import Image from 'next/image';
import JustifiedTextWithLine from '../@extended/JustifiedTextWithLine';
import QuestionsList from '../QuestionsList';


export default function Questions() {
  return( 
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', sm: 'center', md: 'flex-start' }, gap: 4, mb: 4 }}>
        <JustifiedTextWithLine lineWidth="35px">Q&A</JustifiedTextWithLine>
        <Image src={questionsImage} alt="service" height={40} width={40}/>
      </Box>
      <QuestionsList />
    </Box>
  );
}