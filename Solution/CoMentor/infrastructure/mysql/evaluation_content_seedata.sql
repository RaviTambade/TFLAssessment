use evaluation_content_db;
-- Skill Levels
INSERT INTO skill_levels (level_name, description) VALUES
('Beginner', 'Basic foundational concepts'),
('Intermediate', 'Applied programming concepts'),
('Advanced', 'System design and optimization');

-- Subjects
INSERT INTO subjects (name, description) VALUES
('Java', 'Object-oriented programming language used for application development'),
('NodeJs', 'JavaScript runtime environment for server-side development'),
('DotNet', 'Microsoft framework for building desktop and web applications'),
('Python', 'High-level programming language used for web, AI, and data science'),
('C', 'Procedural programming language used for system programming'),
('C++', 'Object-oriented programming language used for system and application development'),
('ReactJS', 'JavaScript library for building interactive user interfaces'),
('RDBMS', 'Relational Database Management System for storing and managing data');

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

INSERT INTO subject_concepts (subject_id, concept_id)
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

INSERT INTO subject_concepts (subject_id, concept_id)
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

INSERT INTO subject_concepts (subject_id, concept_id)
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


INSERT INTO subject_concepts (subject_id, concept_id)
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

INSERT INTO question_bank 
(title, description, question_type, difficulty_level) 
VALUES
('JVM Purpose','Why is JVM platform independent?','MCQ','Beginner'),
('JVM Memory Areas','Name memory areas in JVM.','MCQ','Intermediate'),
('Garbage Collection Working','How GC works internally?','MOCK_QUESTION','Intermediate'),
('JVM Tuning','How to tune JVM performance?','CODE_REVIEW','Advanced'),
('Build JVM Demo','Create demo showing heap and stack usage.','SAMPLE_PROJECT','Advanced'),
('Inheritance Concept','Explain inheritance in Java.','MCQ','Beginner'),
('Polymorphism Types','Types of polymorphism in Java.','MCQ','Beginner'),
('OOP Scenario','Design OOP model for banking system.','PROBLEM_STATEMENT','Intermediate'),
('OOP Refactor','Improve OOP structure of given code.','CODE_REVIEW','Advanced'),
('OOP Mini Project','Build OOP based student management system.','SAMPLE_PROJECT','Intermediate'),
('Exception Basics','What is checked exception?','MCQ','Beginner'),
('Custom Exception Build','Create custom exception class.','PROBLEM_STATEMENT','Intermediate'),
('Exception Propagation','How exception propagation works?','MOCK_QUESTION','Intermediate'),
('Exception Optimization','Refactor bad exception handling.','CODE_REVIEW','Advanced'),
('Exception Logging System','Build logging with exception handling.','SAMPLE_PROJECT','Advanced'),
('Thread Basics','What is multithreading?','MCQ','Intermediate'),
('Thread Lifecycle','Explain thread states.','MCQ','Intermediate'),
('Thread Sync Problem','Implement synchronization example.','PROBLEM_STATEMENT','Advanced'),
('Deadlock Fix','Fix deadlock in given code.','CODE_REVIEW','Advanced'),
('Thread Pool Project','Build thread pool task executor.','SAMPLE_PROJECT','Advanced'),
('Spring Boot MVC','What is Spring MVC?','MCQ','Intermediate'),
('REST API Creation','Create REST API using Spring Boot.','PROBLEM_STATEMENT','Intermediate'),
('Dependency Injection','Explain DI in Spring.','MOCK_QUESTION','Intermediate'),
('Spring Security Fix','Fix security misconfiguration.','CODE_REVIEW','Advanced'),
('Ecommerce Backend','Build ecommerce backend API.','SAMPLE_PROJECT','Advanced'),
('Async Programming','What is async programming?','MCQ','Intermediate'),
('Promise Usage','How Promise works?','MCQ','Intermediate'),
('Async Await Flow','Explain async await flow.','MOCK_QUESTION','Advanced'),
('Async Refactor','Fix callback hell code.','CODE_REVIEW','Advanced'),
('Async API System','Build async API integration.','SAMPLE_PROJECT','Advanced'),
('Express Basics','What is Express JS?','MCQ','Beginner'),
('Middleware Use','Explain middleware in Express.','MCQ','Intermediate'),
('CRUD API Build','Build CRUD API using Express.','PROBLEM_STATEMENT','Intermediate'),
('Security Fix','Fix JWT authentication flaw.','CODE_REVIEW','Advanced'),
('Node Auth System','Build JWT authentication project.','SAMPLE_PROJECT','Advanced'),
('Event Loop','Explain event loop phases.','MOCK_QUESTION','Advanced'),
('File System Module','Read file using fs module.','PROBLEM_STATEMENT','Beginner'),
('Performance Fix','Optimize blocking code.','CODE_REVIEW','Advanced'),
('RealTime Chat','Build WebSocket chat app.','SAMPLE_PROJECT','Advanced'),
('Primary Key','What is primary key?','MCQ','Beginner'),
('Foreign Key','Purpose of foreign key?','MCQ','Beginner'),
('Normalization Goal','Why normalize DB?','MCQ','Beginner'),
('3NF Example','Normalize table to 3NF.','PROBLEM_STATEMENT','Intermediate'),
('BCNF Scenario','Explain BCNF violation.','MOCK_QUESTION','Advanced'),
('Join Types','Types of SQL joins?','MCQ','Intermediate'),
('Complex Join Query','Write multi-table join query.','PROBLEM_STATEMENT','Intermediate'),
('Query Optimization','Improve slow query.','CODE_REVIEW','Advanced'),
('Index Strategy','Design indexing strategy.','MOCK_QUESTION','Advanced'),
('DB Design Project','Design complete exam DB schema.','SAMPLE_PROJECT','Advanced'),
('ACID Properties','Explain ACID.','MCQ','Advanced'),
('Transaction Example','Write transaction example.','PROBLEM_STATEMENT','Advanced'),
('Deadlock SQL','Detect SQL deadlock.','CODE_REVIEW','Advanced'),
('Stored Procedure Build','Create stored procedure.','PROBLEM_STATEMENT','Intermediate'),
('ERP Database','Build ERP database system.','SAMPLE_PROJECT','Advanced'),
('.NET CLR','What is CLR?','MCQ','Intermediate'),
('LINQ Query','Write LINQ query example.','PROBLEM_STATEMENT','Intermediate'),
('Entity Framework','Explain EF Core.','MCQ','Intermediate'),
('Middleware Pipeline','.NET middleware flow?','MOCK_QUESTION','Advanced'),
('ASP.NET Fix','Fix dependency injection issue.','CODE_REVIEW','Advanced'),
('Hospital API','Build ASP.NET Web API project.','SAMPLE_PROJECT','Advanced'),
('Virtual DOM','What is Virtual DOM?','MCQ','Intermediate'),
('React Hooks','Explain useEffect hook.','MCQ','Intermediate'),
('State Management','Build counter app using hooks.','PROBLEM_STATEMENT','Beginner'),
('Component Refactor','Improve component structure.','CODE_REVIEW','Advanced'),
('FullStack App','Build React + API project.','SAMPLE_PROJECT','Advanced'),
('Microservices Advantage','Main benefit of microservices?','MCQ','Advanced'),
('Monolith vs Microservices','Compare architectures.','MOCK_QUESTION','Advanced'),
('Rate Limiter Design','Design scalable rate limiter.','PROBLEM_STATEMENT','Advanced'),
('Cache Strategy','Design caching mechanism.','MOCK_QUESTION','Advanced'),
('System Refactor','Improve scalability of system.','CODE_REVIEW','Advanced'),
('URL Shortener','Build URL shortener system.','SAMPLE_PROJECT','Advanced'),

