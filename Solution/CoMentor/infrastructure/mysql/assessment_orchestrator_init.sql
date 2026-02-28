CREATE DATABASE IF NOT EXISTS assessment_orchestrator_db;
USE assessment_orchestrator_db;

CREATE TABLE tests (
    testid BIGINT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    total_marks INT,
    duration_minutes INT,
    created_by BIGINT, -- external user id
    status VARCHAR(20) DEFAULT 'DRAFT',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    smeid INT
);

CREATE TABLE test_schedules (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    testid BIGINT NOT NULL,
    start_time DATETIME,
    end_time DATETIME,
    allowed_attempts INT DEFAULT 1,
    FOREIGN KEY (testid) REFERENCES tests(testid)
);

CREATE TABLE test_questions (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    testid BIGINT NOT NULL,
    question_id BIGINT NOT NULL,
    marks INT,
    sequence_order INT,
    UNIQUE(testid, question_id),
    FOREIGN KEY (testid) REFERENCES tests(testid)
);

CREATE TABLE test_assessment_criteria (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    testid BIGINT NOT NULL,
    concepts VARCHAR(100),
    weightage DECIMAL(5,2),
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
    total_score DECIMAL(6,2),
    FOREIGN KEY (testid) REFERENCES tests(testid)
);