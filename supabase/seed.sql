insert into public.muscles (name, musclegroup, heads, aliases) values 
    ('Pectoralis Major', 'chest', '{"sternal","clavicular"}', '{"Chest","Pecs"}'),
    ('Pectoralis Minor', 'chest', '{}', '{"Chest"}'),
    ('Triceps Brachii',  'arms',  '{"long","lateral","medial"}','{"Triceps","Arm (Rear)"}');

INSERT INTO public.exercises (label, description) values ('Pushup', 'Lower yourself to the ground'), ('Tricep Dip', 'Lean backwards and do a dip'), ('Chest Dip', 'Lean forwards and do a dip');

INSERT INTO public.exercises_muscles (exercise_id, muscle_id, heads, role) values
    (1, 1, '{"sternal"}', 'target'),
    (1, 1, '{"clavicular"}', 'synergist'),
    (1, 2, '{}', 'synergist'),
    (1, 3, '{}', 'synergist'),
    (2, 3, '{}', 'target'),
    (2, 1, '{"sternal","clavicular"}', 'synergist'),
    (2, 2, '{}', 'synergist'),
    (3, 1, '{"sternal"}', 'target'),
    (3, 1, '{"clavicular"}', 'synergist'),
    (3, 2, '{}', 'synergist'),
    (3, 3, '{}', 'synergist');