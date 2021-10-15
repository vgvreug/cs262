--
-- This SQL script builds a monopoly database, deleting any pre-existing version.
--
-- @author kvlinden
-- @version Summer, 2015
--

-- Drop previous versions of the tables if they they exist, in reverse order of foreign keys.
DROP TABLE IF EXISTS PlayerGameProperty;
DROP TABLE IF EXISTS PlayerGame;
DROP TABLE IF EXISTS Game;
DROP TABLE IF EXISTS Player;

-- Create the schema.
CREATE TABLE Game (
	ID integer PRIMARY KEY, 
	time timestamp
	);

CREATE TABLE Player (
	ID integer PRIMARY KEY, 
	emailAddress varchar(50) NOT NULL,
	name varchar(50)
	);

CREATE TABLE PlayerGame (
	gameID integer REFERENCES Game(ID), 
	playerID integer REFERENCES Player(ID),
	score integer,
	cash integer,
	pieceLocation varchar(50) NOT NULL
	);

CREATE TABLE PlayerGameProperty (
	propName varchar(50) NOT NULL,
	playerID integer REFERENCES Player(ID),
	gameID integer REFERENCES Game(ID),
	numHouses integer,
	numHotels integer
	);

-- Allow users to select data from the tables.
GRANT SELECT ON Game TO PUBLIC;
GRANT SELECT ON Player TO PUBLIC;
GRANT SELECT ON PlayerGame TO PUBLIC;
GRANT SELECT ON PlayerGameProperty TO PUBLIC;

-- Add sample records.
INSERT INTO Game VALUES (1, '2006-06-27 08:00:00');
INSERT INTO Game VALUES (2, '2006-06-28 13:20:00');
INSERT INTO Game VALUES (3, '2006-06-29 18:41:00');

INSERT INTO Player(ID, emailAddress) VALUES (1, 'me@calvin.edu');
INSERT INTO Player VALUES (2, 'king@gmail.edu', 'The King');
INSERT INTO Player VALUES (3, 'dog@gmail.edu', 'Dogbreath');

INSERT INTO PlayerGame VALUES (1, 1, 0.00, 200, 'Start');
INSERT INTO PlayerGame VALUES (1, 2, 0.00, 200, 'Start');
INSERT INTO PlayerGame VALUES (1, 3, 2350.00, 1000, 'Baltic Avenue');
INSERT INTO PlayerGame VALUES (2, 1, 1000.00, 500, 'States Avenue');
INSERT INTO PlayerGame VALUES (2, 2, 0.00, 0, 'Prison');
INSERT INTO PlayerGame VALUES (2, 3, 500.00, 300, 'Reading Railroad');
INSERT INTO PlayerGame VALUES (3, 2, 0.00, 0, 'Free Parking');
INSERT INTO PlayerGame VALUES (3, 3, 5500.00, 2000, 'Boardwalk');

INSERT INTO PlayerGameProperty VALUES ('Baltic Avenue', 3, 1, 0, 0);
INSERT INTO PlayerGameProperty VALUES ('States Avenue', 2, 2, 1, 0);
INSERT INTO PlayerGameProperty VALUES ('Boardwalk', 3, 3, 0, 1);

SELECT * FROM Game;
