import React from 'react';
import NextLink from 'next/link';
import { Link, LinkProps } from '@mui/material';

interface AnimatedLinkProps extends LinkProps {
  href: string;
  target?: string;
  color?: string;
  children: React.ReactNode;
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({ href, target = '_self', color = 'white', children, ...props }) => {
  return (
    <Link
      component={NextLink}
      href={href}
      target={target}
      underline="none"
      sx={{
        position: 'relative',
        color,
        fontWeight: 500,
        overflow: 'hidden',
        '&::after': {
          content: '""',
          position: 'absolute',
          left: '50%',
          bottom: 0,
          width: 0,
          height: '2px',
          bgcolor: color,
          transform: 'translateX(-50%)',
          transition: 'width 0.3s ease'
        },
        '&:hover::after': {
          width: '100%'
        }
      }}
      {...props}
    >
      {children}
    </Link>
  );
};

export default AnimatedLink;