('Load Balancer','What is load balancer?','MCQ','Advanced'),
('Horizontal Scaling','Explain horizontal scaling.','MCQ','Advanced'),
('API Gateway Design','Design API gateway.','PROBLEM_STATEMENT','Advanced'),
('Security Hardening','Fix XSS vulnerability.','CODE_REVIEW','Advanced'),
('Distributed System','Build distributed logging system.','SAMPLE_PROJECT','Advanced'),

('Thread Safety','What is race condition?','MCQ','Advanced'),
('Parallelism Concept','Difference concurrency vs parallelism.','MCQ','Advanced'),
('Memory Leak Fix','Detect memory leak.','CODE_REVIEW','Advanced'),
('High Availability Design','Design HA architecture.','MOCK_QUESTION','Advanced'),
('Scalable Chat App','Build scalable chat system.','SAMPLE_PROJECT','Advanced');

-- =========================================================
-- MCQ OPTIONS
-- =========================================================

INSERT INTO mcq_options 
(question_id, option_a, option_b, option_c, option_d) 
VALUES
-- JAVA SECTION
(1, 'Because bytecode runs on JVM', 'Because Java is compiled to C', 'Because OS converts code', 'Because CPU executes directly'),
(2, 'Heap, Stack, Method Area', 'Cache, RAM, ROM', 'CPU, GPU, SSD', 'Thread, Process, Kernel'),

