
CREATE DATABASE IF NOT EXISTS msishw;
USE msishw;

DROP TABLE IF EXISTS book;
CREATE TABLE book (
	id int PRIMARY KEY AUTO_INCREMENT ,
    title varchar(48) UNIQUE NOT NULL,
    author varchar(48),
    pyear int,
    publisher varchar(48),
    pageno int,
    price int
);

INSERT INTO book (id, title, author, pyear, publisher, pageno, price) VALUES 
(1, 'Alfreds Futterkiste', 'Maria Anders', '1823', 'Penguin', '293', '$30'),
(2, 'The Book Thief', 'Maria Anders', '2008', 'Penguin', '264', '$30'),
(3, 'Hunger Games', 'Suzanne Collins', '2013', 'Penguin', '293', '$45'),
(4, 'Percy Jackson', 'Rick Riordan', '2009', 'Penguin' '345', '$28');

-- SELECT * FROM book;

-- COMMIT;

-- CREATE USER 'msisreader'@'%' IDENTIFIED BY 'msisreadonly';
-- GRANT SELECT ON * . * TO 'msisreader'@'%';