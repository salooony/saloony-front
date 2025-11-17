import { useEffect } from 'react';

export default function useClickOutside(
  refs: React.RefObject<HTMLElement | null> | React.RefObject<HTMLElement | null>[],
  callback: () => void
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      const refsArray = Array.isArray(refs) ? refs : [refs];
      const clickedInside = refsArray.some((ref) => ref.current?.contains(target));

      // If the click happened inside a MUI pickers popper/calendar, treat it as inside
      // This prevents the date picker from being closed when interacting with its internal elements
      let el = event.target as HTMLElement | null;
      let insideMuiPicker = false;

      while (el) {
        const cn = el.className;
        if (typeof cn === 'string' && /Mui.*(Pickers|Calendar|Day|Popper)/.test(cn)) {
          insideMuiPicker = true;
          break;
        }

        // data attributes used by some MUI internals
        if (el.getAttribute && (el.getAttribute('role') === 'dialog' || el.hasAttribute('data-mui'))) {
          insideMuiPicker = true;
          break;
        }

        el = el.parentElement;
      }

      if (!clickedInside && !insideMuiPicker) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [refs, callback]);
}
