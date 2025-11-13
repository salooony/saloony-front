'use client';
import * as React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { CaretDownOutlined } from '@ant-design/icons';
import { SyntheticEvent, useState } from 'react';

const faqData = [
  {
    id: 1,
    question: 'How to make an appointment on Saloony?',
    answer:
      'You can easily book an appointment by selecting the desired service, choosing your preferred salon or barber, and picking an available time slot through our user-friendly interface. A confirmation will be sent to your registered email and mobile number.'
  },
  {
    id: 2,
    question: 'Do I have to pay online on Saloony?',
    answer:
      'No, while online payment is an option for convenience, most of our partners also accept payment directly at the salon after the service is complete. Payment methods are clearly listed during the booking process.'
  },
  {
    id: 3,
    question: 'How do I manage my appointments on Saloony?',
    answer:
      'Go to your "My Appointments" section in the user dashboard. From there, you can view all your upcoming bookings and have the option to reschedule or cancel them up to 24 hours before the scheduled time.'
  },
  {
    id: 4,
    question: 'How do I list my saloon on Saloony?',
    answer:
      'If you are a professional, please click on the "I Am A Beauty Professional" link in the header and follow the steps to register your business and begin listing your services with us.'
  }
];

export default function QuestionsList() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box>
      <Typography variant="h3" sx={{ textAlign: 'center', mb: 2 }}>
        Frequently Asked Questions
      </Typography>
      {faqData.map((item) => (
        <Accordion
          key={item.id}
          expanded={expanded === `panel${item.id}`}
          onChange={handleChange(`panel${item.id}`)}
          sx={{
            boxShadow: 'none',
            border: 'none'
          }}
        >
          <AccordionSummary
            expandIcon={<CaretDownOutlined style={{ fontSize: 20, marginLeft: 8, color: '#AC8D5F' }} />}
            aria-controls={`panel${item.id}bh-content`}
            id={`panel${item.id}bh-header`}
            sx={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: '#FCF7F3',
              borderTop: '1px solid #AC8D5F',
              py: 2
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 'medium', fontSize: 18 }}>
              {item.question}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography variant="body2" sx={{ color: '#AC8D5F', pl: 2, fontSize: 16 }}>
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
