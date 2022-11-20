import {IObservableValue, observable} from 'mobx';
export type StatusType = 'idle' | 'pending' | 'done' | 'error' | 'not_initialized';
export const withStatus = (initial: StatusType = 'idle') => {
  const status: IObservableValue<StatusType> = observable.box(initial);
  return {
    views: {
      get status() {
        return status.get();
      },
      set status(value: StatusType) {
        status.set(value);
      },
    },
    actions: {
      setStatus: (value: StatusType) => {
        status.set(value);
      },
      resetStatus: () => {
        status.set('idle');
      },
    },
  };
};
