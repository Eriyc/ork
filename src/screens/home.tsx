import {UserGreeting} from '@/components';
import {useAuthStore} from '@/models';
import {Link} from '@react-navigation/native';
import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Text} from 'react-native-paper';

const HomeScreen: FC = () => {
  const {user} = useAuthStore();

  return (
    <ScrollView style={[styles.container]}>
      {user && <UserGreeting user={user} style={[styles.sectionSpacing]} />}
      <View>
        <View style={[styles.sectionHeader]}>
          <Link to="/history">
            <Text variant="labelMedium" style={[styles.label]}>
              View workout history
            </Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  label: {
    textTransform: 'uppercase',
  },
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
  sectionSpacing: {
    marginBottom: 16,
  },
});

export {HomeScreen};
