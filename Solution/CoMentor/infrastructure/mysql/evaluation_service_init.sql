CREATE DATABASE IF NOT EXISTS evaluation_service_db;
USE evaluation_service_db;

CREATE TABLE candidate_answers (
    answer_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    assessment_id BIGINT NOT NULL,
    question_id BIGINT NOT NULL,
    candidate_id BIGINT NOT NULL,
    submitted_code LONGTEXT,
    submitted_answer TEXT,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX(assessment_id),
    INDEX(candidate_id)
);

CREATE TABLE auto_grading_results (
    result_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    answer_id BIGINT NOT NULL UNIQUE,
    score DECIMAL(6,2),
    execution_time DECIMAL(8,4),
    memory_used DECIMAL(8,2),
    test_cases_passed INT,
    remarks TEXT,
    FOREIGN KEY (answer_id) REFERENCES candidate_answers(answer_id)
);

CREATE TABLE concept_wise_results (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    assessment_id BIGINT NOT NULL,
    concept_id BIGINT NOT NULL,
    score DECIMAL(6,2),
    mastery_level VARCHAR(50),
    INDEX(assessment_id)
);

CREATE TABLE code_execution_logs (
    log_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    answer_id BIGINT NOT NULL,
    stdout LONGTEXT,
    stderr LONGTEXT,
    execution_status VARCHAR(50),
    FOREIGN KEY (answer_id) REFERENCES candidate_answers(answer_id)
);