import { useState } from 'react';

export const useToggle = (initial: boolean) => {
  const [state, setState] = useState(() => initial);
  const toggle = () => setState(s => !s);
  const set = (value: boolean) => setState(value);

  return [state, toggle, set];
};
