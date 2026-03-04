USE skill_taxonomy_db;

-- Skill Levels
INSERT INTO skill_levels (level_name, description) VALUES
('Beginner', 'Basic foundational concepts'),
('Intermediate', 'Applied programming concepts'),
('Advanced', 'System design and optimization');

-- Subjects
/*INSERT INTO subjects (name, description) VALUES
('Java', 'Object-oriented programming language used for application development'),
('NodeJs', 'JavaScript runtime environment for server-side development'),
('DotNet', 'Microsoft framework for building desktop and web applications'),
('Python', 'High-level programming language used for web, AI, and data science'),
('C', 'Procedural programming language used for system programming'),
('C++', 'Object-oriented programming language used for system and application development'),
('ReactJS', 'JavaScript library for building interactive user interfaces'),
('RDBMS', 'Relational Database Management System for storing and managing data');
*/

-- Concepts
INSERT INTO concepts (name, description, level_id) VALUES
('Multithreading', 'Executing multiple threads simultaneously in a program', 2),
('Reflection', 'Inspecting and modifying program structure at runtime', 3),
('Serialization', 'Converting objects into byte streams for storage or transfer', 2),
('Exception Handling', 'Managing runtime errors using try-catch blocks', 1),
('Collection Framework', 'Using built-in data structures like List, Set, and Map', 1),
('LINQ', 'Language Integrated Query for querying collections in .NET', 2),
('Entity Framework', 'ORM framework for database interaction in .NET', 2),
('ADO.NET', 'Data access technology for connecting to databases in .NET', 2),
('.NET CLR', 'Common Language Runtime execution environment', 3),
('.NET CLI Commands', 'Command line tools for .NET development and management', 1),
('Debugging', 'Identifying and fixing errors in code', 1),
('Diagnostics', 'Monitoring and analyzing application performance', 2),
('Logging', 'Recording application events for monitoring and debugging', 1),
('MVC', 'Model View Controller architectural design pattern', 2),
('Middleware', 'Software components handling request-response pipeline', 2),
('Razor Syntax', 'Markup syntax used in ASP.NET for dynamic web pages', 1),
('ASP.NET Filters', 'Custom logic applied before or after controller actions', 3),
('ViewBag/ViewData/TempData', 'Data transfer mechanisms between controller and view', 1),
('Dependency Injection', 'Design pattern for loose coupling and flexibility', 2),
('SOLID', 'Principles for writing maintainable object-oriented code', 2),
('DRY', 'Don’t Repeat Yourself principle to reduce code duplication', 1),
('KISS', 'Keep It Simple, Stupid principle for simple design', 1),
('Design Patterns', 'Reusable solutions to common software design problems', 3),
('Inheritance', 'Acquiring properties and behavior from parent class', 1),
('Polymorphism', 'Ability to take multiple forms in object-oriented programming', 1),
('Interfaces', 'Defining contracts that classes must implement', 1),
('Delegate', 'Type-safe function pointers in .NET', 2),
('Events', 'Mechanism for communication between objects', 2),
('File IO', 'Reading and writing files in a system', 1),
('ORM', 'Object Relational Mapping for database interaction', 2),
('HTTP Pipeline', 'Request processing pipeline in web applications', 3),
('Session Management', 'Maintaining user state across requests', 2),
('Caching', 'Storing frequently accessed data for faster retrieval', 2),
('Monolithic Architecture', 'Single unified application architecture', 2),
('Microservices Architecture', 'Distributed architecture with independent services', 3),
('Web API', 'Interface for communication between applications over HTTP', 1),
('Containment', 'Relationship where object contains another object', 2),
('Aggregation', 'Weak relationship between objects', 2),
('Classes', 'Blueprint for creating objects', 1),
('Static Variables', 'Variables shared among all instances of a class', 1),
('Static Function', 'Functions that belong to class rather than object', 1),
('Garbage Collection', 'Automatic memory management process', 2),
('Parallelism', 'Executing multiple tasks simultaneously', 3),
('Kestrel', 'Cross-platform web server for ASP.NET Core', 2);



