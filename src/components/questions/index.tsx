import { Box } from '@mui/material';
import questionsImage from '@public/assets/images/home/question.png';
import Image from 'next/image';
import JustifiedTextWithLine from '../@extended/justified-text-with-line';
import QuestionsList from '../QuestionsList';
import { sectionBoxStyle } from '@src/styled/commonStyles';

export default function Questions() {
  return (
    <Box>
      <Box sx={sectionBoxStyle}>
        <JustifiedTextWithLine>Q&A</JustifiedTextWithLine>
        <Image src={questionsImage} alt="service" height={40} width={40} />
      </Box>
      <QuestionsList />
    </Box>
  );
}