(6, 'Reuse code from parent class', 'Hide data', 'Override methods only', 'Create interfaces'),
(7, 'Compile-time & Runtime', 'Single & Multiple', 'Static & Dynamic', 'Checked & Unchecked'),

(11, 'Exception checked at compile time', 'Exception at runtime only', 'Logical error', 'Syntax error'),

(16, 'Executing multiple threads simultaneously', 'Running multiple programs', 'Using multiple CPUs', 'Parallel database calls'),
(17, 'New, Runnable, Running, Blocked, Terminated', 'Start, Stop', 'Init, Run, End', 'Create, Execute'),

(21, 'Framework for MVC architecture', 'Database tool', 'Testing framework', 'JVM extension'),

-- NODE SECTION
(26, 'Non-blocking execution model', 'Synchronous execution', 'Parallel threads', 'Blocking I/O only'),
(27, 'Object representing future result', 'Loop structure', 'Database call', 'Thread pool'),

(31, 'Web framework for NodeJS', 'Database driver', 'Frontend library', 'Testing framework'),
(32, 'Function executed before request handler', 'Database query', 'Event emitter', 'Loop iteration'),

(36, 'Handles async operations', 'Manages database', 'Compiles JS', 'Encrypts passwords'),

-- DATABASE SECTION
(41, 'Unique identifier for table record', 'Foreign relation', 'Index column', 'Composite key'),
(42, 'Maintains referential integrity', 'Primary identifier', 'Sort column', 'Temporary key'),
(46, 'INNER, LEFT, RIGHT, FULL', 'PRIMARY, FOREIGN', 'UNION, GROUP', 'ASC, DESC'),
(51, 'Atomicity, Consistency, Isolation, Durability', 'Accuracy, Control, Integrity, Data', 'Availability, Consistency', 'None'),

-- DOTNET
(56, 'Common Language Runtime', 'Compiler tool', 'Database engine', 'Web server'),
(57, 'ORM framework for .NET', 'Web browser', 'Compiler', 'Testing tool'),

-- REACT
(61, 'Lightweight copy of real DOM', 'Database layer', 'Backend engine', 'Web server'),

-- SYSTEM DESIGN
(66, 'Independent deployment & scaling', 'Single codebase', 'No APIs', 'No database'),
(67, 'Distributes traffic across servers', 'Encrypts traffic', 'Stores cache', 'Manages DB'),

(72, 'Distributes load across instances', 'Encrypts data', 'Caches requests', 'Monitors logs'),
(73, 'Adding more machines', 'Increasing RAM only', 'Increasing CPU only', 'Using cache'),

(76, 'Multiple threads accessing shared data', 'Memory overflow', 'Garbage collection issue', 'Compilation error'),
(77, 'Concurrency = structure, Parallelism = execution', 'Same concept', 'Parallelism only single CPU', 'Concurrency only multi CPU');

-- =========================================================
-- PROBLEM STATEMENTS
-- =========================================================

INSERT INTO problem_statements
(question_id,input_format,output_format,constraints,sample_input,sample_output)
VALUES

-- JAVA
(8,
'Input contains account details and transaction type.',
'Output should display updated account balance.',
'1 <= transactions <= 10^5',
'Account:1000 Deposit:500',
'Updated Balance:1500'),

(12,
'Input contains exception name and message.',
'Output should display custom exception message.',
'Exception name must not be null',
'InvalidAgeException 17',
'Error: Age must be above 18'),

(18,
'Input contains two thread names.',
'Output should show synchronized execution order.',
'Threads must share same object',
'Thread1 Thread2',
'Synchronized Execution Successful'),

(22,
'Input contains product id and quantity.',
'Output should return order confirmation.',
'Quantity > 0',
'101 2',
'Order Confirmed'),

-- NODE / JS
(33,
'Input contains user data in JSON format.',
'Output should return created user object.',
'Valid JSON required',
'{"name":"John"}',
'User Created Successfully'),

