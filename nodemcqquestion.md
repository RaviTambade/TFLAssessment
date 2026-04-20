use demo;
CREATE TABLE questions (
  question_id BIGINT NOT NULL AUTO_INCREMENT,
  description VARCHAR(255) DEFAULT NULL,
  question_type VARCHAR(255) DEFAULT NULL,
  difficulty_level VARCHAR(255) DEFAULT NULL,
  created_at DATETIME DEFAULT NULL,
  status TINYINT(1) DEFAULT NULL,
  PRIMARY KEY (question_id)
);

INSERT INTO questions (description, question_type, difficulty_level, created_at, status) VALUES
('What is the role of Node.js in a web server?', 'MCQ', 'BEGINNER', NOW(), 1),
('Which module is used to create a server in Node.js?', 'MCQ', 'BEGINNER', NOW(), 1),
('What method is used to create a server?', 'MCQ', 'BEGINNER', NOW(), 1),
('What are the parameters of http.createServer() callback?', 'MCQ', 'INTERMEDIATE', NOW(), 1),
('What does req represent?', 'MCQ', 'BEGINNER', NOW(), 1),
('What does res represent?', 'MCQ', 'BEGINNER', NOW(), 1),
('Which method sends response to client?', 'MCQ', 'BEGINNER', NOW(), 1),
('What happens if res.end() is not called?', 'MCQ', 'INTERMEDIATE', NOW(), 1),
('Which object contains URL and method info?', 'MCQ', 'BEGINNER', NOW(), 1),
('Which event is triggered when request is received?', 'MCQ', 'INTERMEDIATE', NOW(), 1),
('What is middleware in Node.js?', 'MCQ', 'INTERMEDIATE', NOW(), 1),
('Which framework simplifies request-response handling?', 'MCQ', 'BEGINNER', NOW(), 1),
('What does app.get() handle?', 'MCQ', 'BEGINNER', NOW(), 1),
('What does app.post() handle?', 'MCQ', 'BEGINNER', NOW(), 1),
('Which method sets HTTP headers?', 'MCQ', 'INTERMEDIATE', NOW(), 1),
('What is the first step in lifecycle?', 'MCQ', 'ADVANCE', NOW(), 1),
('What is the last step in lifecycle?', 'MCQ', 'ADVANCE', NOW(), 1),
('Which port is commonly used for Node.js apps?', 'MCQ', 'BEGINNER', NOW(), 1),
('What does app.listen() do?', 'MCQ', 'BEGINNER', NOW(), 1),
('What is routing in Node.js?', 'MCQ', 'INTERMEDIATE', NOW(), 1);



CREATE TABLE `mcq_options` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `option_a` VARCHAR(255) DEFAULT NULL,
  `option_b` VARCHAR(255) DEFAULT NULL,
  `option_c` VARCHAR(255) DEFAULT NULL,
  `option_d` VARCHAR(255) DEFAULT NULL,
  `correct_answer` VARCHAR(10) DEFAULT NULL,
  `question_id` BIGINT DEFAULT NULL,
  PRIMARY KEY (`id`)
);


INSERT INTO mcq_options (option_a, option_b, option_c, option_d, correct_answer, question_id) VALUES
('Stores data', 'Handles client requests and responses', 'Designs UI', 'Compiles code', 'B', 1),
('fs', 'http', 'path', 'os', 'B', 2),
('create()', 'http.createServer()', 'server.start()', 'initServer()', 'B', 3),
('req, res', 'req, data', 'res, data', 'input, output', 'A', 4),
('Server response', 'Client request', 'Database', 'URL', 'B', 5),
('Client request', 'Server response', 'File system', 'API', 'B', 6),
('res.send()', 'res.write()', 'res.end()', 'res.close()', 'C', 7),
('Server stops', 'Request hangs', 'Data deleted', 'Error fixed', 'B', 8),
('res', 'req', 'server', 'http', 'B', 9),
('start', 'request', 'load', 'connect', 'B', 10),
('Database', 'Function between request and response', 'Server', 'File', 'B', 11),
('Django', 'Laravel', 'Express.js', 'Spring', 'C', 12),
('POST requests', 'GET requests', 'DELETE requests', 'PUT requests', 'B', 13),
('GET requests', 'POST requests', 'PATCH requests', 'OPTIONS', 'B', 14),
('res.header()', 'res.setHeader()', 'res.getHeader()', 'res.writeHeader()', 'B', 15),
('Server response', 'Client sends request', 'Middleware runs', 'Routing', 'B', 16),
('Request received', 'Middleware runs', 'Server sends response', 'Server starts', 'C', 17),
('80', '8080', '3000', '5000', 'C', 18),
('Stops server', 'Starts server', 'Deletes data', 'Reads file', 'B', 19),
('Storing data', 'Handling different URLs', 'Creating database', 'Compiling code', 'B', 20);


SELECT 
    q.question_id,
    q.description,
    q.question_type,
    q.difficulty_level,
    m.option_a,
    m.option_b,
    m.option_c,
    m.option_d,
    m.correct_answer
FROM questions q
INNER JOIN mcq_options m 
    ON q.question_id = m.question_id
WHERE q.question_id = 1;