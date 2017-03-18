
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
  roomname varchar(20),
  PRIMARY KEY (id)
);

-- create Table 'users'
CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(20) NOT NULL,
  PRIMARY KEY (id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

