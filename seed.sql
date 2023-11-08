CREATE TABLE IF NOT EXISTS codequestusers (
   user_id SERIAL PRIMARY KEY,
   username TEXT UNIQUE NOT NULL,
   pw TEXT NOT NULL,
   top_score INTEGER NOT NULL DEFAULT 0,
   highest_level TEXT
   );


INSERT INTO codequestusers(username, pw, top_score, highest_level)
VALUES ('billy', 'pop', '50', 'wizard');
