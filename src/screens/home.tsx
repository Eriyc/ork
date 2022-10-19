import {Link} from '@react-navigation/native';
import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {Surface, Text} from 'react-native-paper';

const HomeScreen: FC = () => {
  return (
    <ScrollView style={[styles.container]}>
      <View>
        <View style={[styles.sectionHeader]}>
          <Text variant="bodyLarge">History</Text>
          <Link to="/history">
            <Text variant="labelMedium">SHOW MORE</Text>
          </Link>
        </View>
        <Surface style={[styles.historyCard]}>
          <Text>Afternoon Workout</Text>
          <Text variant="bodySmall">- 10 pushups</Text>
        </Surface>
        <Surface style={[styles.historyCard]}>
          <Text>Morning Workout</Text>
          <Text variant="bodySmall">- 10 situps</Text>
        </Surface>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  historyCard: {
    borderRadius: 4,
    padding: 8,
    marginBottom: 12,
  },
});

export {HomeScreen};
