import React from 'react';
import NextLink from 'next/link';
import { Link, LinkProps } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { animatedLinkStyle } from './style';

interface AnimatedLinkProps extends LinkProps {
  href: string;
  target?: string;
  children: React.ReactNode;
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({ href, target = '_self', children, ...props }) => {
  const theme = useTheme();
  return (
    <Link component={NextLink} href={href} target={target} underline="none" sx={animatedLinkStyle(theme)} {...props}>
      {children}
    </Link>
  );
};

export default AnimatedLink;