(37,
'Input contains file path.',
'Output should display file content.',
'File must exist',
'/tmp/data.txt',
'File Content Displayed'),

(43,
'Input contains transaction id.',
'Output should display optimized query result.',
'Valid DB connection required',
'TXN101',
'Optimized Result Returned'),

-- DATABASE
(47,
'Input contains table schema.',
'Output should return normalized schema.',
'Remove partial dependencies',
'Student(id,name,dept,dept_head)',
'Normalized to 3NF'),

(52,
'Input contains SQL transaction block.',
'Output should confirm transaction commit.',
'Must use BEGIN and COMMIT',
'BEGIN; UPDATE table; COMMIT;',
'Transaction Successful'),

(57,
'Input contains procedure name and parameters.',
'Output should execute stored procedure.',
'Procedure must exist',
'createUser John',
'Procedure Executed'),

-- DOTNET
(62,
'Input contains LINQ query expression.',
'Output should return filtered results.',
'Collection must not be empty',
'list.Where(x=>x>5)',
'Filtered Output'),

-- REACT
(68,
'Input contains initial counter value.',
'Output should increment counter on click.',
'Value >= 0',
'0',
'Counter:1'),

-- SYSTEM DESIGN
(74,
'Input contains API route definitions.',
'Output should design API gateway flow.',
'Microservice architecture required',
'/user,/order',
'Gateway Routing Configured');


-- =========================================================
-- MOCK QUESTIONS
-- =========================================================
INSERT INTO mock_questions 
(question_id, mock_category) 
VALUES

-- JAVA
(3, 'JVM Deep Dive'),
(13, 'Exception Handling Scenario'),
(23, 'Spring Architecture Discussion'),

-- NODE / JS
(28, 'Async Programming Concept'),
(35, 'Event Loop Internals'),

-- DATABASE
(45, 'Normalization & Design'),
(50, 'Indexing & Optimization'),

-- DOTNET
(59, '.NET Middleware Flow'),

-- SYSTEM DESIGN
(64, 'Microservices Architecture'),
(69, 'Caching Strategy Design'),
(75, 'High Availability Architecture');


-- =========================================================
-- CODE SNIPPETS
-- =========================================================
INSERT INTO code_snippets 
(question_id, language, starter_code) 
VALUES

-- JAVA CODE REVIEWS
(4, 'Java',
'public class JVMTuning {
    public static void main(String[] args) {
        String s = "";
        for(int i=0;i<10000;i++){
            s += i; // inefficient string concatenation
        }
        System.out.println(s);
    }
}'),

(9, 'Java',
'class Bank {
    public double balance;
    public void withdraw(double amount){
        balance = balance - amount;
    }
}'),

(14, 'Java',
'try {
    int x = 10/0;
} catch(Exception e){
    // empty catch block
}'),

(19, 'Java',
'class DeadlockExample {
    Object lock1 = new Object();
    Object lock2 = new Object();
    void method1(){
        synchronized(lock1){
            synchronized(lock2){}
        }
    }
    void method2(){
        synchronized(lock2){
            synchronized(lock1){}
        }
    }
}'),

(24, 'Java',
'@Configuration
public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf().disable();
        return http.build();
    }
}'),

-- NODEJS CODE REVIEWS
(29, 'JavaScript',
'function fetchData(){
    fs.readFileSync("data.txt");
    console.log("Done");
}'),

(34, 'JavaScript',
'app.get("/data", (req,res)=>{
    db.query("SELECT * FROM users", (err,result)=>{
        res.send(result);
    });
});'),

-- DATABASE CODE REVIEW
(38, 'SQL',
'SELECT * FROM orders WHERE YEAR(order_date)=2023;'),

(47, 'SQL',
'CREATE INDEX idx_user ON users(name);'),

