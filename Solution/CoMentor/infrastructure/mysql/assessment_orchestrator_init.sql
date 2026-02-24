CREATE DATABASE IF NOT EXISTS assessment_orchestrator_db;
USE assessment_orchestrator_db;

CREATE TABLE tests (
    test_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    total_marks INT,
    duration_minutes INT,
    created_by BIGINT, -- external user id
    status VARCHAR(20) DEFAULT 'DRAFT',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE test_schedules (
    schedule_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    test_id BIGINT NOT NULL,
    start_time DATETIME,
    end_time DATETIME,
    allowed_attempts INT DEFAULT 1,
    FOREIGN KEY (test_id) REFERENCES tests(test_id)
);

CREATE TABLE test_questions (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    test_id BIGINT NOT NULL,
    question_id BIGINT NOT NULL, -- external reference
    marks INT NOT NULL,
    sequence_order INT,
    UNIQUE(test_id, question_id),
    FOREIGN KEY (test_id) REFERENCES tests(test_id)
);

CREATE TABLE test_assessment_criteria (
    criteria_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    test_id BIGINT NOT NULL,
    criteria_name VARCHAR(100),
    weightage DECIMAL(5,2),
    FOREIGN KEY (test_id) REFERENCES tests(test_id)
);

CREATE TABLE assessments (
    assessment_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    test_id BIGINT NOT NULL,
    candidate_id BIGINT NOT NULL,
    attempt_number INT DEFAULT 1,
    start_time DATETIME,
    end_time DATETIME,
    status VARCHAR(20) DEFAULT 'IN_PROGRESS',
    total_score DECIMAL(6,2),
    FOREIGN KEY (test_id) REFERENCES tests(test_id)
);