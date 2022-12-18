CREATE TABLE muscles (id SERIAL PRIMARY KEY, name TEXT NOT NULL, heads TEXT[], aliases TEXT[], musclegroup TEXT NOT NULL);

CREATE TABLE exercises ( id SERIAL PRIMARY KEY, label TEXT NOT NULL, description TEXT );

CREATE TABLE exercises_muscles ( muscle_id INT4 NOT NULL REFERENCES muscles(id), exercise_id INT4 NOT NULL REFERENCES exercises(id), heads TEXT[], role TEXT NOT NULL DEFAULT 'target', PRIMARY KEY ( muscle_id, exercise_id, role) );

ALTER TABLE muscles enable row level security;

CREATE policy "Muscles are viewable by everyone."
ON muscles for
SELECT  USING ( true );

ALTER TABLE exercises enable row level security;

CREATE policy "Public exercises are viewable by everyone."
ON exercises for
SELECT  USING ( true );

ALTER TABLE exercises_muscles enable row level security;

CREATE policy "Mappings are viewable by everyone."
ON exercises_muscles for
SELECT  USING ( true );

CREATE TYPE exercise_with_muscles AS ( id int, label text, description text, muscles jsonb );

CREATE FUNCTION get_exercises() RETURNS SETOF exercise_with_muscles LANGUAGE sql SECURITY INVOKER AS $$
SELECT  e.id
       ,e.label
       ,e.description
       ,em.muscles
FROM exercises e
LEFT JOIN
(
	SELECT  em.exercise_id
	       ,json_agg(json_build_object('name',m.name,'role',em.role,'id',m.id,'heads',em.heads,'musclegroup',m.musclegroup)) AS muscles
	FROM exercises_muscles em
	LEFT JOIN muscles m
	ON m.id = em.muscle_id
	GROUP BY  exercise_id
) em
ON em.exercise_id = e.id; $$;