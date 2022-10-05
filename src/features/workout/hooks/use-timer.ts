import {calcDiff} from '@/utils';

import create from 'zustand';

type TimerStore = {
  time: string;
  startTime: Date | null;
  setStartTime: (date: Date) => void;
  endTimer: () => void;
};
let timer: NodeJS.Timeout;

const startTimer = () => {
  timer = setTimeout(() => {
    useTimer.setState(state => ({
      time: state.startTime ? calcDiff(new Date(), state.startTime) : undefined,
    }));
    startTimer();
  }, 1000);
};

export const useTimer = create<TimerStore>(set => ({
  time: '00:00',
  startTime: null,
  setStartTime: (time: Date) => {
    set({startTime: time});
    startTimer();
  },
  endTimer: () => clearTimeout(timer),
}));
