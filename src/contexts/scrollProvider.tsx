'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ScrollContextType {
  scrolled: boolean;
}

const ScrollContext = createContext<ScrollContextType>({ scrolled: false });

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <ScrollContext.Provider value={{ scrolled }}>{children}</ScrollContext.Provider>;
};

export const useScroll = () => useContext(ScrollContext);
