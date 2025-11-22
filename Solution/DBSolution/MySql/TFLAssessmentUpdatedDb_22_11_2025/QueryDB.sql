
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


-- Retrieve a candidate's test scores with subject title and test ID for the specified year.
SELECT candidatetestresults.score, subjects.title, tests.id
FROM candidatetestresults
INNER JOIN tests ON tests.id = candidatetestresults.testid
INNER JOIN subjects ON subjects.id = tests.subjectid
WHERE candidatetestresults.candidateid =6
  AND YEAR(teststarttime) = 2025;

-- Fetch user details along with assigned role information for login authentication using email and password.
SELECT u.id AS UserId, u.aadharid, u.firstname, u.lastname, u.email, u.contactnumber, u.password,
       ur.id AS UserRoleId, ur.roleid, r.name AS RoleName, r.lob
FROM users u
LEFT JOIN userroles ur ON u.id = ur.userid
LEFT JOIN roles r ON ur.roleid = r.id
WHERE u.email = "ravi.tambade@example.com" AND u.password = "12345";

-- Check whether a user exists by validating the provided email and password.
SELECT COUNT(*) 
FROM users 
WHERE email = "ravi.tambade@example.com" AND password = "12345";

-- Update the user's password for the account matching the specified email.
UPDATE users 
SET password = "12345" 
WHERE email = "ravi.tambade@example.com";

-- Retrieve all answers submitted by a candidate for the specified test.
SELECT * FROM candidateanswers 
WHERE candidateid =6
AND testquestionid IN (SELECT id FROM testquestions WHERE testid = 9);

-- Fetch candidate answers along with correct answers for all questions in a specific test.
SELECT 
    ca.testquestionid,
    ca.answerkey AS CandidateAnswer,
    qb.answerkey AS CorrectAnswer
FROM candidateanswers ca
JOIN testquestions tq ON ca.testquestionid = tq.id
JOIN questionbank qb ON tq.questionbankid = qb.id
WHERE ca.candidateid = 5 AND tq.testid = 1;

-- Retrieve all concepts belonging to the specified subject.
SELECT * FROM concepts WHERE subjectid = 1;

-- Get the count of questions grouped by concept for a given subject.
SELECT COUNT(q.title) AS questionCount, e.title, e.id AS conceptid
FROM questionbank q
JOIN concepts e ON e.id = q.conceptid
WHERE q.subjectid = 1
GROUP BY q.conceptid;

-- Retrieve interview candidate details along with SME subject and candidate name.
SELECT interviews.candidateid, employees.firstname, employees.lastname, subjects.title
FROM interviews
INNER JOIN employees ON interviews.candidateid = employees.id
INNER JOIN subjectmatterexperts ON interviews.smeid = subjectmatterexperts.id
INNER JOIN subjects ON subjectmatterexperts.subjectid = subjects.id;


-- Retrieve interview details for a specific candidate along with their name and SME subject.
SELECT interviews.candidateid, employees.firstname, employees.lastname, subjects.title
FROM interviews
INNER JOIN employees ON interviews.candidateid = employees.id
INNER JOIN subjectmatterexperts ON interviews.smeid = subjectmatterexperts.id
INNER JOIN subjects ON subjectmatterexperts.subjectid = subjects.id
WHERE interviews.candidateid = 6;

-- Update the interview date for the specified interview ID.
UPDATE interviews 
SET interviewdate = '2025-11-21'
WHERE id = 2;

-- Update the interview time for the specified interview ID.
UPDATE interviews 
SET interviewtime = '15:30:00' 
WHERE id = 12;

-- change interviwer
update interviews set smeid =1 where  id =1;

-- Delete the interview record for the specified interview ID. cancel interview
DELETE FROM interviews WHERE id = 1;


-- Remove the SME assignment for the given employee and subject.
DELETE FROM subjectmatterexperts WHERE employeeid = 3 AND subjectid = 1;

-- Retrieve all questions for a specific subject along with subject details.
SELECT questionbank.id AS questionid, questionbank.title AS question, 
       subjects.title AS subject, subjects.id AS subjectid
FROM questionbank, subjects 
WHERE questionbank.subjectid = subjects.id 
  AND subjects.id = 1;

-- Retrieve questions for the given subject and concept along with subject and concept details.
SELECT questionbank.id, questionbank.id AS questionid, questionbank.title, 
       subjects.title AS subject, concepts.title AS concept
FROM questionbank, subjects, concepts
WHERE questionbank.subjectid = subjects.id 
  AND questionbank.conceptid = concepts.id
  AND subjects.id = 1 
  AND concepts.id = 1;


-- Retrieve all questions along with their associated subject and concept details.
SELECT questionbank.id, questionbank.title, subjects.title AS subject, concepts.title AS concept
FROM questionbank, subjects, concepts
WHERE questionbank.subjectid = subjects.id 
  AND questionbank.conceptid = concepts.id;

