// components/AuthLogin/index.tsx
'use client';

import * as React from 'react';
import { Box, Divider, Link, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// import styles
import { rootBoxStyle, buttonsWrapStyle, socialLinkStyle, iconBoxStyle, iconStyle, textStyle, dividerStyle } from './style';
import { items } from '@src/constant';

export default function SociaLink() {
  const theme = useTheme();

  return (
    <Box sx={rootBoxStyle}>
      <Divider sx={dividerStyle}>OR</Divider>

      <Box sx={buttonsWrapStyle}>
        {items.map(({ key, label, Icon, onClick }) => (
          <Link key={key} onClick={onClick} role="button" aria-label={label} sx={socialLinkStyle(theme)}>
            <Box sx={iconBoxStyle}>
              <Icon sx={iconStyle(theme)} />
            </Box>
            <Typography sx={textStyle}>{label}</Typography>
          </Link>
        ))}
      </Box>
    </Box>
  );
}
