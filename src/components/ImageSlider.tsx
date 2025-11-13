'use client';

import { useState, useEffect } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import massageImage from '@public/assets/images/services/massage.jpg';
import barberImage from '@public/assets/images/services/barber.jpg';
import manicureImage from '@public/assets/images/services/manicure.jpg';
import hairdresserImage from '@public/assets/images/services/hairdresser.jpg';
import Image from 'next/image';

interface SliderItem {
  key: number;
  title: string;
  src: any;
  paragraph: string;
}

const sliderImages: SliderItem[] = [
  {
    key: 1,
    title: 'Hairdresser',
    src: hairdresserImage,
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consequat. Duis aute irure dolor in reprehenderit in voluptate cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui um.qui officia deserunt est laborum.'
  },
  {
    key: 2,
    title: 'Massage',
    src: massageImage,
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consequat. Duis aute irure dolor in reprehenderit in voluptate cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui um.qui officia deserunt est laborum.'
  },
  {
    key: 3,
    title: 'Manicure',
    src: manicureImage,
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consequat. Duis aute irure dolor in reprehenderit in voluptate cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui um.qui officia deserunt est laborum.'
  },
  {
    key: 4,
    title: 'Barber',
    src: barberImage,
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consequat. Duis aute irure dolor in reprehenderit in voluptate cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui um.qui officia deserunt est laborum.'
  }
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
    setProgress(0);
  };

  // Auto-slide
  useEffect(() => {
    if (!isAutoPlaying) return;

    const intervalTime = 5000;
    const steps = 100; // 100
    const stepTime = intervalTime / steps;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + 1;
      });
    }, stepTime);

    return () => clearInterval(progressInterval);
  }, [currentIndex, isAutoPlaying]);

  const currentItem = sliderImages[currentIndex];

  const handleManualNavigation = (navigationFunction: () => void) => {
    setIsAutoPlaying(false);
    navigationFunction();
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          gap: 4,
          alignItems: 'center',
          flexDirection: { xs: 'column', sm: 'column', md: 'row' }
        }}
      >
        <Image
          src={currentItem.src}
          alt={currentItem.title}
          height={430}
          width={370}
          style={{
            maxWidth: '350px',
            width: '100%',
            height: '350px',
            objectFit: 'cover',
            borderRadius: '0'
          }}
        />
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            // 'row-gap' أو 'gap' تعمل في Flexbox لتحديد المسافة بين العناصر الفرعية
            gap: 3
          }}
        >
          <Typography
            variant="h2"
            sx={{
              position: 'relative',
              textAlign: 'center',
              display: 'inline-block',
              mx: 'auto',
              '&::after': {
                content: '""',
                position: 'absolute',
                left: '50%',
                bottom: -8,
                transform: 'translateX(-50%)',
                width: '60px',
                height: '4px',
                backgroundColor: '#8D5FAC',
                borderRadius: '2px'
              }
            }}
          >
            {currentItem.title}
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: 20, md: 25 }, textAlign: 'justify' }}>
            {currentItem.paragraph}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 4,
          mt: 4
        }}
      >
        <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <IconButton
            onClick={() => handleManualNavigation(prevSlide)}
            sx={{
              width: 50,
              height: 50,
              bgcolor: 'white',
              boxShadow: 3,
              position: 'relative',
              zIndex: 2,
              borderRadius: '50%',
              transition: 'all 0.3s ease'
            }}
          >
            <LeftOutlined style={{ color: '#877754', fontSize: '20px' }} />
          </IconButton>
        </Box>

        <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box
            sx={{
              position: 'absolute',
              width: 52,
              height: 52,
              borderRadius: '50%',
              background: `conic-gradient( #877754 ${progress * 3.6}deg, #f0f0f0 0deg)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '&::before': {
                content: '""',
                position: 'absolute',
                width: 50,
                height: 50,
                borderRadius: '50%',
                backgroundColor: 'white'
              }
            }}
          />
          <IconButton
            onClick={() => handleManualNavigation(nextSlide)}
            sx={{
              width: 50,
              height: 50,
              bgcolor: 'white',
              boxShadow: 3,
              position: 'relative',
              zIndex: 2,
              borderRadius: '50%',
              transition: 'all 0.3s ease'
            }}
          >
            <RightOutlined style={{ color: '#877754', fontSize: '20px' }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
