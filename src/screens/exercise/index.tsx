import {Exercise, exercises} from '@/data';
import {useMainNavigation} from '@/navigation';
import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {
  Avatar,
  Divider,
  Surface,
  Text,
  TouchableRipple,
} from 'react-native-paper';

const ExerciseCard: FC<{exercise: Exercise; onPress: (id: number) => void}> = ({
  exercise,
  onPress,
}) => {
  return (
    <Surface key={exercise.id}>
      <TouchableRipple onPress={() => onPress(exercise.id)}>
        <View style={[styles.card]}>
          <Avatar.Text label={exercise.title[0]} />
          <View>
            <Text>{exercise.title}</Text>
          </View>
        </View>
      </TouchableRipple>
    </Surface>
  );
};

const ExerciseListScreen: FC = () => {
  const navigation = useMainNavigation();

  const handleNavigate = (id: number) => {
    navigation.navigate('exerciseDetails', {id});
  };

  return (
    <View style={[styles.container]}>
      <FlatList
        data={exercises}
        renderItem={({item}) => (
          <ExerciseCard exercise={item} onPress={handleNavigate} />
        )}
        ItemSeparatorComponent={Divider}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    padding: 8,
  },
});

export {ExerciseListScreen};
