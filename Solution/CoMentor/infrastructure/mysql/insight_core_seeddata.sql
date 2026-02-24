USE insight_core_db;

INSERT INTO candidate_performance (candidate_id, overall_score, average_score, tests_attempted, improvement_rate)
VALUES (101, 73, 73, 1, 5.00);

INSERT INTO candidate_test_results (candidate_id, test_id, score, percentile, attempt_date)
VALUES (101,1,73,85.00,'2026-03-01 11:10:00');

INSERT INTO rankings (candidate_id, rank_position, category, generated_at)
VALUES (101, 5, 'C Programming', NOW());