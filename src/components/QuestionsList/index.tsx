'use client';
import * as React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { CaretDownOutlined } from '@ant-design/icons';
import { faqData } from '@src/constants/faqData';
import { useTheme } from '@mui/material/styles';
import useQuestionsList from './useQuestionsList';
import { arrowsStyle } from '@src/styled/commonStyles';
import { faqTitleStyle, accordionStyle, accordionSummaryStyle } from './style';

export default function QuestionsList() {
  const { expanded, handleChange } = useQuestionsList();
  const theme = useTheme();

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
            <Typography variant="h5">{item.question}</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography variant="h6" color={'primary.main'}>
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
