USE skill_taxonomy_db;

-- Skill Levels
INSERT INTO skill_levels (level_name, description) VALUES
('Beginner', 'Basic foundational concepts'),
('Intermediate', 'Applied programming concepts'),
('Advanced', 'System design and optimization');

-- Subjects
INSERT INTO subjects (name, description) VALUES
('C Programming', 'Structured programming using C'),
('Data Structures', 'Core data structures and algorithms'),
('Databases', 'SQL and relational database systems');

-- Concepts
INSERT INTO concepts (name, description, level_id) VALUES
('Variables and Data Types', 'Primitive and derived types in C', 1),
('Pointers', 'Memory address manipulation', 2),
('Linked List', 'Dynamic linear data structure', 2),
('Binary Search Tree', 'Tree-based searching structure', 3),
('SQL Joins', 'Combining multiple tables', 2);

-- Subject ↔ Concept Mapping
INSERT INTO subject_concepts (subject_id, concept_id) VALUES
(1,1),(1,2),
(2,3),(2,4),
(3,5);

-- Concept Prerequisites
INSERT INTO concept_prerequisites (concept_id, prerequisite_concept_id) VALUES
(2,1),   -- Pointers require Variables
(3,2);   -- Linked List requires Pointers