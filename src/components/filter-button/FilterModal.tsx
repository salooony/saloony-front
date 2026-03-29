'use client';

import { useState, useEffect } from 'react';

import { Dialog, DialogContent, Box, Typography, RadioGroup, FormControlLabel, Radio, Button, IconButton, Divider } from '@mui/material';
import { FiX } from 'react-icons/fi';
import { useIntl } from 'react-intl';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import useConfig from 'hooks/useConfig';
import { ThemeDirection } from '@src/config';
import { AvailabilityOption, FilterState, SortOption } from '@src/types/filter';
import { modalPaperSx, modalHeaderSx, sectionLabelSx, modalFooterSx, saveBtnSx, resetBtnSx } from './style';

// ==============================|| CONSTANTS & TYPES ||============================== //

/**
 * Strict literal typing. Uses `null` over `''` to explicitly represent an empty state.
 */
export type ErrorType = 'PICK_DATE_REQUIRED' | null;

/**
 * Extracted outside component to prevent memory reallocation on re-renders.
 */
const AVAILABILITY_OPTIONS = [
  { value: AvailabilityOption.ANY, id: 'filter.availability.any' },
  { value: AvailabilityOption.TODAY, id: 'filter.availability.today' },
  { value: AvailabilityOption.TOMORROW, id: 'filter.availability.tomorrow' },
  { value: AvailabilityOption.PICK, id: 'filter.availability.pick' }
];

const SORT_OPTIONS = [
  { value: SortOption.NONE, id: 'filter.sort.none' },
  { value: SortOption.TOP_RATED, id: 'filter.sort.topRated' },
  { value: SortOption.PRICE_DESC, id: 'filter.sort.priceDesc' },
  { value: SortOption.PRICE_ASC, id: 'filter.sort.priceAsc' }
];

// ==============================|| FILTER MODAL ||============================== //

interface FilterModalProps {
  open: boolean;
  draft: FilterState;
  onClose: () => void;
  onAvailabilityChange: (value: AvailabilityOption) => void;
  onSortChange: (value: SortOption) => void;
  onDateChange: (isoDate: string | null) => void;
  onReset: () => void;
  onSave: () => void;
}

export default function FilterModal({
  open,
  draft,
  onClose,
  onAvailabilityChange,
  onSortChange,
  onDateChange,
  onReset,
  onSave
}: FilterModalProps) {
  const intl = useIntl();
  const { themeDirection } = useConfig();
  const isRtl = themeDirection === ThemeDirection.RTL;

  const [error, setError] = useState<ErrorType>(null);

  /**
   * Clears validation error immediately when the user interacts with the draft state.
   */
  useEffect(() => {
    setError(null);
  }, [draft]);

  const onSaveClick = () => {
    if (draft.availability === AvailabilityOption.PICK && !draft.pickedDate) {
      setError('PICK_DATE_REQUIRED');
      return;
    }
    setError(null);
    onSave();
  };

  const handleClose = () => {
    setError(null);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="filter-modal-title"
      PaperProps={{ sx: modalPaperSx }}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* ── Header ── */}
      <Box sx={modalHeaderSx}>
        <Typography id="filter-modal-title" variant="h6" fontWeight={600}>
          {intl.formatMessage({ id: 'filter.title' })}
        </Typography>
        <IconButton aria-label="close filter modal" onClick={handleClose} size="small" id="filter-modal-close">
          <FiX size={20} />
        </IconButton>
      </Box>

      {/* ── Body ── */}
      <DialogContent sx={{ px: 3, py: 2 }}>
        {/* Availability */}
        <Typography variant="subtitle1" sx={sectionLabelSx}>
          {intl.formatMessage({ id: 'filter.availability' })}
        </Typography>

        <RadioGroup
          aria-label={intl.formatMessage({ id: 'filter.availability' })}
          value={draft.availability}
          onChange={(e) => onAvailabilityChange(e.target.value as AvailabilityOption)}
        >
          {AVAILABILITY_OPTIONS.map(({ value, id }) => (
            <FormControlLabel
              key={value}
              value={value}
              control={<Radio id={`availability-${value}`} size="small" />}
              label={intl.formatMessage({ id })}
            />
          ))}
        </RadioGroup>

        {/* Date Picker — shown only when 'pick' is selected */}
        {draft.availability === AvailabilityOption.PICK && (
          <Box mt={1} mb={2}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label={intl.formatMessage({ id: 'filter.availability.pick' })}
                value={draft.pickedDate ? dayjs(draft.pickedDate) : null}
                onChange={(date) => {
                  setError(null);
                  onDateChange(date ? date.toISOString() : null);
                }}
                disablePast
                slotProps={{
                  textField: {
                    fullWidth: true,
                    size: 'small',
                    id: 'filter-date-picker'
                  }
                }}
              />
            </LocalizationProvider>
            {error === 'PICK_DATE_REQUIRED' && (
              <Typography color="error" variant="caption" sx={{ mt: 1, display: 'block' }}>
                {intl.formatMessage({ id: 'filter.error.pickDate', defaultMessage: 'Veuillez sélectionner une date' })}
              </Typography>
            )}
          </Box>
        )}

        <Divider sx={{ my: 2 }} />

        {/* Sort */}
        <Typography variant="subtitle1" sx={sectionLabelSx}>
          {intl.formatMessage({ id: 'filter.sort' })}
        </Typography>

        <RadioGroup
          aria-label={intl.formatMessage({ id: 'filter.sort' })}
          value={draft.sortBy}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
        >
          {SORT_OPTIONS.map(({ value, id }) => (
            <FormControlLabel
              key={value}
              value={value}
              control={<Radio id={`sort-${value}`} size="small" />}
              label={intl.formatMessage({ id })}
            />
          ))}
        </RadioGroup>
      </DialogContent>

      {/* ── Footer ── */}
      <Box sx={modalFooterSx}>
        <Button
          id="filter-reset-button"
          variant="text"
          color="inherit"
          sx={resetBtnSx}
          onClick={() => {
            setError(null);
            onReset();
          }}
        >
          {intl.formatMessage({ id: 'filter.reset' })}
        </Button>

        <Button id="filter-save-button" variant="contained" disableElevation sx={saveBtnSx} onClick={onSaveClick}>
          {intl.formatMessage({ id: 'filter.save' })}
        </Button>
      </Box>
    </Dialog>
  );
}
