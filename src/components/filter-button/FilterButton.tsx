'use client';

import { Button } from '@mui/material';
import { TbAdjustmentsHorizontal } from 'react-icons/tb';
import { useIntl } from 'react-intl';
import { filterButtonSx } from './style';

// ==============================|| FILTER BUTTON ||============================== //

interface FilterButtonProps {
  onClick: () => void;
}

export default function FilterButton({ onClick }: FilterButtonProps) {
  const intl = useIntl();

  return (
    <Button
      id="filter-button"
      aria-label={intl.formatMessage({ id: 'filter.button' })}
      onClick={onClick}
      startIcon={<TbAdjustmentsHorizontal size={18} />}
      sx={filterButtonSx}
      disableRipple={false}
    >
      {intl.formatMessage({ id: 'filter.button' })}
    </Button>
  );
}
