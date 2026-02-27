CREATE DATABASE IF NOT EXISTS insight_core_db;
USE insight_core_db;

CREATE TABLE candidate_performance (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    candidate_id BIGINT NOT NULL UNIQUE,
    overall_score DECIMAL(6,2),
    average_score DECIMAL(6,2),
    tests_attempted INT,
    improvement_rate DECIMAL(5,2)
);

CREATE TABLE candidate_test_results (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    candidate_id BIGINT NOT NULL,
    test_id BIGINT NOT NULL,
    score DECIMAL(6,2),
    percentile DECIMAL(5,2),
    attempt_date DATETIME,
    INDEX(candidate_id)
);

CREATE TABLE rankings (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    candidate_id BIGINT NOT NULL,
    rank_position INT,
    category VARCHAR(100),
    generated_at DATETIME
);

CREATE TABLE performance_snapshots (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    candidate_id BIGINT NOT NULL,
    snapshot_date DATETIME,
    performance_json JSON
);

CREATE TABLE performance_level (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    difficulty_level ENUM('Beginner', 'Intermediate', 'Advanced') NOT NULL UNIQUE,
    marks_per_question DECIMAL(5,2) NOT NULL
);


