CREATE DATABASE IF NOT EXISTS assessment_orchestrator_db;
USE assessment_orchestrator_db;

CREATE TABLE tests (
    testid BIGINT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    duration_minutes INT,
    created_by BIGINT, -- external user id
    status VARCHAR(20) DEFAULT 'DRAFT',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE test_questions (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    testid BIGINT NOT NULL,
    question_id BIGINT NOT NULL,
    sequence_order INT,
    UNIQUE(testid, question_id),
    FOREIGN KEY (testid) REFERENCES tests(testid)
);

CREATE TABLE assessments (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    testid BIGINT NOT NULL,
    candidate_id BIGINT NOT NULL,
    attempt_number INT DEFAULT 1,
    start_time DATETIME,
    end_time DATETIME,
    status VARCHAR(20) DEFAULT 'IN_PROGRESS',
    FOREIGN KEY (testid) REFERENCES tests(testid)
);