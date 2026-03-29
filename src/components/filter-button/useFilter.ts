import { useState, useMemo } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { AvailabilityOption, FilterState, SortOption } from '@src/types/filter';

// ==============================|| USE FILTER HOOK ||============================== //

export default function useFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  /**
   * Memoize URL parameters to prevent referential equality breaks on Next.js navigation.
   */
  const savedFilter = useMemo<FilterState>(() => ({
    availability: (searchParams.get('availability') as AvailabilityOption) || AvailabilityOption.ANY,
    sortBy: (searchParams.get('sort') as SortOption) || SortOption.NONE,
    pickedDate: searchParams.get('date')
  }), [searchParams]);

  const [isOpen, setIsOpen] = useState(false);

  // Draft state — only committed to the URL when the user clicks Save
  const [draft, setDraft] = useState<FilterState>(savedFilter);

  const openModal = () => {
    // Reset draft to the currently-saved values every time the modal opens
    setDraft(savedFilter);
    setIsOpen(true);
  };

  const closeModal = () => {
    // Close without saving — draft is discarded on the next openModal call
    setIsOpen(false);
  };

  const handleAvailabilityChange = (value: AvailabilityOption) => {
    setDraft((prev) => ({
      ...prev,
      availability: value,
      // Clear picked date when switching away from 'pick'
      pickedDate: value !== AvailabilityOption.PICK ? null : prev.pickedDate
    }));
  };

  const handleSortChange = (value: SortOption) => {
    setDraft((prev) => ({ ...prev, sortBy: value }));
  };

  const handleDateChange = (isoDate: string | null) => {
    setDraft((prev) => ({ ...prev, pickedDate: isoDate }));
  };

  const handleReset = () => {
    setDraft({
      availability: AvailabilityOption.ANY,
      sortBy: SortOption.NONE,
      pickedDate: null
    });
  };

  const applyStateToURL = (state: FilterState) => {
    const params = new URLSearchParams(searchParams.toString());

    if (state.availability !== AvailabilityOption.ANY) {
      params.set('availability', state.availability);
    } else {
      params.delete('availability');
    }

    if (state.sortBy !== SortOption.NONE) {
      params.set('sort', state.sortBy);
    } else {
      params.delete('sort');
    }

    if (state.pickedDate && state.availability === AvailabilityOption.PICK) {
      params.set('date', state.pickedDate);
    } else {
      params.delete('date');
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleSave = () => {
    applyStateToURL(draft);
    setIsOpen(false);
  };

  const handleFullReset = () => {
    applyStateToURL({
      availability: AvailabilityOption.ANY,
      sortBy: SortOption.NONE,
      pickedDate: null
    });
    setIsOpen(false);
  };

  return {
    isOpen,
    draft,
    openModal,
    closeModal,
    handleAvailabilityChange,
    handleSortChange,
    handleDateChange,
    handleReset,
    handleSave,
    handleFullReset
  };
}