INSERT INTO concepts (name, description, level_id) VALUES
('Java Stream', 'Processing collections using functional programming features', 2),
('Hibernate', 'ORM framework for database interaction in Java', 2),
('JDBC', 'Java Database Connectivity for database operations', 1),
('JVM', 'Java Virtual Machine for executing Java bytecode', 2),
('Maven', 'Build automation and dependency management tool', 1),
('JSP Tag', 'Tags used in JavaServer Pages to simplify JSP development', 1),
('Servlet Filters', 'Components for filtering requests and responses', 2),
('Action Listener', 'Event handling mechanism in Java GUI programming', 1),
('Spring Boot MVC', 'Framework for building web applications using MVC pattern', 2),
('Spring Boot API', 'Creating RESTful APIs using Spring Boot', 2),
('JPA', 'Java Persistence API for ORM and database management', 2);


INSERT INTO concepts (name, description, level_id) VALUES
('Async/Await', 'Handling asynchronous operations in JavaScript', 2),
('JSON Serialization', 'Converting objects to JSON format and vice versa', 1),
('Array Operations', 'Manipulating arrays using built-in JavaScript methods', 1),
('File System (fs)', 'Module for handling file operations in NodeJS', 2),
('NodeJS MySQL Connectivity', 'Connecting NodeJS applications with MySQL database', 2),
('NodeJS Runtime', 'Environment for executing JavaScript outside browser', 1),
('npm', 'Package manager for installing NodeJS libraries', 1),
('Express JS', 'Framework for building web applications in NodeJS', 2),
('Callback Function', 'Function passed as argument to another function', 1),
('EventEmitter', 'Handling events in NodeJS applications', 2),
('Node Modules', 'Reusable modules in NodeJS applications', 1),
('package.json', 'Configuration file for NodeJS project dependencies', 1),
('DOM Manipulation', 'Accessing and modifying HTML elements using JavaScript', 1),
('Observer Pattern', 'Design pattern for event subscription and notification', 3),
('RxJS', 'Reactive programming library for asynchronous operations', 3),
('jQuery Selector', 'Selecting HTML elements using jQuery syntax', 1),
('AJAX', 'Technique for asynchronous data communication with server', 2),
('OOP in JavaScript', 'Object-oriented programming concepts in JavaScript', 2),
('Closure', 'Function retaining access to its lexical scope', 2),
('Spread Operator', 'Expanding arrays and objects in JavaScript', 1),
('Local Storage', 'Browser storage for persistent client-side data', 1),
('Session Storage', 'Temporary browser storage for session data', 1),
('JWT Authentication', 'Secure authentication using JSON Web Tokens', 3),
('Fetch Method', 'API for making HTTP requests in JavaScript', 1);


INSERT INTO concepts (name, description, level_id) VALUES
('Keys and Constraints', 'Rules to maintain data integrity in database', 1),
('Data Types', 'Different types of data stored in database columns', 1),
('Database Design Fundamentals', 'Basic principles of database design', 1),
('ER Diagrams', 'Visual representation of database entities and relationships', 1),
('Data Flow Diagrams', 'Diagram showing flow of data in system', 1),
('Normalization', 'Organizing database to reduce redundancy', 2),
('Denormalization', 'Optimizing database performance by reducing normalization', 3),
('Joins', 'Combining data from multiple tables', 2),
('Subqueries', 'Queries nested inside another query', 2),
('Views', 'Virtual tables based on SQL queries', 2),
('Stored Procedures', 'Precompiled SQL code stored in database', 2),
('Functions', 'Reusable SQL logic returning values', 2),
('Triggers', 'Automatic actions executed on database events', 3),
('Events and Scheduling', 'Automating database tasks using scheduler', 3),
('Indexes', 'Improving database query performance', 2),
('Transactions and ACID', 'Ensuring reliable database transactions', 3),
('Performance and Optimization', 'Improving database efficiency and speed', 3),
('Security and Access Control', 'Managing database user permissions', 2);



-- Subject ↔ Concept Mapping