-- Retrieve the concept title for a specific question within the given subject.
SELECT concepts.title
FROM concepts
INNER JOIN questionbank ON questionbank.conceptid = concepts.id
INNER JOIN subjects ON questionbank.subjectid = concepts.subjectid
WHERE subjects.title = "corejava"
  AND questionbank.id = 1;


-- Retrieve all questions assigned to a test along with their full details from the question bank.
SELECT 
    testquestions.id AS testquestionid, 
    questionbank.id AS questionbankid,
    questionbank.subjectid,
    questionbank.title,
    questionbank.a,
    questionbank.b,
    questionbank.c,
    questionbank.d,
    questionbank.conceptid
FROM questionbank 
INNER JOIN testquestions 
    ON testquestions.questionbankid = questionbank.id 
WHERE testquestions.testid = 1;


-- Get the count of questions grouped by subject along with subject details.
SELECT COUNT(q.title) AS questionCount, s.title, s.id AS subjectId
FROM questionbank q
JOIN subjects s ON s.id = q.subjectid
GROUP BY q.subjectid;

-- Retrieve candidate test results with candidate details, subject name, and test name for a specific test.
SELECT 
    candidatetestresults.testid, 
    candidatetestresults.score, 
    candidatetestresults.candidateid,
    employees.firstname, 
    employees.lastname, 
    subjects.title AS subject, 
    tests.name AS testname 
FROM candidatetestresults 
INNER JOIN employees ON employees.id = candidatetestresults.candidateid 
INNER JOIN tests ON candidatetestresults.testid = tests.id 
INNER JOIN subjects ON tests.subjectid = subjects.id 
WHERE candidatetestresults.testid = 1;


-- Retrieve the list of candidates who attempted a specific test along with their names.
SELECT candidatetestresults.testid, candidatetestresults.candidateid, 
       employees.firstname, employees.lastname
FROM candidatetestresults 
INNER JOIN employees 
    ON employees.id = candidatetestresults.candidateid
WHERE candidatetestresults.testid = 2;


-- Retrieve all test scores of a candidate along with corresponding test names.
SELECT cr.testid AS Id, cr.score AS Score, t.name AS TestName
FROM candidatetestresults cr
JOIN tests t ON cr.testid = t.id 
WHERE candidateid = 6;


-- Retrieve candidates who passed a specific test along with their scores and personal details.
SELECT tests.id, candidatetestresults.candidateid, candidatetestresults.score, 
       tests.passinglevel, employees.firstname, employees.lastname
FROM tests
INNER JOIN candidatetestresults
    ON tests.id = candidatetestresults.testid
INNER JOIN employees
    ON candidatetestresults.candidateid = employees.id
WHERE candidatetestresults.score >= tests.passinglevel 
  AND tests.id = 2;


-- Retrieve candidates who failed a specific test along with their scores and personal details.
SELECT tests.id, candidatetestresults.candidateid, candidatetestresults.score, 
       tests.passinglevel, employees.firstname, employees.lastname
FROM tests
INNER JOIN candidatetestresults
    ON tests.id = candidatetestresults.testid
INNER JOIN employees
    ON candidatetestresults.candidateid = employees.id
WHERE candidatetestresults.score <= tests.passinglevel 
  AND tests.id = 2;


-- Retrieve candidates' test scores and details for all tests under a specific subject.
SELECT tests.id, tests.subjectid, candidatetestresults.candidateid, 
       employees.firstname, employees.lastname, candidatetestresults.score, subjects.title
FROM tests
INNER JOIN candidatetestresults
    ON tests.id = candidatetestresults.testid
INNER JOIN employees
    ON candidatetestresults.candidateid = employees.id
INNER JOIN subjects
    ON tests.subjectid = subjects.id
WHERE tests.subjectid = 1;


-- Retrieve all test names and corresponding scores for a given candidate.
SELECT t.Name AS TestName, ctr.score AS Score
FROM candidatetestresults ctr
JOIN tests t ON ctr.testid = t.id
WHERE ctr.candidateid = 6;

-- Retrieve all roles assigned to a specific user by their user ID.
SELECT r.id AS id, r.name AS rolename
FROM roles r
JOIN userroles ur ON ur.roleid = r.id
JOIN users u ON u.id = ur.userid
WHERE u.id = 5;

-- Retrieve all employees who are assigned the role of 'SME'.
SELECT e.id, e.userId, e.firstname, e.lastname
FROM employees e
JOIN userroles ur ON ur.userid = e.userId
JOIN roles r ON r.id = ur.roleid
WHERE r.name = 'sme';

-- Retrieve users who have all of the specified roles, grouping by user and ensuring they match the total role count.
SELECT u.id, u.firstname, u.lastname
FROM users u
JOIN userroles ur ON u.id = ur.userid
WHERE ur.roleid IN (2,3)
GROUP BY u.id, u.firstname, u.lastname
HAVING COUNT(DISTINCT ur.roleid) = 2;

