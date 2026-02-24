CREATE DATABASE IF NOT EXISTS evaluation_content_db;
USE evaluation_content_db;

CREATE TABLE question_bank (
    question_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    question_type VARCHAR(50) NOT NULL,
    difficulty_level VARCHAR(50),
    status VARCHAR(20) DEFAULT 'ACTIVE',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE question_concept_map (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    question_id BIGINT NOT NULL,
    concept_id BIGINT NOT NULL, -- external reference
    UNIQUE(question_id, concept_id),
    FOREIGN KEY (question_id) REFERENCES question_bank(question_id)
);

CREATE TABLE question_subject_map (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    question_id BIGINT NOT NULL,
    subject_id BIGINT NOT NULL, -- external reference
    UNIQUE(question_id, subject_id),
    FOREIGN KEY (question_id) REFERENCES question_bank(question_id)
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