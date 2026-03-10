USE skill_taxonomy_db;

-- Skill Levels
INSERT INTO skill_levels (level_name, description) VALUES
('Beginner', 'Basic foundational concepts'),
('Intermediate', 'Applied programming concepts'),
('Advanced', 'System design and optimization');

-- Concepts
INSERT INTO concepts (name, description, level_id) VALUES
('Variables and Data Types', 'Understanding primitive and reference data types', 1),
('Control Statements', 'If-else, loops and branching', 1),
('Functions and Methods', 'Reusable blocks of code', 2),
('Object-Oriented Programming', 'Encapsulation, Abstraction, Inheritance, Polymorphism', 3),
('Exception Handling', 'Handling runtime errors gracefully', 3),
('Multithreading', 'Concurrent execution of threads', 1),
('Collections Framework', 'List, Set, Map implementations', 2),
('JDBC Connectivity', 'Connecting Java applications with databases', 3),
('REST API Design', 'Designing RESTful web services', 1),
('Microservices Architecture', 'Distributed service-based architecture', 2);

-- Concept Prerequisites
INSERT INTO concept_prerequisites (concept_id, prerequisite_concept_id) VALUES
(2,1),   -- Control Statements requires Variables
(3,2),   -- Functions requires Control Statements
(4,3),   -- OOP requires Functions
(5,3),   -- Exception Handling requires Functions
(6,4),   -- Multithreading requires OOP
(7,4),   -- Collections requires OOP
(8,7),   -- JDBC requires Collections
(9,4),   -- REST requires OOP
(10,9),  -- Microservices requires REST
(10,6);  -- Microservices requires Multithreading

-- Runtimes
INSERT INTO runtimes (name) VALUES
('JVM'),
('.NET CLR'),
('Node.js'),
('Python Interpreter'),
('Go Runtime'),
('Ruby MRI'),
('PHP Engine'),
('Android Runtime'),
('Deno'),
('Kotlin Native');

-- Languages
INSERT INTO languages (title, runtimeid) VALUES
('Java', 1),
('C#', 2),
('JavaScript', 3),
('Python', 4),
('Go', 5),
('Ruby', 6),
('PHP', 7),
('Kotlin', 1),
('TypeScript', 3),
('Dart', 8);

-- Layers
INSERT INTO layers (name) VALUES
('Frontend'),
('Backend'),
('Database'),
('DevOps'),
('Mobile'),
('Cloud'),
('Security'),
('AI/ML'),
('Testing'),
('Data Engineering');

-- Technology Map
INSERT INTO technology_map (techName, langId, layerId) VALUES
('Spring Boot', 1, 2),
('ASP.NET Core', 2, 2),
('Express.js', 3, 2),
('Django', 4, 2),
('React', 3, 1),
('Angular', 9, 1),
('Flutter', 10, 5),
('Hibernate', 1, 3),
('Docker', 5, 4),
('TensorFlow', 4, 8);

-- Technology Concepts
INSERT INTO technology_concepts ( techid, concept_id) VALUES
( 1, 4),   -- Spring Boot -> OOP
( 1, 9),   -- Spring Boot -> REST
( 3, 9),   -- Express -> REST
( 4, 4),   -- Django -> OOP
( 5, 2),   -- React -> Control Statements
( 8, 8),   -- Hibernate -> JDBC
( 9, 6),   -- Docker -> Multithreading (infra concept)
( 10, 6),  -- TensorFlow -> Multithreading
( 2, 4),   -- ASP.NET -> OOP
( 7, 1);  -- Flutter -> Variables


-- Concepts
/*
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
*/









