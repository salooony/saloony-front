import { JSX, useState } from 'react';
import { Box, Modal, IconButton, Typography, Divider } from '@mui/material';
import { FiX } from 'react-icons/fi';
import QueryField from './QueryField';
import LocationField from './LocationField';
import SearchButton from './SearchButton';
import { SearchOverlayModalProps } from '@src/types/searchOverlayModal';
import { useTheme } from '@mui/material/styles';
import { centerModal, FiXStyle, modalBoxStyle, smallSearchBoxStyle } from './style';

export default function SearchOverlayModal(props: SearchOverlayModalProps): JSX.Element {
  const theme = useTheme();
  const {
    open,
    onClose,
    query,
    setQuery,
    location,
    setLocation,
    focusedInput,
    setFocusedInput,
    suggestions,
    isLoading,
    highlightedIndex,
    handleKeyDown,
    handleSearch,
    isSearchDisabled
  } = props;

  const [activeField, setActiveField] = useState<'query' | 'location'>('query');

  return (
    <Modal open={open} onClose={onClose} closeAfterTransition disableEnforceFocus sx={centerModal} BackdropProps={{ onClick: onClose }}>
      <Box onClick={(e) => e.stopPropagation()} sx={modalBoxStyle(theme)}>
        <IconButton
          onClick={() => {
            onClose();
            setActiveField('query');
            setQuery('');
            setLocation(null);
          }}
          sx={FiXStyle}
        >
          <FiX size={30} />
        </IconButton>

        <Typography variant="h4" fontWeight={600} py={2} textAlign="center" bgcolor={theme.palette.common.white}>
          Search
        </Typography>

        <Divider />

        <Box sx={smallSearchBoxStyle}>
          {activeField === 'query' ? (
            <QueryField
              query={query}
              setQuery={setQuery}
              focusedInput={focusedInput}
              setFocusedInput={setFocusedInput}
              suggestions={suggestions}
              isLoading={isLoading}
              highlightedIndex={highlightedIndex}
              handleKeyDown={handleKeyDown}
              readOnly={false}
              disableFocusStyle
              onSelectQuery={() => setActiveField('location')}
            />
          ) : (
            <LocationField
              location={location}
              setLocation={setLocation}
              focusedInput={focusedInput}
              setFocusedInput={setFocusedInput}
              suggestions={suggestions}
              isLoading={isLoading}
              highlightedIndex={highlightedIndex}
              handleKeyDown={handleKeyDown}
              disableFocusStyle
            />
          )}
          <SearchButton onClick={handleSearch} disabled={isSearchDisabled} size={20} />
        </Box>
      </Box>
    </Modal>
  );
}
