CREATE DATABASE stoplightdb;

CREATE TABLE Interseccion (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    ubicacion VARCHAR(255)
);

CREATE TABLE Semaforo (
    id SERIAL PRIMARY KEY,
    interseccion_id INT NOT NULL,
    tipo VARCHAR(50) NOT NULL,
    estado_actual VARCHAR(20), 
    ultima_actualizacion TIMESTAMP,
    CONSTRAINT fk_semaforo_interseccion
        FOREIGN KEY(interseccion_id)
        REFERENCES Interseccion(id)
        ON DELETE CASCADE
);

CREATE TABLE SensorRegistro (
    id SERIAL PRIMARY KEY,
    interseccion_id INT NOT NULL,
    tipo VARCHAR(50) NOT NULL, 
    timestamp TIMESTAMP NOT NULL,
    valor INT NOT NULL,
    CONSTRAINT fk_sensorregistro_interseccion
        FOREIGN KEY(interseccion_id)
        REFERENCES Interseccion(id)
        ON DELETE CASCADE
);

CREATE TABLE Evento (
    id SERIAL PRIMARY KEY,
    interseccion_id INT NOT NULL,
    tipo VARCHAR(50) NOT NULL, 
    timestamp TIMESTAMP NOT NULL,
    descripcion TEXT,
    vehiculo_emergencia VARCHAR(50),
    CONSTRAINT fk_evento_interseccion
        FOREIGN KEY(interseccion_id)
        REFERENCES Interseccion(id)
        ON DELETE CASCADE
);

CREATE TABLE Estacionamiento (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    ubicacion VARCHAR(255),
    espacios_totales INT NOT NULL,
    espacios_libres INT NOT NULL,
    espacios_reservados INT NOT NULL,
    interseccion_id INT,
    CONSTRAINT fk_estacionamiento_interseccion
        FOREIGN KEY(interseccion_id)
        REFERENCES Interseccion(id)
        ON DELETE SET NULL
);

