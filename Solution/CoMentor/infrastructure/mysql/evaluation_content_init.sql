CREATE DATABASE IF NOT EXISTS evaluation_content_db;
USE evaluation_content_db;

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

CREATE TABLE question_type (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    question_type VARCHAR(50) NOT NULL UNIQUE,
    marks INT NOT NULL
);
CREATE TABLE question_bank (
    question_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    question_type_id BIGINT NOT NULL,
    difficulty_level VARCHAR(50),
    status VARCHAR(20) DEFAULT 'ACTIVE',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_question_marking
        FOREIGN KEY (question_type_id)
        REFERENCES question_type(id)
);
CREATE TABLE problem_statements (
    problem_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    question_id BIGINT NOT NULL UNIQUE,
    input_format TEXT,
    output_format TEXT,
    constraints TEXT,
    sample_input TEXT,
    sample_output TEXT,
    FOREIGN KEY (question_id) REFERENCES question_bank(question_id)
);

CREATE TABLE code_snippets (
    snippet_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    question_id BIGINT NOT NULL,
    language VARCHAR(50) NOT NULL,
    starter_code TEXT,
    FOREIGN KEY (question_id) REFERENCES question_bank(question_id)
);

CREATE TABLE mini_projects (
    project_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    question_id BIGINT NOT NULL UNIQUE,
    project_description TEXT,
    evaluation_criteria TEXT,
    FOREIGN KEY (question_id) REFERENCES question_bank(question_id)
);

CREATE TABLE mock_questions (
    mock_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    question_id BIGINT NOT NULL UNIQUE,
    mock_category VARCHAR(100),
    FOREIGN KEY (question_id) REFERENCES question_bank(question_id)
);

CREATE TABLE mcq_options (

    mcq_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    question_id BIGINT NOT NULL,
    
    option_a VARCHAR(500) NOT NULL,
    option_b VARCHAR(500) NOT NULL,
    option_c VARCHAR(500) NOT NULL,
    option_d VARCHAR(500) NOT NULL,
    
    FOREIGN KEY (question_id) 
        REFERENCES question_bank(question_id)
        ON DELETE CASCADE
);

ALTER TABLE mcq_options
ADD COLUMN IF NOT EXISTS correct_option CHAR(1);

CREATE TABLE question_technology_concept_maps (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    question_id BIGINT NOT NULL,
    technology_concepts_id INT NOT NULL,
    UNIQUE(question_id, technology_concepts_id),
    FOREIGN KEY (question_id) REFERENCES question_bank(question_id) ON DELETE CASCADE,
    FOREIGN KEY (technology_concepts_id) REFERENCES technology_concepts(id) ON DELETE CASCADE
);
