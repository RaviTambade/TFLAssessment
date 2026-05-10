    USE evaluation_content_db;

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

    INSERT INTO question_type (question_type, marks) VALUES
    ('MCQ',2),
    ('PROBLEM_STATEMENT',10),
    ('CODE_SNIPPET',15),
    ('MINI_PROJECT',25),
    ('MOCK',20);

    INSERT INTO question_bank (title, description, question_type_id, difficulty_level) VALUES

    ('Java Variables','Which is a valid primitive type?',1,'Beginner'),
    ('Control Flow','Which loop executes at least once?',1,'Beginner'),
    ('OOP Concept','Which principle supports inheritance?',1,'Intermediate'),
    ('REST Status Code','Which code means Not Found?',1,'Beginner'),
    ('Collections Type','Which allows key-value pairs?',1,'Intermediate'),

    ('Sum of Numbers','Calculate sum of N integers.',2,'Beginner'),
    ('Palindrome String','Check if string is palindrome.',2,'Intermediate'),
    ('Factorial Using Loop','Compute factorial of N.',2,'Beginner'),
    ('Prime Checker','Determine if number is prime.',2,'Intermediate'),
    ('Fibonacci Series','Print Fibonacci series up to N.',2,'Intermediate'),

    ('Reverse String Function','Complete reverse method.',3,'Intermediate'),
    ('Thread Creation','Implement Runnable interface.',3,'Advanced'),
    ('JDBC Connection','Complete DB connection code.',3,'Advanced'),
    ('REST Controller','Complete Spring REST endpoint.',3,'Intermediate'),
    ('Exception Handling Block','Fix try-catch logic.',3,'Beginner'),

    ('Spring Boot CRUD API','Develop REST CRUD service.',4,'Advanced'),
    ('JDBC Integration Module','Database connectivity module.',4,'Advanced'),
    ('Microservice Design','Design service communication.',4,'Advanced'),
    ('Collections Based Inventory','Inventory using Map.',4,'Intermediate'),
    ('Multithreaded File Processor','Process files concurrently.',4,'Advanced'),

    ('Java Backend Mock 1','Core Java + OOP round.',5,'Advanced'),
    ('Spring REST Mock','REST API interview round.',5,'Advanced'),
    ('JDBC Mock Interview','Database connectivity round.',5,'Advanced'),
    ('Multithreading Mock','Concurrency round.',5,'Advanced'),
    ('Microservices Mock','Architecture discussion round.',5,'Advanced');
    
    INSERT INTO mcq_options (question_id, option_a, option_b, option_c, option_d) VALUES
    (1,'int','StringBuilder','ArrayList','HashMap'),
    (2,'do-while','for','if','switch'),
    (3,'Polymorphism','Compilation','Deployment','Serialization'),
    (4,'404','200','500','301'),
    (5,'HashMap','ArrayList','Stack','Queue');

    
    INSERT INTO problem_statements
    (question_id,input_format,output_format,constraints,sample_input,sample_output) VALUES
    (6,'N followed by integers','Print sum','1<=N<=1000','5\n1 2 3 4 5','15'),
    (7,'Single string','true/false','Length<=1000','madam','true'),
    (8,'Integer N','Factorial value','1<=N<=20','5','120'),
    (9,'Integer N','true/false','1<=N<=10000','7','true'),
    (10,'Integer N','Fibonacci series','1<=N<=50','5','0 1 1 2 3');


    INSERT INTO code_snippets (question_id,language,starter_code) VALUES
    (11,'Java','public String reverse(String s){ }'),
    (12,'Java','class MyThread implements Runnable { public void run(){ } }'),
    (13,'Java','Connection con = DriverManager.getConnection(url,user,pass);'),
    (14,'Java','@GetMapping("/users") public List<User> getUsers(){ }'),
    (15,'Java','try { } catch(Exception e) { }');


    INSERT INTO mini_projects (question_id,project_description,evaluation_criteria) VALUES
    (16,'Build CRUD REST API using Spring Boot','Architecture, Validation, Testing'),
    (17,'Implement JDBC connectivity layer','Connection handling, DAO pattern'),
    (18,'Design microservices with API gateway','Scalability, Service communication'),
    (19,'Inventory management using HashMap','Data structure usage, Performance'),
    (20,'Multi-threaded file processing system','Concurrency control, Thread safety');


    INSERT INTO mock_questions (question_id,mock_category) VALUES
    (21,'Core Java + OOP'),
    (22,'REST + Spring'),
    (23,'Database + JDBC'),
    (24,'Concurrency'),
    (25,'Microservices Architecture');


    INSERT INTO question_technology_concept_maps (question_id,technology_concepts_id) VALUES
    (1,10),(2,5),(3,1),(4,2),(5,6),
    (6,10),(7,5),(8,1),(9,6),(10,5),
    (11,1),(12,7),(13,6),(14,2),(15,4),
    (16,1),(17,6),(18,2),(19,6),(20,7),
    (21,1),(22,2),(23,6),(24,7),(25,2);

    UPDATE mcq_options
    SET correct_option = 'A'
    WHERE question_id = 1;

    UPDATE mcq_options
    SET correct_option = 'A'
    WHERE question_id = 2;

    UPDATE mcq_options
    SET correct_option = 'A'
    WHERE question_id = 3;

    UPDATE mcq_options
    SET correct_option = 'A'
    WHERE question_id = 4;

    UPDATE mcq_options
    SET correct_option = 'A'
    WHERE question_id = 5;
