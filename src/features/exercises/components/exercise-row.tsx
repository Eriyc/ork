import {Card, Text, useTheme} from '@/features/ui';
import {Theme} from '@react-navigation/native';
import React, {FC, memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {ExerciseInfo} from '../types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useAppNavigation} from '@/features/app';

const ExerciseRow: FC<ExerciseInfo> = memo(
  ({id, instructions, name, tags}) => {
    const theme = useTheme();
    const styles = createStyles(theme);
    const navigation = useAppNavigation();

    return (
      <Card
        style={[styles.container]}
        onPress={() =>
          navigation.navigate('ExerciseDetails', {id, screen: 'Instructions'})
        }>
        <View>
          <Text>{name}</Text>
          <Text>{tags.join(', ')}</Text>
        </View>
        <View>
          <Icon name="chevron-right" size={18} color={theme.colors.text} />
        </View>
      </Card>
    );
  },
  (prev, next) => prev.id === next.id,
);

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      padding: 16.0,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });

export {ExerciseRow};
