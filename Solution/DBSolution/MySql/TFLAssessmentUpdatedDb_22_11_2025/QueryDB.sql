
use assessmentdb;

select * from subjects;
select * from questionbank;
select * from interviews;
select * from concepts;
select * from interviewresults;
select * from interviewcriterias;
select * from employees;
select * from employeeperformance;
select * from candidateanswers;
select * from candidatetestresults;
select * from tests ;
select * from testquestions;
select * from roles;
select * from subjectmatterexperts;
select * from testassessmentcriterias;
select * from testschedules;
select * from user_session;
select * from userroles;
select * from users;

desc subjects;
desc questionbank;
desc interviews;
desc concepts;
desc interviewresults;
desc interviewcriterias;
desc employees;
desc employeeperformance;
desc candidateanswers;
desc candidatetestresults;
desc tests;
desc testquestions;
desc roles;
desc subjectmatterexperts;
desc testassessmentcriterias;
desc testschedules;
desc user_session;
desc userroles;
desc users;


-- Fetch full test details including SME (employee) information for the given test ID.
SELECT t.id,t.name AS TestName, t.smeid AS subjectExpertId, t.subjectid AS subjectId, 
t.creationdate AS creationDate,t.modificationdate AS modificationDate,
t.scheduleddate AS scheduledDate,t.status,t.passinglevel,e.firstName, e.lastName
FROM   tests t
LEFT JOIN employees e ON t.smeid = e.id 
WHERE t.id = 1;

-- Retrieve all tests created within the specified date range.
SELECT * FROM tests WHERE creationDate BETWEEN '2025-11-01' AND '2025-11-22';

-- Retrieve all tests assigned to the specified SME.
select * from tests where smeid = 3;

-- Delete a specific question from a test using test ID and question bank ID.
DELETE FROM testquestions WHERE testid = 1 AND questionbankid = 1;

-- Delete testquestions by their  id
DELETE FROM testquestions WHERE id = @Id;

-- Update the duration of a test for the given assessment ID.
UPDATE tests SET duration = "00:10:00" WHERE id = 1;

-- Update the scheduled date of a test for the given assessment ID.
UPDATE tests SET scheduleddate = "2025-11-21 00:00:00" WHERE id = 8;

-- Fetch complete test details along with SME info, subject skill, and employee (SME) name.
SELECT tests.*, subjects.title AS skill, employees.firstname, employees.lastname
FROM tests
INNER JOIN subjectmatterexperts ON subjectmatterexperts.id = tests.smeid
INNER JOIN subjects ON subjects.id = subjectmatterexperts.subjectid
INNER JOIN employees ON employees.id = subjectmatterexperts.employeeid;

-- get employee by their userid
SELECT * FROM employees WHERE userId=6;

-- get subject concept by their id
select * from concepts WHERE subjectid=1;

-- get all questions by subject id
SELECT id AS QuestionBankId,title,a,b,c,d FROM questionbank WHERE subjectid = 1;	

-- Retrieve SME details (employee info) for the given subject ID.
SELECT sme.id, e.userId, e.firstName, e.lastName, e.email, e.contact
FROM employees e
INNER JOIN subjectmatterexperts sme ON e.id = sme.employeeid
WHERE sme.subjectid = 1;

-- Retrieve all tests scheduled within the specified date range.
SELECT * FROM tests WHERE scheduleddate BETWEEN '2025-11-01' AND '2025-11-22';

-- select test details by testid
SELECT * FROM tests WHERE id = 1;


-- Fetch all questions linked to a specific test, including options and answer details.
SELECT q.id AS QuestionId, q.subjectid AS SubjectId, q.title, q.a, q.b, q.c, q.d, q.answerkey, q.conceptid
FROM questionbank q
INNER JOIN testquestions tq ON q.id = tq.questionbankid
WHERE tq.testid = 1;


-- Retrieve all questions from the question bank that belong to the specified concept.
SELECT q.id AS QuestionId, q.subjectid AS SubjectId, q.title, q.a, q.b, q.c, q.d, q.answerkey, q.conceptid
FROM questionbank q
WHERE q.conceptid = 1;

-- Update a question's text, options, and answer key in the question bank for the given question ID.
UPDATE questionbank 
SET title = 'What is Java?', 
    a = 'Programming Language', 
    b = 'Coffee', 
    c = 'Animal', 
    d = 'Car', 
    answerkey = 'a'
WHERE id = 10;

-- Mark the test as completed for the specified test ID.
UPDATE tests 
SET status = 'COMPLETED' 
WHERE id = 5;
