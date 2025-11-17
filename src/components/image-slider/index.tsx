'use client';

import { Box, Typography, IconButton } from '@mui/material';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';
import useImageSlider from './useImageSlider';
import { arrowsStyle } from '@src/styled/commonStyles';
import {
  imageSliderBoxStyle,
  slideLoaderStyle,
  navigationContainerStyle,
  navButtonStyle,
  iconWrapperStyle,
  titleStyle,
  paragraphStyle,
  imageStyle
} from './style';

export default function ImageSlider() {
  const { currentItem, progress, nextSlide, prevSlide, handleManualNavigation } = useImageSlider();
  const theme = useTheme();

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <Box sx={imageSliderBoxStyle}>
        <Image src={currentItem.src} alt={currentItem.title} height={430} width={370} style={imageStyle} />

        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Typography variant="h2" sx={titleStyle(theme)}>
            {currentItem.title}
          </Typography>
          <Typography variant="body1" sx={paragraphStyle}>
            {currentItem.paragraph}
          </Typography>
        </Box>
      </Box>

      <Box sx={navigationContainerStyle}>
        <Box sx={iconWrapperStyle}>
          <IconButton onClick={() => handleManualNavigation(prevSlide)} sx={navButtonStyle}>
            <LeftOutlined style={arrowsStyle(theme)} />
          </IconButton>
        </Box>

        <Box sx={iconWrapperStyle}>
          <Box sx={slideLoaderStyle(theme, progress)} />
          <IconButton onClick={() => handleManualNavigation(nextSlide)} sx={navButtonStyle}>
            <RightOutlined style={arrowsStyle(theme)} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
