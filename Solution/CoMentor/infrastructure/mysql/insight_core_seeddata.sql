-- =============================================
-- performance_level (master/config data)
-- =============================================
INSERT INTO performance_level (level_name, min_score, max_score, description)
VALUES
('Beginner',     0.00, 40.00, 'Basic understanding, needs improvement'),
('Intermediate', 41.00, 70.00, 'Moderate understanding, can improve further'),
('Advanced',     71.00, 100.00, 'Strong understanding, excellent performance');

-- =============================================
-- candidate_test_results (per test level)
-- =============================================
INSERT INTO candidate_test_results (candidate_id, test_id, score, percentile, time_taken_minutes, attempt_date, performance_level_id)
VALUES
(501, 1,  78.50, 85.00, 55, '2025-03-01 10:00:00', 3),  -- Advanced
(502, 2,  85.00, 90.00, 80, '2025-03-02 10:00:00', 3),  -- Advanced
(503, 3,  42.00, 55.00, 40, '2025-03-03 09:00:00', 2),  -- Intermediate
(504, 4,  74.00, 78.00, 85, '2025-03-04 10:00:00', 3),  -- Advanced
(505, 5,  69.50, 72.00, 58, '2025-03-05 10:00:00', 2),  -- Intermediate
(506, 6,  81.00, 88.00, 88, '2025-03-06 09:30:00', 3),  -- Advanced
(507, 7,  77.80, 82.00, 87, '2025-03-07 10:00:00', 3),  -- Advanced
(508, 8,  44.00, 58.00, 42, '2025-03-08 09:00:00', 2),  -- Intermediate
(509, 9,  88.60, 93.00, 85, '2025-03-09 10:00:00', 3),  -- Advanced
(510, 10, 41.50, 52.00, 43, '2025-03-10 09:00:00', 2),  -- Intermediate
(511, 11, NULL,  NULL,  NULL,'2025-03-11 10:00:00', NULL),-- IN_PROGRESS
(512, 12, 79.00, 84.00, 58, '2025-03-12 10:00:00', 3),  -- Advanced
(513, 13, 91.20, 96.00, 110,'2025-03-13 09:00:00', 3),  -- Advanced
(514, 14, 38.00, 45.00, 43, '2025-03-14 09:00:00', 1),  -- Beginner
(515, 15, 26.00, 30.00, 28, '2025-03-15 10:00:00', 1);  -- Beginner

-- =============================================
-- candidate_performance (overall summary)
-- =============================================
INSERT INTO candidate_performance (candidate_id, overall_score, average_score, tests_attempted, improvement_rate, performance_level_id)
VALUES
(501, 78.50, 78.50, 1,  0.00,  3),  -- Advanced
(502, 85.00, 85.00, 1,  0.00,  3),  -- Advanced
(503, 42.00, 42.00, 1,  0.00,  2),  -- Intermediate
(504, 74.00, 74.00, 1,  0.00,  3),  -- Advanced
(505, 69.50, 69.50, 1,  0.00,  2),  -- Intermediate
(506, 81.00, 81.00, 1,  0.00,  3),  -- Advanced
(507, 77.80, 77.80, 1,  0.00,  3),  -- Advanced
(508, 44.00, 44.00, 1,  0.00,  2),  -- Intermediate
(509, 88.60, 88.60, 1,  0.00,  3),  -- Advanced
(510, 41.50, 41.50, 1,  0.00,  2),  -- Intermediate
(511, NULL,  NULL,  1,  NULL,  NULL),-- IN_PROGRESS
(512, 79.00, 79.00, 1,  0.00,  3),  -- Advanced
(513, 91.20, 91.20, 1,  0.00,  3),  -- Advanced
(514, 38.00, 38.00, 1,  0.00,  1),  -- Beginner
(515, 26.00, 26.00, 1,  0.00,  1);  -- Beginner

