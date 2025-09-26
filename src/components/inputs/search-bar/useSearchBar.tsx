import { useState } from 'react';

export default function useSearchBar() {
  const [query, setQuery] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [focusedInput, setFocusedInput] = useState<'query' | 'location' | null>(null);

  return { query, setQuery, location, setLocation, focusedInput, setFocusedInput };
}
