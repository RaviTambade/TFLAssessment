CREATE DATABASE IF NOT EXISTS insight_core_db;
USE insight_core_db;

CREATE TABLE performance_level (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    level_name ENUM('Beginner', 'Intermediate', 'Advanced') NOT NULL UNIQUE,
    min_score DECIMAL(5,2) NOT NULL,
    max_score DECIMAL(5,2) NOT NULL,
    description VARCHAR(255)
);

CREATE TABLE candidate_performance (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    candidate_id BIGINT NOT NULL UNIQUE,
    overall_score DECIMAL(6,2),
    average_score DECIMAL(6,2),
    tests_attempted INT DEFAULT 0,
    improvement_rate DECIMAL(5,2),
    performance_level_id BIGINT,
    FOREIGN KEY (performance_level_id) REFERENCES performance_level(id)
);

CREATE TABLE candidate_test_results (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    candidate_id BIGINT NOT NULL,
    test_id BIGINT NOT NULL,
    score DECIMAL(6,2),
    percentile DECIMAL(5,2),
    time_taken_minutes INT,
    attempt_date DATETIME,
    performance_level_id BIGINT,
    FOREIGN KEY (performance_level_id) REFERENCES performance_level(id),
    INDEX(candidate_id)
);

CREATE TABLE rankings (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    candidate_id BIGINT NOT NULL,
    test_id BIGINT NOT NULL,
    rank_position INT,
    total_candidates INT,
    category VARCHAR(100),
    generated_at DATETIME
);

CREATE TABLE performance_snapshots (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    cam ndidate_id BIGINT NOT NULL,
    snapshot_date DATETIME,
    performance_json JSON
);