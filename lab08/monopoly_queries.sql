--Exercise 8.1
SELECT * from Game ORDER BY time DESC;
SELECT * from Game WHERE time >= CURRENT_DATE - 7;
SELECT * from Player Where name IS NOT NULL;
SELECT playerID from PlayerGame WHERE score > 2000;
SELECT * from Player WHERE emailAddress LIKE '%gmail%';

--Exercise 8.2
SELECT score from Player, PlayerGame WHERE Player.ID = PlayerGame.playerID
                                     AND Player.name LIKE '%King%'
                                     ORDER BY score DESC;
SELECT name from Player, PlayerGame, Game WHERE Player.ID = PlayerGame.playerID
                                     AND PlayerGame.gameID = Game.ID
                                     AND Game.time = '2006-06-28 13:20:00'
                                     ORDER BY score DESC
                                     LIMIT 1;
                                     --winner's name is NULL
--c. It compares the IDs of two players with the same name and returns the lower one
--d. If you wanted to get the middle score from a group of three players