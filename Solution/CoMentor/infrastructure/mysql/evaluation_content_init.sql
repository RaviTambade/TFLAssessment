CREATE DATABASE IF NOT EXISTS evaluation_content_db;
USE evaluation_content_db;


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


CREATE TABLE question_bank (
    question_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    question_type VARCHAR(50) NOT NULL,
    difficulty_level VARCHAR(50),
    status VARCHAR(20) DEFAULT 'ACTIVE',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE question_subject_concept_map (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    question_id BIGINT NOT NULL,
    subject_concept_id BIGINT NOT NULL, -- external reference
    UNIQUE(question_id, subject_concept_id),
    FOREIGN KEY (question_id) REFERENCES question_bank(question_id),
    FOREIGN KEY(subject_concept_id) REFERENCES subject_concepts(id)
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
