import React, {
  createContext,
  FC,
  PropsWithChildren,
  RefObject,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {HANDLEBAR_HEIGHT} from './handle';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useWindowDimensions} from 'react-native';
import {SharedValue, useSharedValue} from 'react-native-reanimated';
import {useWorkoutStore} from '../../store';

type SheetApi = {
  ref: RefObject<BottomSheet>;
  ready: boolean;
  tabHeight: number;
  snapPoints: number[];
  currentPosition: SharedValue<number>;

  setTabHeight: (height: number) => void;
  showSheet(): void;
  hideSheet(): void;
  onChange: (index: number) => void;
};
const SheetContext = createContext({} as SheetApi);

export const SheetProvider: FC<PropsWithChildren> = ({children}) => {
  const ref = useRef<BottomSheet>(null);
  const {top} = useSafeAreaInsets();
  const {height} = useWindowDimensions();
  const [tabHeight, _setTabHeight] = useState(0);
  const [ready, setReady] = useState(false);

  const setTabHeight = (tHeight: number) => {
    if (tHeight !== tabHeight) {
      _setTabHeight(tHeight);
    }
  };

  const workoutStatus = useWorkoutStore(state => state.status);

  useEffect(() => {
    if (workoutStatus === 'active') {
      setReady(true);
      showSheet();
    } else if (workoutStatus === 'inactive') {
      setReady(false);
      hideSheet();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [workoutStatus]);

  const snapPoints = useMemo(
    () => [tabHeight + HANDLEBAR_HEIGHT, height - top],
    [height, top, tabHeight],
  );

  const currentPosition = useSharedValue(0);

  const showSheet = useCallback(() => {
    ref.current?.snapToIndex(1);
  }, []);

  const hideSheet = useCallback(() => {
    ref.current?.close();
  }, []);

  const onChange = useCallback((_index: number) => {}, []);

  return (
    <SheetContext.Provider
      value={{
        hideSheet,
        showSheet,
        ref,
        onChange,
        tabHeight,
        setTabHeight,
        snapPoints,
        currentPosition,
        ready,
      }}>
      {children}
    </SheetContext.Provider>
  );
};

export const useWorkoutSheet = () => {
  const context = useContext(SheetContext);
  if (!context) {
    console.error('useWorkoutSheet needs a SheetContext');
  }

  return context;
};
