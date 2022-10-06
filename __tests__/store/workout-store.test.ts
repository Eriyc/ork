import {useWorkoutStore} from 'src/features/workout/store';
import {renderHook, act} from '@testing-library/react-native';

describe('Workout store', () => {
  test('initializes to an empty workout', () => {
    const {result: store} = renderHook(() => useWorkoutStore());
    expect(store.current.status).toBe('inactive');
    expect(store.current.exercises.length).toBe(0);
  });

  test('exercises can be added', () => {
    const {result: store} = renderHook(() => useWorkoutStore());

    act(() => {
      store.current.addSet('pushup');
    });

    expect(store.current.exercises.map(e => e.id)).toStrictEqual(['pushup']);
    expect(store.current.exercises[0].data.length).toBe(1);
  });

  test('exercises can be removed', () => {
    const {result: store} = renderHook(() => useWorkoutStore());

    const exerciseId = 'pushup';
    const setId = store.current.exercises[0].data[0].id;

    act(() => {
      store.current.removeSet(exerciseId, setId);
    });

    expect(store.current.exercises.length).toBe(0);
  });

  test('exercises can have many sets', () => {
    const {result: store} = renderHook(() => useWorkoutStore());

    act(() => {
      store.current.addSet('pushup');
      store.current.addSet('pushup');
    });

    expect(store.current.exercises[0].data.length).toBe(2);
  });

  test('whole exercises can be removed', () => {
    const {result: store} = renderHook(() => useWorkoutStore());

    act(() => {
      store.current.removeExercise('pushup');
    });

    expect(store.current.exercises).toStrictEqual([]);
  });

  test('set data can be updated', () => {
    const {result: store} = renderHook(() => useWorkoutStore());

    act(() => {
      store.current.addSet('pushup');
    });

    const setId = store.current.exercises[0].data[0].id;

    act(() => {
      store.current.updateSet('pushup', setId, {weight: 10, reps: 40, rpe: 10});
    });

    expect(store.current.exercises[0].data[0].weight.value).toBe(10);
  });

  test('sets can be toggled as done', () => {
    const {result: store} = renderHook(() => useWorkoutStore());

    const exerciseId = 'pushup';
    const setId = store.current.exercises[0].data[0].id;

    act(() => {
      store.current.toggleExercise(exerciseId, setId);
    });

    expect(store.current.exercises[0].data[0].completed).toBe(true);
    act(() => {
      store.current.toggleExercise(exerciseId, setId);
    });
    expect(store.current.exercises[0].data[0].completed).toBe(false);
  });
});
