  
USE burger_db;

DROP TABLE IF EXISTS burger;

CREATE TABLE burger(
	id INTEGER auto_increment not null,
    burger_name VARCHAR(50),
    devoured BOOLEAN DEFAULT false,
    date TIMESTAMP not null DEFAULT current_timestamp,
    primary key(id)
    );