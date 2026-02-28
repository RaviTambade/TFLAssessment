INSERT INTO tests 
(testid, title, description, total_marks, duration_minutes, created_by, status, created_at, smeid)
VALUES
(1, 
 'dotnet Test',
 'C# Test assessment covering core technical concepts including OOP and exception handling.',
 100,
 60,
 3,
 'scheduled',
 '2024-01-10',
 3),

(2,
 'RDMS Test',
 'MySQL Test assessment covering queries, joins, indexing and optimization.',
 50,
 45,
 5,
 'scheduled',
 '2024-01-15',
 5),
 
(3,
 'Java Test',
 'Java assessment covering OOP concepts, collections framework, exception handling and multithreading basics.',
 100,
 75,
 4,
 'scheduled',
 '2024-01-20',
 3),

(4,
 ' Java Test 1',
 'Advanced Java assessment including JDBC, Servlets, JSP and basic Spring framework concepts.',
 120,
 90,
 6,
 'scheduled',
 '2024-01-25',
 3),

(5,
 'Node.js Test',
 'Node.js assessment covering event loop, asynchronous programming, Express.js and REST API development.',
 80,
 60,
 7,
 'scheduled',
 '2024-02-01',
 5),

(6,
 'Node.js Test 1',
 'Comprehensive Node.js test focusing on middleware, authentication, JWT, and database integration with MongoDB.',
 100,
 75,
 8,
 'scheduled',
 '2024-02-05',
 5),
 (7,
 'Dotnet Test 3',
 'Assessment covering MVC architecture, Razor views, model binding, validation, and middleware pipeline.',
 110,
 90,
 3,
 'scheduled',
 '2024-03-10',
 3),

(8,
 'Dotnet Test 2',
 'Advanced C# test including LINQ, delegates, events, async/await, multithreading, and memory management.',
 120,
 95,
 4,
 'scheduled',
 '2024-03-12',
 3),

(9,
 'RDMS Test 2',
 'Assessment covering basic SQL queries, SELECT statements, WHERE clause, GROUP BY, and ORDER BY.',
 80,
 60,
 5,
 'scheduled',
 '2024-03-28',
 5);
 
 
--  data for test_schedules
 INSERT INTO test_schedules 
(id, testid, start_time, end_time, allowed_attempts)
VALUES

(1, 1, '2024-04-01 10:00:00', '2024-04-01 12:00:00', 2),

(2, 2, '2024-04-02 11:00:00', '2024-04-02 12:30:00', 1),

(3, 3, '2024-04-03 09:30:00', '2024-04-03 11:30:00', 3),

(4, 4, '2024-04-04 10:00:00', '2024-04-04 01:00:00', 2),

(5, 5, '2024-04-05 02:00:00', '2024-04-05 04:00:00', 1),

(6, 6, '2024-04-06 10:30:00', '2024-04-06 12:30:00', 2),

(7, 7, '2024-04-07 09:00:00', '2024-04-07 11:30:00', 3),

(8, 8, '2024-04-08 01:00:00', '2024-04-08 03:30:00', 2),

(9, 9, '2024-04-09 10:00:00', '2024-04-09 12:00:00', 1);


-- data for test_questions
INSERT INTO test_questions
(id, testid, question_id, marks, sequence_order)
VALUES


(1, 1, 101, 10, 1),
(2, 1, 102, 10, 2),
(3, 1, 103, 10, 3),
(4, 1, 104, 10, 4),
(5, 1, 105, 10, 5),


(6, 2, 106, 10, 1),
(7, 2, 107, 10, 2),
(8, 2, 108, 10, 3),
(9, 2, 109, 10, 4),
(10, 2, 110, 10, 5),


(11, 3, 111, 10, 1),
(12, 3, 112, 10, 2),
(13, 3, 113, 10, 3),
(14, 3, 114, 10, 4),
(15, 3, 115, 10, 5),


(16, 5, 116, 10, 1),
(17, 5, 117, 10, 2),
(18, 5, 118, 10, 3),
(19, 5, 119, 10, 4),
(20, 5, 120, 10, 5);



-- data for test_assessment_criteria

INSERT INTO test_assessment_criteria (id,testid, concepts, weightage)
VALUES
(1, 1, 'OOP Concepts', 10),
(2, 1, 'LINQ', 10),
(3, 1, 'Entity Framework', 10),
(4, 1, 'ADO.NET', 10),
(5, 1, 'MVC Architecture', 10),
(6, 1, 'Dependency Injection', 10),
(7, 1, 'SOLID Principles', 10),
(8, 1, 'Web API', 10),
(9, 1, 'Garbage Collection', 10),
(10, 1, 'Middleware', 10),


(11, 3, 'JVM', 10),
(12, 3, 'JDBC', 10),
(13, 3, 'Hibernate', 10),
(14, 3, 'Spring Boot MVC', 10),
(15, 3, 'JPA', 10),
(16, 3, 'Multithreading', 10),
(17, 3, 'Exception Handling', 10),
(18, 3, 'Collections Framework', 10),
(19, 3, 'Servlet Filters', 10),
(20, 3, 'Maven', 10),


(21, 5, 'Node.js Runtime', 10),
(22, 5, 'Express JS', 10),
(23, 5, 'JWT Authentication', 10),
(24, 5, 'Async/Await', 10),
(25, 5, 'EventEmitter', 10),
(26, 5, 'NPM', 10),
(27, 5, 'MySQL Connectivity', 10),
(28, 5, 'JSON Serialization', 10),
(29, 5, 'Callback Functions', 10),
(30, 5, 'File System (fs)', 10),


(31, 9, 'Database Design Fundamentals', 10),
(32, 9, 'Normalization', 10),
(33, 9, 'Joins', 10),
(34, 9, 'Indexes', 10),
(35, 9, 'Stored Procedures', 10),
(36, 9, 'Triggers', 10),
(37, 9, 'Transactions & ACID', 10),
(38, 9, 'Views', 10),
(39, 9, 'Security & Access Control', 10),
(40, 9, 'Performance & Optimization', 10);

-- data for the assessments

INSERT INTO assessments 
(id, testid, candidate_id, attempt_number, start_time, end_time, status, total_score)
VALUES
(1, 1, 6, 1, '2026-02-25 10:58:05', '2026-02-25 11:25:30', 'completed', 78),

(2, 3, 4, 1, '2026-02-27 10:59:10', '2026-02-27 11:15:45', 'completed', 65),

(3, 5, 4, 1, '2026-02-27 12:06:05', '2026-02-27 12:32:10', 'completed', 82),

(4, 9, 4, 2, '2026-02-27 13:00:00', '2026-02-27 13:14:30', 'completed', 74),

(5, 5, 6, 1, '2026-02-27 13:01:10', '2026-02-27 13:28:45', 'completed', 88),

(6, 9, 7, 1, '2026-02-27 14:49:05', '2026-02-27 15:17:20', 'completed', 91),

(7, 3, 6, 1, '2026-02-27 15:11:00', '2026-02-27 16:30:00', 'completed', 69),

(8, 1, 4, 1, '2026-02-27 15:16:00', '2026-02-27 15:40:00', 'completed', 73),

(9, 9, 6, 1, '2026-02-27 16:16:10', '2026-02-27 16:50:20', 'completed', 84),

(10, 5, 4, 1, '2026-02-27 20:16:00', '2026-02-27 21:40:00', 'in_progress', 50);