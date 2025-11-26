CREATE DATABASE IF NOT EXISTS nba_app;
USE nba_app;

CREATE TABLE IF NOT EXISTS players (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100),
    estatura INT,
    edad INT,
    equipo VARCHAR(100)
);
