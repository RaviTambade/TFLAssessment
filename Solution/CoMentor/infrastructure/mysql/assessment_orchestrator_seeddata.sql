-- =============================================
-- tests table
-- =============================================
INSERT INTO tests (title, description, duration_minutes, created_by, status)
VALUES
('Java Basics Test', 'Core Java fundamentals', 60, 101, 'PUBLISHED'),
('Advanced Java', 'OOP, Streams, JVM', 90, 101, 'PUBLISHED'),
('SQL Fundamentals', 'Basic SQL queries', 45, 102, 'PUBLISHED'),
('Advanced SQL', 'Joins, indexes, optimization', 90, 102, 'PUBLISHED'),
('C Programming', 'C language basics', 60, 103, 'PUBLISHED'),
('Data Structures', 'Arrays, Lists, Trees', 90, 104, 'PUBLISHED'),
('Algorithms', 'Sorting and searching', 90, 104, 'PUBLISHED'),
('Python Basics', 'Syntax and fundamentals', 45, 105, 'PUBLISHED'),
('Python Advanced', 'OOP, decorators', 90, 105, 'PUBLISHED'),
('JavaScript Basics', 'JS fundamentals', 45, 106, 'PUBLISHED'),
('React Basics', 'React core concepts', 90, 106, 'DRAFT'),
('Node.js Basics', 'Node fundamentals', 60, 107, 'PUBLISHED'),
('System Design', 'Scalability and design', 120, 108, 'PUBLISHED'),
('Aptitude Test', 'Logical and quantitative aptitude', 45, 109, 'PUBLISHED'),
('HR Screening', 'Behavioral questions', 30, 110, 'PUBLISHED');

-- =============================================
-- test_questions table (marks column removed)
-- =============================================
INSERT INTO test_questions (testid, question_id, sequence_order)
VALUES
(1, 1001, 1),
(1, 1002, 2),
(2, 2001, 1),
(2, 2002, 2),
(3, 3001, 1),
(4, 4001, 1),
(5, 5001, 1),
(6, 6001, 1),
(7, 7001, 1),
(8, 8001, 1),
(9, 9001, 1),
(10, 10001, 1),
(11, 11001, 1),
(12, 12001, 1),
(13, 13001, 1);

-- =============================================
-- assessments table (total_score column removed)
-- =============================================
INSERT INTO assessments (testid, candidate_id, attempt_number, start_time, end_time, status)
VALUES
(1, 501, 1, '2025-03-01 10:00:00', '2025-03-01 11:00:00', 'COMPLETED'),
(2, 502, 1, '2025-03-02 10:00:00', '2025-03-02 11:30:00', 'COMPLETED'),
(3, 503, 1, '2025-03-03 09:00:00', '2025-03-03 09:45:00', 'COMPLETED'),
(4, 504, 1, '2025-03-04 10:00:00', '2025-03-04 11:30:00', 'COMPLETED'),
(5, 505, 1, '2025-03-05 10:00:00', '2025-03-05 11:00:00', 'COMPLETED'),
(6, 506, 1, '2025-03-06 09:30:00', '2025-03-06 11:00:00', 'COMPLETED'),
(7, 507, 1, '2025-03-07 10:00:00', '2025-03-07 11:30:00', 'COMPLETED'),
(8, 508, 1, '2025-03-08 09:00:00', '2025-03-08 09:45:00', 'COMPLETED'),
(9, 509, 1, '2025-03-09 10:00:00', '2025-03-09 11:30:00', 'COMPLETED'),
(10, 510, 1, '2025-03-10 09:00:00', '2025-03-10 09:45:00', 'COMPLETED'),
(11, 511, 1, '2025-03-11 10:00:00', NULL, 'IN_PROGRESS'),
(12, 512, 1, '2025-03-12 10:00:00', '2025-03-12 11:00:00', 'COMPLETED'),
(13, 513, 1, '2025-03-13 09:00:00', '2025-03-13 11:00:00', 'COMPLETED'),
(14, 514, 1, '2025-03-14 09:00:00', '2025-03-14 09:45:00', 'COMPLETED'),
(15, 515, 1, '2025-03-15 10:00:00', '2025-03-15 10:30:00', 'COMPLETED');