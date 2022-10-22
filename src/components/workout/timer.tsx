import {useWorkout} from '@/stores';
import {toHHMMSS} from '@/utils';
import React, {FC, memo, useEffect, useRef, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

const calculateElapsedTime = (times: Date[]) =>
  times.reduce<number>((acc, curr, index, arr) => {
    if (index % 2 === 1) return acc;
    if (arr[index + 1] === undefined) return acc + Date.now() - curr.getTime();
    return acc + arr[index + 1].getTime() - curr.getTime();
  }, 0);

const WorkoutTimer: FC = memo(() => {
  const times = useWorkout(state => state.times);
  const timer = useRef<NodeJS.Timeout>();

  const [stopwatch, setStopwatch] = useState(() =>
    toHHMMSS(new Date(calculateElapsedTime(times))),
  );

  useEffect(() => {
    if (times.length % 2 === 1) {
      timer.current = setInterval(() => {
        setStopwatch(toHHMMSS(new Date(calculateElapsedTime(times))));
      }, 1000);
    }

    return () => {
      clearInterval(timer.current);
    };
  }, [times]);

  return <Text>{stopwatch}</Text>;
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({
  container: {},
});

export {WorkoutTimer};
