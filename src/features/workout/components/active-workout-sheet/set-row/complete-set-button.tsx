import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {workoutStyles} from '../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CompleteSetButton: FC = () => {
  return (
    <View style={[workoutStyles.setColumn, styles.container]}>
      <View style={[styles.button]}>
        <Icon
          allowFontScaling
          maxFontSizeMultiplier={1.7}
          minimumFontScale={1}
          name="check"
          size={17}
          style={[styles.icon]}
          color="white"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 4,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  icon: {
    paddingVertical: 8,
  },
});

export {CompleteSetButton};
