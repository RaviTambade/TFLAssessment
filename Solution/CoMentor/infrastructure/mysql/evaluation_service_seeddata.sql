USE evaluation_service_db;

-- Candidate Answers
INSERT INTO candidate_answers (assessment_id, question_id, candidate_id, submitted_code)
VALUES
(1,1,101,'// C code to reverse string'),
(1,2,101,'// Linked list implementation');

-- Auto Grading
INSERT INTO auto_grading_results (answer_id, score, execution_time, memory_used, test_cases_passed)
VALUES
(1,28,0.02,1.5,5),
(2,45,0.05,2.1,8);

-- Concept Wise Results
INSERT INTO concept_wise_results (assessment_id, concept_id, score, mastery_level)
VALUES
(1,1,28,'Strong'),
(1,3,45,'Moderate');