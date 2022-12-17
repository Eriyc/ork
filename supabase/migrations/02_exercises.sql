CREATE TABLE exercises ( id SERIAL PRIMARY KEY, label TEXT NOT NULL, description TEXT );

ALTER TABLE exercises enable row level security;

CREATE policy "Public exercises are viewable by everyone."
ON exercises for
SELECT USING ( true );

