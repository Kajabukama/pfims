-- DROP DATABASE IF EXISTS `info_pfim`;
-- CREATE DATABASE `info_pfim`;
-- USE `info_pfim`;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`(
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstname VARCHAR(50)not null,
  lastname VARCHAR(50)not null,
  email VARCHAR(50)not null,
  password VARCHAR(65)not null
);

DROP TABLE IF EXISTS `messages`;
CREATE TABLE `messages`(
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(50)not null,
  content VARCHAR(50)not null
);
