import React from 'react';
import NextLink from 'next/link';
import { Link, LinkProps } from '@mui/material';
import { animatedLinkStyle } from './style';

interface AnimatedLinkProps extends LinkProps {
  href: string;
  target?: string;
  darkLink?: boolean;
  children: React.ReactNode;
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({ href, target = '_self', children, darkLink, ...props }) => {
  const linkColor = darkLink ? 'common.black' : 'common.white';

  return (
    <Link component={NextLink} href={href} target={target} underline="none" sx={animatedLinkStyle(linkColor)} {...props}>
      {children}
    </Link>
  );
};

export default AnimatedLink;
