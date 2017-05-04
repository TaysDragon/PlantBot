### Schema

CREATE DATABASE plants_db;
USE plants_db;

CREATE TABLE trees
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	sleepy BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
