import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import Box from '@mui/material/Box';

import QueryField from 'components/inputs/search-bar/QueryField';
import { FocusedInputType } from '@src/config';

const suggestions = [
  { id: 1, name: 'Hair salon near me' },
  { id: 2, name: 'Massage therapy' },
  { id: 3, name: 'Nail services' }
];

const meta: Meta<typeof QueryField> = {
  title: 'Components/QueryField',
  component: QueryField,
  parameters: {
    docs: {
      description: {
        component: 'Search input offering dynamic suggestions and mobile-friendly read-only mode.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  render: () => {
    const [query, setQuery] = useState('');
    const [focusedInput, setFocusedInput] = useState<FocusedInputType | null>(null);

    return (
      <Box sx={{ maxWidth: 500 }}>
        <QueryField
          query={query}
          setQuery={setQuery}
          focusedInput={focusedInput}
          setFocusedInput={setFocusedInput}
          suggestions={suggestions}
          isLoading={false}
          highlightedIndex={-1}
          handleKeyDown={() => undefined}
          readOnly={false}
        />
      </Box>
    );
  }
};

export const ReadOnlyTrigger: Story = {
  render: () => (
    <Box sx={{ maxWidth: 500 }}>
      <QueryField query="Browse services" readOnly onOuterMouseDown={() => alert('Open overlay')} />
    </Box>
  )
};
