import { ReactNode } from 'react';
import { Card, CardContent, CardMedia, SxProps, Theme } from '@mui/material';
import { motion } from 'framer-motion';

interface AnimatedCardProps {
  readonly image: string;
  readonly alt?: string;
  readonly sx?: SxProps<Theme>;
  readonly children: ReactNode;
}

export default function AnimatedCard({ image, alt, sx, children }: AnimatedCardProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} whileHover={{ scale: 1.03 }}>
      <Card sx={{ borderRadius: 8, boxShadow: 3, minHeight: '300px', overflow: 'hidden', ...sx }}>
        <CardMedia component="img" height="220" image={image} alt={alt} />
        <CardContent>{children}</CardContent>
      </Card>
    </motion.div>
  );
}
