'use client';

import DateField from '@src/components/inputs/search-bar/DateField';
import useWhenPicker from './useWhenPicker';

// ==============================|| WHEN PICKER ||============================== //
// Portable drop-in. Renders the existing DateField — zero logic duplicated.
//
// Usage:  <WhenPicker />  — place anywhere (navbar, hero, etc.)
// State:  owned by useWhenPicker; synced to URL ?date= so SearchBar picks it up
//         automatically via its own useSearchBar URL-read effect.

export default function WhenPicker() {
  const { selectedDate, setSelectedDate, focusedInput, setFocusedInput } = useWhenPicker();

  return (
    <DateField
      focusedInput={focusedInput}
      setFocusedInput={setFocusedInput}
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
      disableFocusStyle={false}
      isExpanded={true}
    />
  );
}