(52, 'SQL',
'BEGIN;
UPDATE accounts SET balance=balance-100 WHERE id=1;
-- Missing COMMIT
'),

-- DOTNET
(59, 'C#',
'public class Service {
    private Repository repo;
    public Service(){
        repo = new Repository();
    }
}'),

-- SYSTEM DESIGN / ADVANCED
(64, 'Java',
'class Cache {
    Map<String,String> map = new HashMap<>();
}'),

(70, 'Java',
'public class MemoryLeak {
    static List<Object> list = new ArrayList<>();
    public void add(){
        list.add(new Object());
    }
}'),

(79, 'Java',
'class SharedCounter {
    int count = 0;
    public void increment(){
        count++;
    }
}');

-- =========================================================
-- MINI PROJECTS
-- =========================================================
INSERT INTO mini_projects
(question_id, project_description, evaluation_criteria)
VALUES

-- JAVA PROJECTS
(5,
'Build a Java application demonstrating heap and stack memory usage with runtime monitoring.',
'Code structure, memory handling, performance analysis, documentation'),

(10,
'Develop a student management system using OOP principles with CRUD operations.',
'OOP design, encapsulation, modularity, database integration'),

(15,
'Create centralized logging system with proper exception handling.',
'Exception handling, logging framework usage, scalability'),

(20,
'Build a multithreaded task executor using thread pool.',
'Thread safety, concurrency handling, performance'),

(25,
'Develop ecommerce backend REST API using Spring Boot.',
'Layered architecture, security, REST standards, DB integration'),

-- NODEJS PROJECTS
(30,
'Build asynchronous API integration service using NodeJS.',
'Async handling, error management, performance'),

(39,
'Develop JWT-based authentication system.',
'Security, token validation, middleware usage'),

(48,
'Create real-time chat application using WebSockets.',
'Event handling, scalability, clean code'),

-- DATABASE PROJECTS
(54,
'Design complete exam database schema with normalization.',
'Proper normalization, indexing strategy, constraints'),

(58,
'Develop ERP database system with stored procedures.',
'Schema design, ACID compliance, query performance'),

-- DOTNET PROJECTS
(63,
'Build ASP.NET Web API project for hospital management.',
'Clean architecture, dependency injection, API security'),

-- REACT PROJECTS
(71,
'Develop full stack React + Backend integration project.',
'Component design, state management, API integration'),

-- SYSTEM DESIGN PROJECTS
(79,
'Build scalable distributed logging system.',
'Scalability, fault tolerance, logging strategy, documentation');

INSERT INTO question_subject_concept_map (question_id, subject_concept_id) VALUES
-- JAVA Questions (Subject 1: starts at bridge ID 45)
(1, 53),   -- JVM Purpose -> JVM
(2, 53),   -- JVM Memory Areas -> JVM
(3, 84),   -- Garbage Collection Working -> Garbage Collection (Corrected)
(4, 53),   -- JVM Tuning -> JVM
(5, 53),   -- Build JVM Demo -> JVM
(6, 67),   -- Inheritance Concept -> Inheritance (Corrected)
(7, 68),   -- Polymorphism Types -> Polymorphism (Corrected)
(8, 80),   -- OOP Scenario -> Classes
(9, 63),   -- OOP Refactor -> SOLID
(10, 80),  -- OOP Mini Project -> Classes
(11, 48),  -- Exception Basics -> Exception Handling
(21, 86),  -- Spring Boot MVC -> Spring Boot MVC
(22, 87),  -- REST API Creation -> Spring Boot API
(23, 62),  -- Dependency Injection -> Dependency Injection
(24, 87),  -- Spring Security Fix -> Spring Boot API
(25, 87),  -- Ecommerce Backend -> Spring Boot API

-- NODEJS / JavaScript (Subject 2: starts at bridge ID 89)
(26, 89),  -- Async Programming -> Async/Await
(27, 89),  -- Promise Usage -> Async/Await
(31, 100), -- Express Basics -> Express JS
(32, 101), -- Middleware Use -> Middleware
(33, 100), -- CRUD API Build -> Express JS
(35, 128), -- Node Auth System -> JWT Authentication
(36, 94),  -- Event Loop -> NodeJS Runtime
(37, 92),  -- File System Module -> File System (fs)

-- RDBMS (Subject 8: starts at bridge ID 129)
(40, 129), -- Primary Key -> Keys and Constraints
(41, 129), -- Foreign Key -> Keys and Constraints
(42, 134), -- Normalization Goal -> Normalization
(43, 134), -- 3NF Example -> Normalization
(45, 136), -- Join Types -> Joins
(47, 145), -- Query Optimization -> Performance and Optimization
(50, 144), -- ACID Properties -> Transactions and ACID

-- .NET (Subject 3: starts at bridge ID 1)
(55, 9),   -- .NET CLR -> CLR
(56, 6),   -- LINQ Query -> LINQ
(57, 7),   -- Entity Framework -> Entity Framework
(58, 15),  -- Middleware Pipeline -> Middleware
(60, 36);  -- Hospital API -> Web API