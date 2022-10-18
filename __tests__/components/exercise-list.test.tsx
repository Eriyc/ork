import React from 'react';
import {ExerciseList} from 'src/features/workout/components/exercise-list';
import {act, render} from '@testing-library/react-native';
import {ThemeProvider} from '@/features';
describe('exercise-list', () => {
  const list = render(
    <ThemeProvider>
      <ExerciseList />
    </ThemeProvider>,
  );

  it('renders', () => {
    const title = list.findAllByTestId('workout-name');

    expect(title).toStrictEqual('Afternoon Workout');
  });
});
