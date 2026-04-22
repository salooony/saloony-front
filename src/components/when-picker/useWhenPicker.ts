'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import dayjs, { Dayjs } from 'dayjs';
import { FocusedInputType } from '@src/config';

// ==============================|| USE WHEN PICKER ||============================== //
// Thin hook — owns focusedInput + selectedDate and syncs with the URL ?date= param.
// Pattern mirrors useSearchBar (lines 43-45 + handleDateChange) — no duplication.

export default function useWhenPicker() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [selectedDate, setSelectedDateState] = useState<Dayjs | null>(null);
  const [focusedInput, setFocusedInput] = useState<FocusedInputType | null>(null);

  // Hydrate from URL on mount / whenever params change
  useEffect(() => {
    const dateParam = searchParams.get('date');
    setSelectedDateState(dateParam ? dayjs(dateParam) : null);
  }, [searchParams]);

  const setSelectedDate = (newDate: Dayjs | null) => {
    setSelectedDateState(newDate);

    const params = new URLSearchParams(searchParams.toString());
    if (newDate) {
      params.set('date', newDate.format('YYYY-MM-DD'));
    } else {
      params.delete('date');
    }

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return { selectedDate, setSelectedDate, focusedInput, setFocusedInput };
}
