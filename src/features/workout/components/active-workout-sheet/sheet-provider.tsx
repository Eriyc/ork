import React, {
  createContext,
  FC,
  PropsWithChildren,
  RefObject,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {HANDLEBAR_HEIGHT} from './handle';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useWindowDimensions, ViewStyle} from 'react-native';
import {
  AnimatedStyleProp,
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

type SheetApi = {
  ref: RefObject<BottomSheet>;
  tabHeight: number;
  snapPoints: number[];
  tabStyle: AnimatedStyleProp<ViewStyle>;
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
  const [tabHeight, setTabHeight] = useState(0);

  const snapPoints = useMemo(
    () => [tabHeight + HANDLEBAR_HEIGHT, height - top],
    [height, top, tabHeight],
  );

  const currentPosition = useSharedValue(0);

  const tabStyle = useAnimatedStyle(() => {
    const translateY = interpolate(currentPosition.value, snapPoints, [
      tabHeight,
      0,
    ]);

    return {
      transform: [{translateY}],
    };
  });

  const showSheet = () => {
    ref.current?.snapToIndex(1);
  };

  const hideSheet = () => {
    ref.current?.close();
  };

  const onChange = (_index: number) => {};

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
        tabStyle,
        currentPosition,
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
