USE insight_core_db;
INSERT INTO performance_level (difficulty_level, marks_per_question)
VALUES
('Beginner', 2.00),
('Intermediate', 4.00),
('Advanced', 6.00);
 
INSERT INTO candidate_performance
(candidate_id, overall_score, average_score, tests_attempted, improvement_rate)
VALUES
(501, 78.50, 76.20, 3, 5.40),
(502, 85.00, 82.10, 4, 6.20),
(503, 42.00, 45.30, 2, 1.80),
(504, 74.00, 71.80, 3, 4.10),
(505, 69.50, 67.40, 2, 3.50),
(506, 81.00, 79.60, 4, 5.90),
(507, 77.80, 75.10, 3, 4.70),
(508, 44.00, 46.20, 2, 2.00),
(509, 88.60, 86.40, 4, 6.80),
(510, 41.50, 43.00, 2, 1.60),
(511, NULL, NULL, 0, 0.00),
(512, 79.00, 77.30, 3, 5.10),
(513, 91.20, 89.80, 5, 7.40),
(514, 38.00, 40.10, 2, 1.20),
(515, 26.00, 28.40, 1, 0.90);
 
INSERT INTO candidate_test_results
(candidate_id, test_id, score, percentile, attempt_date)
VALUES
(501, 1, 78.50, 68.20, '2025-03-01 11:00:00'),
(501, 6, 75.00, 64.10, '2025-03-10 11:00:00'),
(502, 2, 85.00, 76.50, '2025-03-02 11:30:00'),
(502, 9, 87.20, 80.30, '2025-03-12 11:30:00'),
(503, 3, 42.00, 35.40, '2025-03-03 09:45:00'),
(504, 4, 74.00, 62.10, '2025-03-04 11:30:00'),
(505, 5, 69.50, 58.00, '2025-03-05 11:00:00'),
(506, 6, 81.00, 71.80, '2025-03-06 11:00:00'),
(507, 7, 77.80, 66.40, '2025-03-07 11:30:00'),
(508, 8, 44.00, 38.90, '2025-03-08 09:45:00'),
(509, 9, 88.60, 82.30, '2025-03-09 11:30:00'),
(510, 10, 41.50, 34.60, '2025-03-10 09:45:00'),
(512, 12, 79.00, 69.00, '2025-03-12 11:00:00'),
(513, 13, 91.20, 88.70, '2025-03-13 11:00:00'),
(514, 14, 38.00, 31.20, '2025-03-14 09:45:00');
 
INSERT INTO rankings
(candidate_id, rank_position, category, generated_at)
VALUES
(513, 1, 'OVERALL', '2025-03-16 09:00:00'),
(509, 2, 'OVERALL', '2025-03-16 09:00:00'),
(502, 3, 'OVERALL', '2025-03-16 09:00:00'),
(506, 4, 'OVERALL', '2025-03-16 09:00:00'),
(512, 5, 'OVERALL', '2025-03-16 09:00:00'),
(501, 6, 'OVERALL', '2025-03-16 09:00:00'),
(507, 7, 'OVERALL', '2025-03-16 09:00:00'),
(504, 8, 'OVERALL', '2025-03-16 09:00:00'),
(505, 9, 'OVERALL', '2025-03-16 09:00:00'),
(508, 10, 'OVERALL', '2025-03-16 09:00:00');
 
INSERT INTO performance_snapshots
(candidate_id, snapshot_date, performance_json)
VALUES
(501, '2025-03-10 23:59:59',
'{"overallScore":78.5,"trend":"UP","strengths":["Java","DS"],"weaknesses":["SQL"]}'),
 
(502, '2025-03-10 23:59:59',
'{"overallScore":85.0,"trend":"UP","strengths":["Java","Python"],"weaknesses":[]}'),
 
(503, '2025-03-10 23:59:59',
'{"overallScore":42.0,"trend":"DOWN","strengths":["Basics"],"weaknesses":["Logic","Speed"]}'),
 
(506, '2025-03-10 23:59:59',
'{"overallScore":81.0,"trend":"STABLE","strengths":["Algorithms"],"weaknesses":["Time Management"]}'),
 
(509, '2025-03-10 23:59:59',
'{"overallScore":88.6,"trend":"UP","strengths":["Python","System Design"],"weaknesses":[]}'),
 
(513, '2025-03-10 23:59:59',
'{"overallScore":91.2,"trend":"UP","strengths":["All"],"weaknesses":[]}');