CREATE DATABASE IF NOT EXISTS skill_taxonomy_db;
USE skill_taxonomy_db;

CREATE TABLE skill_levels (
    level_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    level_name VARCHAR(50) NOT NULL UNIQUE,
    description TEXT
);

CREATE TABLE subjects (
    subject_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(150) NOT NULL UNIQUE,
    description TEXT,
    status VARCHAR(20) DEFAULT 'ACTIVE',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE concepts (
    concept_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(150) NOT NULL,
    description TEXT,
    level_id BIGINT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_concept_level
        FOREIGN KEY (level_id) REFERENCES skill_levels(level_id)
);

CREATE TABLE subject_concepts (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    subject_id BIGINT NOT NULL,
    concept_id BIGINT NOT NULL,
    UNIQUE(subject_id, concept_id),
    FOREIGN KEY (subject_id) REFERENCES subjects(subject_id),
    FOREIGN KEY (concept_id) REFERENCES concepts(concept_id)
);

CREATE TABLE concept_prerequisites (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    concept_id BIGINT NOT NULL,
    prerequisite_concept_id BIGINT NOT NULL,
    UNIQUE(concept_id, prerequisite_concept_id),
    FOREIGN KEY (concept_id) REFERENCES concepts(concept_id),
    FOREIGN KEY (prerequisite_concept_id) REFERENCES concepts(concept_id)
);