'use client';

import { useState, useEffect } from 'react';
import { sliderImages } from '../../constants/sliderImages';

export default function useImageSlider() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
    setProgress(0);
  };

  const handleManualNavigation = (fn: () => void) => {
    setIsAutoPlaying(false);
    fn();
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const intervalTime = 5000;
    const steps = 100;
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

  return {
    currentItem,
    progress,
    nextSlide,
    prevSlide,
    handleManualNavigation
  };
}