-- =============================================
-- rankings (no performance_level_id needed)
-- =============================================
INSERT INTO rankings (candidate_id, test_id, rank_position, total_candidates, category, generated_at)
VALUES
(513, 13, 1,  15, 'System Design',  '2025-03-13 12:00:00'),
(509, 9,  2,  15, 'Python Advanced', '2025-03-09 12:00:00'),
(502, 2,  3,  15, 'Advanced Java',   '2025-03-02 12:00:00'),
(506, 6,  4,  15, 'Data Structures', '2025-03-06 12:00:00'),
(512, 12, 5,  15, 'Node.js Basics',  '2025-03-12 12:00:00'),
(507, 7,  6,  15, 'Algorithms',      '2025-03-07 12:00:00'),
(501, 1,  7,  15, 'Java Basics',     '2025-03-01 12:00:00'),
(504, 4,  8,  15, 'Advanced SQL',    '2025-03-04 12:00:00'),
(505, 5,  9,  15, 'C Programming',   '2025-03-05 12:00:00'),
(503, 3,  10, 15, 'SQL Fundamentals','2025-03-03 12:00:00'),
(508, 8,  11, 15, 'Python Basics',   '2025-03-08 12:00:00'),
(510, 10, 12, 15, 'JavaScript Basics','2025-03-10 12:00:00'),
(514, 14, 13, 15, 'Aptitude Test',   '2025-03-14 12:00:00'),
(515, 15, 14, 15, 'HR Screening',    '2025-03-15 12:00:00'),
(511, 11, NULL,15, 'React Basics',   '2025-03-11 12:00:00'); -- IN_PROGRESS

-- =============================================
-- performance_snapshots (JSON summary)
-- =============================================
INSERT INTO performance_snapshots (candidate_id, snapshot_date, performance_json)
VALUES
(501, '2025-03-01 12:00:00', '{"test_id": 1, "score": 78.50, "level": "Advanced",      "rank": 7,    "percentile": 85.00}'),
(502, '2025-03-02 12:00:00', '{"test_id": 2, "score": 85.00, "level": "Advanced",      "rank": 3,    "percentile": 90.00}'),
(503, '2025-03-03 12:00:00', '{"test_id": 3, "score": 42.00, "level": "Intermediate",  "rank": 10,   "percentile": 55.00}'),
(504, '2025-03-04 12:00:00', '{"test_id": 4, "score": 74.00, "level": "Advanced",      "rank": 8,    "percentile": 78.00}'),
(505, '2025-03-05 12:00:00', '{"test_id": 5, "score": 69.50, "level": "Intermediate",  "rank": 9,    "percentile": 72.00}'),
(506, '2025-03-06 12:00:00', '{"test_id": 6, "score": 81.00, "level": "Advanced",      "rank": 4,    "percentile": 88.00}'),
(507, '2025-03-07 12:00:00', '{"test_id": 7, "score": 77.80, "level": "Advanced",      "rank": 6,    "percentile": 82.00}'),
(508, '2025-03-08 12:00:00', '{"test_id": 8, "score": 44.00, "level": "Intermediate",  "rank": 11,   "percentile": 58.00}'),
(509, '2025-03-09 12:00:00', '{"test_id": 9, "score": 88.60, "level": "Advanced",      "rank": 2,    "percentile": 93.00}'),
(510, '2025-03-10 12:00:00', '{"test_id":10, "score": 41.50, "level": "Intermediate",  "rank": 12,   "percentile": 52.00}'),
(511, '2025-03-11 12:00:00', '{"test_id":11, "score": null,  "level": "IN_PROGRESS",   "rank": null, "percentile": null}'),
(512, '2025-03-12 12:00:00', '{"test_id":12, "score": 79.00, "level": "Advanced",      "rank": 5,    "percentile": 84.00}'),
(513, '2025-03-13 12:00:00', '{"test_id":13, "score": 91.20, "level": "Advanced",      "rank": 1,    "percentile": 96.00}'),
(514, '2025-03-14 12:00:00', '{"test_id":14, "score": 38.00, "level": "Beginner",      "rank": 13,   "percentile": 45.00}'),
(515, '2025-03-15 12:00:00', '{"test_id":15, "score": 26.00, "level": "Beginner",      "rank": 14,   "percentile": 30.00}');