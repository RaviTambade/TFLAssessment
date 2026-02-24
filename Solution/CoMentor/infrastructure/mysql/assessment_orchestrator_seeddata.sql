USE assessment_orchestrator_db;

-- Test
INSERT INTO tests (title, description, total_marks, duration_minutes, created_by, status)
VALUES ('C & DS Assessment', 'Basic coding evaluation', 100, 60, 1, 'PUBLISHED');

-- Schedule
INSERT INTO test_schedules (test_id, start_time, end_time, allowed_attempts)
VALUES (1, '2026-03-01 10:00:00', '2026-03-01 11:00:00', 1);

-- Test Questions (External question IDs)
INSERT INTO test_questions (test_id, question_id, marks, sequence_order)
VALUES
(1,1,30,1),
(1,2,50,2),
(1,3,20,3);

-- Assessment (Candidate Attempt)
INSERT INTO assessments (test_id, candidate_id, attempt_number, start_time, status)
VALUES (1,101,1,'2026-03-01 10:05:00','IN_PROGRESS');