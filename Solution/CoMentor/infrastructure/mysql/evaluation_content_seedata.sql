USE evaluation_content_db;

-- Questions
INSERT INTO question_bank (title, description, question_type, difficulty_level) VALUES
('Reverse a String', 'Write a C program to reverse a string.', 'CODING', 'Beginner'),
('Implement Linked List', 'Create a singly linked list in C.', 'CODING', 'Intermediate'),
('SQL Join Query', 'Write a query using INNER JOIN.', 'MCQ', 'Intermediate');

-- Question ↔ Concept Mapping (External concept IDs)
INSERT INTO question_concept_map (question_id, concept_id) VALUES
(1,1),
(2,3),
(3,5);

-- Question ↔ Subject Mapping (External subject IDs)
INSERT INTO question_subject_map (question_id, subject_id) VALUES
(1,1),
(2,2),
(3,3);

-- Problem Statements
INSERT INTO problem_statements (question_id, input_format, output_format, constraints)
VALUES
(1, 'Input: String', 'Output: Reversed String', 'Length <= 100'),
(2, 'Input: Node values', 'Output: Linked list traversal', 'Max nodes 100');

-- Code Snippets
INSERT INTO code_snippets (question_id, language, starter_code) VALUES
(1, 'C', '#include<stdio.h>\nint main(){ return 0; }'),
(2, 'C', '#include<stdio.h>\nstruct Node{ int data; struct Node* next; };');

-- Mock Question
INSERT INTO mock_questions (question_id, mock_category)
VALUES (3, 'Database Mock Test');