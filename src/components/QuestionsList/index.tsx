'use client';
import * as React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { CaretDownOutlined } from '@ant-design/icons';
import { faqData } from '@src/constants/faqData';
import { useTheme } from '@mui/material/styles';
import useQuestionsList from './useQuestionsList';
import { arrowsStyle } from '@src/styled/commonStyles';
import { faqTitleStyle, accordionStyle, accordionSummaryStyle, questionTextStyle, answerTextStyle } from './style';

const QuestionsList: React.FC = () => {
  const { expanded, handleChange } = useQuestionsList();
  const theme = useTheme();

  if (!faqData || faqData.length === 0) {
    return (
      <Box>
        <Typography variant="h3" sx={faqTitleStyle}>
          Frequently Asked Questions
        </Typography>
        <Typography variant="body2">No FAQs available.</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h3" sx={faqTitleStyle}>
        Frequently Asked Questions
      </Typography>

      {faqData.map((item) => (
        <Accordion key={item.id} expanded={expanded === `panel${item.id}`} onChange={handleChange(`panel${item.id}`)} sx={accordionStyle}>
          <AccordionSummary
            expandIcon={<CaretDownOutlined style={arrowsStyle(theme)} />}
            aria-controls={`panel${item.id}bh-content`}
            id={`panel${item.id}bh-header`}
            sx={accordionSummaryStyle(theme)}
          >
            <Typography variant="subtitle1" sx={questionTextStyle(theme)}>
              {item.question}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography variant="body2" sx={answerTextStyle(theme)}>
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default React.memo(QuestionsList);
