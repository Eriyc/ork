import {Text, Theme, useTheme} from '@/features/ui';
import React, {FC, memo} from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

type AddSet = (id: string) => void;

const AddSetButton: FC<{addSet: AddSet; id: string}> = memo(
  ({addSet, id}) => {
    const theme = useTheme();
    const styles = createStyles(theme);

    return (
      <TouchableOpacity style={[styles.container]} onPress={() => addSet(id)}>
        <Text style={[styles.text]}>Add set</Text>
      </TouchableOpacity>
    );
  },
  (prev, next) => prev.id === next.id,
);

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    pressed: {
      backgroundColor: 'white',
    },
    container: {
      backgroundColor: theme.colors.button,
      flex: 1,
      padding: 8,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
    },
    text: {
      color: theme.colors.text,
    },
  });

export {AddSetButton};
