import {useEffect, useRef} from 'react';

export const useRenderTracker = (name: string) => {
  const count = useRef(0);

  useEffect(() => {
    console.log(name, 'render', count.current);
    count.current += 1;
  });
};