/*INSERT INTO subject_concepts (subject_id, concept_id)
VALUES
(3,1),  -- Multithreading
(3, 2),  -- Reflection
(3, 3),  -- Serialization
(3, 4),  -- Exception Handling
(3, 5),  -- Collection Framework
(3, 6),  -- LINQ
(3, 7) ,  -- Entity Framework
(3, 8),
(3, 9),
(3, 10),
(3, 11),
(3, 12),
(3, 13),
(3, 14),
(3, 15),
(3, 16),
(3, 17),
(3, 18),
(3, 19),
(3, 20),(3, 21),(3, 22),(3, 23),(3, 24),(3, 25),(3, 26),(3, 27),(3, 28),(3, 29),(3, 30),(3, 31),(3, 32),(3, 33),(3, 34),(3, 35),(3, 36),(3, 37),
(3, 38),(3, 39),(3, 40),(3, 41),(3, 42),(3, 43),(3, 44);

*/
/*INSERT INTO subject_concepts (subject_id, concept_id)
VALUES
(1,1),  -- Multithreading
(1, 2),  -- Reflection
(1, 3),  -- Serialization
(1, 4),  -- Exception Handling
(1, 5),  -- Collection Framework
(1, 45),  
(1, 46) ,  -- Entity Framework
(1, 47),
(1, 48),
(1, 49),
(1, 11),
(1, 12),
(1, 13),
(1, 14),
(1, 15),
(1, 50),
(1, 51),
(1, 19),
(1, 20),
(1, 21),(1, 22),(1, 23),(1, 24),(1, 25),(1, 26),(1, 52),(1, 29),(1, 30),(1, 31),(1, 32),(1, 33),(1, 34),(1, 35),(1, 36),(1, 37),(1, 38),(1, 39),(1, 40),(1, 41),
(1, 42),(1, 43),(1, 53),(1, 54),(1, 55);
*/

/*INSERT INTO subject_concepts (subject_id, concept_id)
VALUES
(2,56),  -- Multithreading
(2, 57),  -- Reflection
(2, 4),  -- Serialization
(2, 58),  -- Exception Handling
(2, 59),  -- Collection Framework
(2, 60),  
(2, 61) ,  -- Entity Framework
(2, 62),
(2, 11),
(2, 12),
(2, 13),
(2, 63),
(2, 15),
(2, 26),
(2, 64),
(2, 65),
(2, 30),
(2, 31),
(2, 32),
(2, 33),(2, 34),(2, 35),(2, 36),(2, 37),(2, 38),(2, 39),(2, 66),(2, 67),(2, 68),(2, 79),(2, 69),(2, 70),(2, 71),(2, 72),(2, 73),(2, 74),(2, 75),(2, 76),(2, 77),
(2, 78);
*/

/*INSERT INTO subject_concepts (subject_id, concept_id)
VALUES
(8,80), 
(8, 81), 
(8, 82), 
(8, 83),  
(8, 84),  
(8, 85),  
(8, 86) , 
(8, 87),
(8, 88),
(8, 89),
(8, 90),
(8, 91),
(8, 92),
(8, 93),
(8, 94),
(8, 95),
(8, 96),
(8, 97);
*/


-- Concept Prerequisites
INSERT INTO concept_prerequisites (concept_id, prerequisite_concept_id) VALUES
-- Java prerequisites
(2, 3),   -- Hibernate requires JDBC
(11, 3),  -- JPA requires JDBC
(9, 1),   -- Spring Boot MVC requires Java Stream (core Java knowledge)
(10, 9),  -- Spring Boot API requires Spring Boot MVC
(6, 3),   -- JSP Tag requires JDBC
(7, 6),   -- Servlet Filters requires JSP/Servlet knowledge

-- NodeJS prerequisites
(15, 14), -- Express JS requires NodeJS Runtime
(22, 21), -- EventEmitter requires Callback Function
(28, 24), -- AJAX requires DOM Manipulation
(35, 33), -- JWT Authentication requires Session Storage
(36, 34), -- Fetch Method requires JSON Serialization

-- RDBMS prerequisites
(45, 44), -- Normalization requires Database Design Fundamentals
(47, 46), -- Joins require Keys and Constraints
(48, 46), -- Subqueries require Keys and Constraints
(51, 49), -- Triggers require Stored Procedures
(54, 53), -- Performance Optimization requires Indexes
(55, 53); -- Security requires Database Design Fundamentals

 INSERT INTO runtimes (name) VALUES
('NodeJS'),
('Java'),
('.NET'),
('Python'),
('C/C++'),
('Go');
 INSERT INTO languages (title, runtimeid) VALUES
('JavaScript', 1),   -- NodeJS
('Java', 2),         -- Java
('C#', 3),           -- .NET
('Python', 4);       -- Python
 INSERT INTO layers (name) VALUES
('Frontend'),
('Backend'),
('Database'),
('AI'),
('Testing'),
('DevOps');
 INSERT INTO technology_map (techName, langId, layerId) VALUES
('Spring Boot', 2, 2),     -- Java, Backend
('React', 1, 1),           -- JavaScript, Frontend
('MySQL', 2, 3),           -- Java, Database
('NodeJS', 1, 2),          -- JavaScript, Backend
('Docker', 2, 6),          -- Java, DevOps
('TensorFlow', 4, 4);      -- Python, AI
