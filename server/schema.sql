
-- drop database if exists 'chat'
DROP DATABASE IF EXISTS chat;

-- create database 'chat'
CREATE DATABASE chat;

-- change database to use 'chat'
USE chat;

-- create Table 'messages';
CREATE TABLE messages (
  id int NOT NULL AUTO_INCREMENT,
  userid int NOT NULL,
  text varchar(255) NOT NULL,
  roomname varchar(20) NOT NULL,
  PRIMARY KEY (id)
);

-- create Table 'users'
CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(20) NOT NULL,
  PRIMARY KEY (id)
);

-- placeholder (populate database with following records)
-- INSERT INTO users (username) VALUES ('Mukesh'), ('Mitt'), ('Krish');
-- INSERT INTO messages (userid, text, roomname) VALUES (1, 'Hello', 'main'), (2, 'Whats up', 'lobby'), (3, 'How are you?', 'lobby');

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

