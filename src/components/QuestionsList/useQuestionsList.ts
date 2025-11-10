import { useState, SyntheticEvent } from 'react';

export default function useQuestionsList() {
  const [expanded, setExpanded] = useState<string>('');

  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : '');
  };

  return {
    expanded,
    handleChange,
  };
}
