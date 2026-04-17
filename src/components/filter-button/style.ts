import { SxProps, Theme } from '@mui/material';

// ==============================|| FILTER BUTTON STYLES ||============================== //

export const filterButtonSx: SxProps<Theme> = (theme) => ({
  borderRadius: '24px',
  border: `1px solid ${theme.palette.divider}`,
  px: 2,
  py: 0.75,
  gap: 1,
  textTransform: 'none',
  fontWeight: 500,
  color: theme.palette.text.primary,
  bgcolor: theme.palette.background.paper,
  '&:hover': {
    bgcolor: theme.palette.action.hover,
    borderColor: theme.palette.primary.main
  }
});

// ==============================|| FILTER MODAL STYLES ||============================== //

export const modalPaperSx: SxProps<Theme> = {
  borderRadius: 3,
  p: 0,
  width: { xs: '100%', sm: 420 },
  maxWidth: '100%'
};

export const modalHeaderSx: SxProps<Theme> = (theme) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  px: 3,
  py: 2,
  borderBottom: `1px solid ${theme.palette.divider}`
});

export const sectionLabelSx: SxProps<Theme> = {
  fontWeight: 600,
  mb: 1
};

export const modalFooterSx: SxProps<Theme> = (theme) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  px: 3,
  py: 2,
  borderTop: `1px solid ${theme.palette.divider}`
});

export const saveBtnSx: SxProps<Theme> = (theme) => ({
  borderRadius: '24px',
  px: 4,
  fontWeight: 600,
  textTransform: 'none',
  bgcolor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  '&:hover': { bgcolor: theme.palette.primary.dark }
});

export const resetBtnSx: SxProps<Theme> = {
  fontWeight: 500,
  textTransform: 'none',
  textDecoration: 'underline',
  p: 0,
  minWidth: 'unset',
  '&:hover': { bgcolor: 'transparent' }
};
