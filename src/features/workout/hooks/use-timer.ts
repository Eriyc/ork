import {calcDiff} from '@/utils';
import {useEffect, useMemo, useState} from 'react';

export const useTimer = (startTime: Date | null) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    if (!startTime) {
      return;
    }

    const timeoutId = setTimeout(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [currentTime, startTime]);

  const timer = useMemo(
    () => (startTime ? calcDiff(currentTime, startTime) : '0'),
    [currentTime, startTime],
  );

  return timer;
};
