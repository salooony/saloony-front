export const animatedLinkStyle = (color?: string) => ({
  position: 'relative',
  fontWeight: 500,
  overflow: 'hidden',
  color: color ?? 'common.white',
  '&::after': {
    content: '""',
    position: 'absolute',
    left: '50%',
    bottom: 0,
    width: 0,
    height: '2px',
    backgroundColor: color ?? 'common.white',
    transform: 'translateX(-50%)',
    transition: 'width 0.3s ease'
  },
  '&:hover::after': {
    width: '100%'
  }
});
