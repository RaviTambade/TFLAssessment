CREATE DATABASE IF NOT EXISTS skill_taxonomy_db;
USE skill_taxonomy_db;

CREATE TABLE skill_levels (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    level_name VARCHAR(50) NOT NULL UNIQUE,
    description TEXT
);

CREATE TABLE concepts (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(150) NOT NULL,
    description TEXT,
    level_id BIGINT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_concept_level
        FOREIGN KEY (level_id) REFERENCES skill_levels(id)
);

CREATE TABLE concept_prerequisites (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    concept_id BIGINT NOT NULL,
    prerequisite_concept_id BIGINT NOT NULL,
    UNIQUE(concept_id, prerequisite_concept_id),
    FOREIGN KEY (concept_id) REFERENCES concepts(id),
    FOREIGN KEY (prerequisite_concept_id) REFERENCES concepts(id)
);

CREATE TABLE runtimes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);
 CREATE TABLE languages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    runtimeid INT,
    FOREIGN KEY (runtimeid) REFERENCES runtimes(id)
);
 CREATE TABLE layers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);
 CREATE TABLE technology_map (
    id INT AUTO_INCREMENT PRIMARY KEY,
    techName VARCHAR(100) NOT NULL,
    langId INT NOT NULL,
    layerId INT NOT NULL,
    
    CONSTRAINT fk_language
        FOREIGN KEY (langId) REFERENCES languages(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT fk_layer
        FOREIGN KEY (layerId) REFERENCES layers(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

 CREATE TABLE technology_concepts (
     id INT AUTO_INCREMENT PRIMARY KEY,

    techid INT NOT NULL,
    concept_id BIGINT NOT NULL,

    CONSTRAINT FK_Tech
        FOREIGN KEY (techid)
        REFERENCES technology_map(id)
        ON DELETE CASCADE,

    CONSTRAINT FK_Concept
        FOREIGN KEY (concept_id)
        REFERENCES concepts(id)
        ON DELETE CASCADE
);

