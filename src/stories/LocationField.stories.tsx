import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import Box from '@mui/material/Box';

import LocationField from 'components/inputs/search-bar/LocationField';
import { SearchField } from '@src/types/searchField';

const suggestions = [
  { id: 1, name: 'Amman, Jordan' },
  { id: 2, name: 'Dubai, UAE' },
  { id: 3, name: 'Riyadh, Saudi Arabia' }
];

const meta: Meta<typeof LocationField> = {
  title: 'Components/LocationField',
  component: LocationField,
  parameters: {
    docs: {
      description: {
        component: 'Location picker with suggestion dropdown shared between the search bar and mobile overlay.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

const InteractiveStory = () => {
  const [location, setLocation] = useState<{ id: number; name: string } | null>(null);
  const [focusedInput, setFocusedInput] = useState<SearchField | null>(null);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);

  return (
    <Box sx={{ maxWidth: 500 }}>
      <LocationField
        location={location}
        setLocation={setLocation}
        focusedInput={focusedInput}
        setFocusedInput={setFocusedInput}
        suggestions={suggestions}
        isLoading={false}
        highlightedIndex={highlightedIndex}
        handleKeyDown={(event) => {
          if (event.key === 'ArrowDown') {
            setHighlightedIndex((prev) => (prev + 1) % suggestions.length);
          }
        }}
      />
    </Box>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveStory />
};
