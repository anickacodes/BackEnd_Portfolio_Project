-- db/schema.sql
DROP DATABASE IF EXISTS styles_dev;
CREATE DATABASE styles_dev;

\c styles_dev;

CREATE TABLE styles (
 id SERIAL PRIMARY KEY,
 category TEXT,
 service TEXT NOT NULL,
 duration time NOT NULL,
 description TEXT,
 price numeric,
 image_url TEXT
);

DROP TABLE IF EXISTS clients;

CREATE TABLE clients (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 address TEXT,
 is_member BOOLEAN,
 phone varchar(10) not null,
 rating NUMERIC,
 CHECK (rating >= 0 AND rating <= 5),
 style_id INTEGER REFERENCES styles (id)
 ON DELETE CASCADE
);
