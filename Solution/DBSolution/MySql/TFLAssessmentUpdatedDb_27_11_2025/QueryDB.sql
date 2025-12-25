
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
select * from assessments;

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



== AssessmentDapper Repository==
-- get assessmets details--  
SELECT t.id,t.name AS TestName, t.smeid AS subjectExpertId, t.subjectid AS subjectId, t.creationdate AS creationDate,t.modificationdate AS modificationDate,
                t.scheduleddate AS scheduledDate,t.status,t.passinglevel,e.firstName, e.lastName
                FROM   tests t
                LEFT JOIN employees e ON t.smeid = e.id 
                WHERE t.id = 1;
 
-- creating a test-- 
-- plz check sampledb file insert into test data 
        
-- Get all tests created betn Fromdate to Todate-- 
select * from tests where creationDate  between '2025-11-01' and '2025-12-25';

-- Get all tests created by subjectmatterexpert--  
select * from tests where smeid=3;

-- # add question to the tests-- 
-- plz check sampledb insert into testquestions

-- adding questions to tests 
INSERT INTO testquestions(testid, questionbankid) VALUES (58,48);

-- remove question from test--    
DELETE FROM testquestions WHERE testid = 5 AND questionbankid = 12;

-- delete testquestion row --
-- we should add delete column to testquestions--    
DELETE FROM testquestions WHERE id = 50;

-- change test duration--
update tests set duration=25 where id=56;

-- reschedule assessment-- 
update assessments set scheduledstart= '2025-12-26' where id=54;

-- Get all test -- 
-- colums to be remove from below query modificationdate,scheduledate--  
select tests.*,subjects.title as skill,employees.firstname,employees.lastname from tests 
                        inner join subjectmatterexperts on subjectmatterexperts.id=tests.smeid
                        inner join subjects on subjects.id=subjectmatterexperts.subjectid
                        inner join employees on  employees.id=subjectmatterexperts.employeeid ;
                        
-- Get all employees with role --
SELECT e.userId, e.firstname, e.lastname, e.email
            FROM employees e
            JOIN userroles ur ON ur.userid = e.userid
            JOIN roles r ON r.id = ur.roleid
            WHERE r.name = 'student'; 
            
-- Get all Employee by Id --
SELECT * FROM employees WHERE userId=4;

-- Get all subjects --
select * from subjects;

-- get all concept--
select * from concepts;

-- get concept by subject --
select * from concepts WHERE subjectid=3;

-- create test with questions --  


-- Get all questions by subjectid --
 
SELECT 
                id AS QuestionBankId,
                title,
                a,
                b,
                c,
                d
            FROM questionbank
            WHERE subjectid = 3;  
            
-- get sme for specific subject--  
SELECT sme.id, e.userId, e.firstName, e.lastName, e.email, e.contact
            FROM employees e
            INNER JOIN subjectmatterexperts sme ON e.id = sme.employeeid
            WHERE sme.subjectid = 6;

-- get all tests by fromdate to todate--
SELECT * FROM tests WHERE scheduleddate BETWEEN '2025-12-02' AND '2025-12-22';

-- get all questions -- 
SELECT * FROM tests WHERE id = 2; 
SELECT q.id AS QuestionId, q.subjectid AS SubjectId, q.title, q.a, q.b, q.c, q.d, q.answerkey, q.conceptid
                      FROM questionbank q
                      INNER JOIN testquestions tq ON q.id = tq.questionbankid
                      WHERE tq.testid = 3;
                      
-- Get Questions by conceptId --
SELECT q.id AS QuestionId, q.subjectid AS SubjectId, q.title, q.a, q.b, q.c, q.d, q.answerkey, q.conceptid
            FROM questionbank q
            WHERE q.conceptid = 4; 

-- update question --
UPDATE questionbank 
            SET title = @Title, a = @A, b = @B, c = @C, d = @D, answerkey = @AnswerKey 
            WHERE id = 2;
            
-- update assessment status --  
UPDATE assessments SET status = @Status WHERE id = 3;

-- add employee to assessment --
-- plz check sampledb insert into assessment 
 
-- Get test count by status --
select count(id) as testcount from tests where status= 'created';

-- Get all test by status --  
select 
                    t.id,
                    t.name,
                    s.title,
                    t.duration,
                    MAX(ts.scheduledstart) as scheduledstart,
                    MAX(ts.scheduledend) as scheduledend
                from tests t
                left join assessments ts on t.id = ts.test_id
                left join subjects s on s.id = t.subjectid
                where t.status = 'created'
                group by t.id, t.name, s.title, t.duration;  
                
-- get subjectmatterexpert by subject--
SELECT s.id, s.title
        FROM subjectmatterexperts sme
        JOIN subjects s ON sme.subjectId = s.id
        WHERE sme.employeeId = 3; 
        
-- get sme test list--
SELECT Name AS test_name,duration FROM tests WHERE smeid = 3; 

-- get assessment history --
 SELECT 
    t.name,
    ctr.score, 
    DATE(ctr.teststarttime) AS Date,
    a.id AS assessment_id
    FROM candidatetestresults ctr
    JOIN assessments a 
    ON ctr.assessmentid = a.id
    JOIN tests t 
    ON a.test_id = t.id
    WHERE ctr.candidateid = 6
    ;
    
    -- get assessment Employee details--
     SELECT 
    a.id AS AssessmentId,
    t.name AS AssessmentName,
    t.passinglevel,
    t.duration,
    a.scheduledstart,
    a.scheduledend,
    a.status
    FROM assessments a
    JOIN tests t 
    ON a.test_id = t.id
    JOIN candidatetestresults ctr
    ON ctr.assessmentid = a.id
    WHERE a.id = 50 AND ctr.candidateid= 4;
    
-- concept wise correct answer--
SELECT 
            c.id AS concept_id,
            c.title AS concept_name,
            COUNT(qb.id) AS total_questions,
            SUM(CASE 
                    WHEN ca.answerkey = qb.answerkey THEN 1 
                    ELSE 0 
                END) AS correct_answers
        FROM candidateanswers ca
        JOIN questionbank qb ON ca.testquestionid = qb.id
        JOIN concepts c ON qb.conceptid = c.id
        WHERE ca.candidateid = 4
        GROUP BY c.id, c.title;  
     
== AuthRepository ==

-- Get User With Roles By Email

SELECT u.id AS UserId, u.aadharid, u.firstname, u.lastname, u.email, u.contactnumber, u.password,
        ur.id AS UserRoleId, ur.roleid, r.name AS RoleName, r.lob
        FROM users u
        LEFT JOIN userroles ur ON u.id = ur.userid
        LEFT JOIN roles r ON ur.roleid = r.id
        WHERE u.email = "ravi.tambade@example.com" AND u.password="12345";


-- Check Old Password

SELECT COUNT(*) 
	FROM users 
	WHERE email = "ravi.tambade@example.com" AND password = 12345;

-- Update Password
-- existing query
UPDATE users SET password = "123456" WHERE email ="ravi.tambade@example.com";

-- new query
UPDATE users SET password = 12345 WHERE id = 7;


== CandidateAnswer Repository ==


-- Get Candidate Answers

SELECT * FROM candidateanswers WHERE candidateid = 6 AND testquestionid IN (SELECT testquestions.id FROM testquestions inner join assessments on assessments.test_id=testquestions.testid where assessments.id=1);


-- Get Candidate testquestionid ,CandidateAnswer,CorrectAnswer

		SELECT 
                ca.testquestionid,
                ca.answerkey AS CandidateAnswer,
                qb.answerkey AS CorrectAnswer
                FROM candidateanswers ca
                JOIN testquestions tq ON ca.testquestionid = tq.id
                JOIN questionbank qb ON tq.questionbankid = qb.id
                JOIN assessments a ON a.test_id = tq.testid
                WHERE ca.candidateid = 6 AND a.id = 1 ;


-- Get Candidate Test Details id and firstname
-- Query candidate

SELECT id, firstname FROM employees WHERE id = 5;

--  Query test

SELECT tests.id, tests.name AS TestName, tests.passinglevel, tests.scheduleddate FROM tests Inner join assessments on assessments.test_id= tests.id WHERE assessments.id = 1;

--  tests.scheduleddate change it with assessments.scheduleddate


== ConceptRepository ==


-- Update Concept
update questionbank set conceptid=1 where id=1;

-- Update Subject
update concepts set subjectid= 2 where id= 1;



-- GetConceptBySubjectId

 SELECT * FROM concepts where subjectid=1;

-- getConceptQuestionCount

 select count(q.title) as questionCount, e.title ,e.id as conceptid 
            from questionbank q
            join concepts e on e.id=q.conceptid 
            where q.subjectid=3
            group by(q.conceptid)

-- Subject Repository

-- to shows all the rows and columns form the subject table (Full data for subject)
 select * from subjects;

-- This query Insert the data which is passed in the value to the table 
INSERT INTO subjects (title) VALUES ("Python");   -- (@title = "Python"

-- This query deletes the row from the subjects table where the id is 9.
DELETE FROM subjects WHERE id = 9;   -- (@id = 9)


-- This query retrieves the IDs and titles of subjects that the employee with employeeId = 3 is an expert in, by joining the subjectmatterexperts table with the subjects table.
SELECT s.id, s.title
FROM subjectmatterexperts sme
JOIN subjects s ON sme.subjectId = s.id
WHERE sme.employeeId = 3; -- (@smeId = 3)




== User Session Repository ==


-- This query creates a new session record for user ID 2, setting the login time to the current time and marking the session as ACTIVE.
INSERT INTO user_session (user_id, login_time, session_status)
        VALUES (2, NOW(), 'ACTIVE'); -- (@UserId = 2)


--  This query updates the active session for user ID 2 by setting the logout time to the current time and changing the session status to INACTIVE.
UPDATE user_session
        SET logout_time = NOW(), session_status = 'INACTIVE'
        WHERE user_id = 2 AND session_status = 'ACTIVE';    -- (@UserId = 2)

-- This query retrieves all session records for user ID 2, showing the session ID, login time, logout time, and status, and orders them from the most recent login to the oldest.
SELECT id, user_id, login_time, logout_time, session_status
                     FROM user_session
                     WHERE user_id = 2       -- (@UserId=2)
                     ORDER BY login_time DESC;




== Question Bank  Repository ==


-- this queary to shows all the rows and columns form the question Bank table.
select * from questionbank;

-- This query retrieves all questions from the questionbank that belong to the subject with id = 4, showing each question’s ID and title, along with the subject’s ID and title.
SELECT 
    questionbank.id AS questionid,
    questionbank.title AS question,
    subjects.title AS subject,
    subjects.id AS subjectid
FROM
    questionbank,
    subjects	
WHERE
    questionbank.subjectid = subjects.id
        AND subjects.id = 4;      -- (@subjectId = 4)

-- It joins the questionbank table with both subjects and concepts to get the corresponding titles.
SELECT 
    questionbank.id,
    questionbank.id AS questionid, questionbank.title,
    subjects.title AS subject, concepts.title AS concept
FROM
    questionbank,
    subjects,
    concepts
WHERE
    questionbank.subjectid = subjects.id
        AND questionbank.conceptid = concepts.id
        AND subjects.id = 4    -- (@SubjectsId = 4)
        AND concepts.id = 8;    -- (@ConceptId = 8)


-- It joins the questionbank table with subjects and concepts to get the related titles.
SELECT 
    questionbank.id,
    questionbank.id AS questionid,
    questionbank.title,
    questionbank.a AS optionA,
    questionbank.b AS optionB,
    questionbank.c AS optionC,
    questionbank.d AS optionD,
    subjects.title AS subject,
    concepts.title AS concept
FROM
    questionbank,
    subjects,
    concepts
WHERE
    questionbank.subjectid = subjects.id
        AND questionbank.conceptid = concepts.id
        AND subjects.id = 4    -- @SubjectId = 4
        AND concepts.id = 8;    -- @conceptid = 8


-- It joins questionbank with subjects and concepts to show the related subject and concept names along with the full question details.
SELECT 
    questionbank.id,
    questionbank.id AS questionid,
    questionbank.title,
    subjects.title AS subject,
    concepts.title AS concept,
    questionbank.a AS optionA,
    questionbank.b AS optionB,
    questionbank.c AS optionC,
    questionbank.d AS optionD,
    questionbank.answerkey AS result
FROM
    questionbank,
    subjects,
    concepts
WHERE
    questionbank.subjectid = subjects.id
        AND questionbank.conceptid = concepts.id
        AND subjects.id = 4      --  (@SubjectId = 4)
        AND concepts.id = 8 ;     --  (@conceptid = 8)

-- It joins questionbank with subjects and concepts to include the subject and concept names.
 SELECT 
    questionbank.id,
    questionbank.id AS questionid,
    questionbank.title,
    subjects.title AS subject,
    concepts.title AS concept,
    questionbank.a AS optionA,
    questionbank.b AS optionB,
    questionbank.c AS optionC,
    questionbank.d AS optionD,
    questionbank.answerkey
FROM
    questionbank,
    subjects,
    concepts
WHERE
    questionbank.subjectid = subjects.id
        AND questionbank.conceptid = concepts.id
        AND subjects.id = 4
        AND concepts.id = 8
        AND questionbank.id = 17;  -- (@questionId = 17)

-- This query retrieves all questions from the questionbank table, along with their corresponding subject and concept titles, by joining questionbank with the subjects and concepts tables.
SELECT 
    questionbank.id,
    questionbank.title,
    subjects.title AS subject,
    concepts.title AS concept
FROM
    questionbank,
    subjects,
    concepts
WHERE
    questionbank.subjectid = subjects.id
        AND questionbank.conceptid = concepts.id;

-- This query updates the question with id = 2 in the questionbank table, setting its correct answer (answerkey) to 'a'.
update questionbank set answerkey="a" where id=2;      -- (@AnswerKey ="a" & @Id = 2)


-- This query retrieves all columns for the question in the questionbank table with id = 2.
select * from questionbank where id= 18 ;    -- @QuestionId = 2;

-- This query updates the question with id = 65 in the questionbank table
UPDATE questionbank 
SET 
    title = "What is the primary purpose of React?",     -- @title
    a = "To style web pages using CSS",                  -- @A
    b = "To manage server-side databases",               -- @B
    c = "To build user interfaces, especially single-page applications",   -- @C
    d = "To perform unit testing of JavaScript code",    -- @D
    answerkey = "c"      -- @AnswerKey 
WHERE
    id = 18;       -- @Id

-- This query updates the question with id = 18 in the questionbank table
UPDATE questionbank 
SET 
    conceptid = 9,  -- @ConceptId
    subjectid = 4   -- @SubjectId
WHERE
    id = 18 ;      -- @Id;

-- It retrieves the title of the concept associated with the question whose ID is @QuestionId, only if that question belongs to the subject titled "@subject"
SELECT 
    concepts.title
FROM
    concepts
        INNER JOIN
    questionbank ON questionbank.conceptid = concepts.id
        INNER JOIN 	
    subjects ON questionbank.subjectid = concepts.subjectid
WHERE
    subjects.title = "REACT"
        AND questionbank.id = 27;

-- This query retrieves the test_id from the assessments table for the row where id = 4.
SELECT test_id FROM assessments WHERE id = 4;

-- This query retrieves all questions that are part of the test with testid = 2, including details from the questionbank table.
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
            WHERE testquestions.testid = 2;

-- This query counts how many questions exist for each subject in the questionbank table.
SELECT 
    COUNT(q.title) AS questionCount, s.title, s.id AS subjectId
FROM
    questionbank q
        JOIN
    subjects s ON s.id = q.subjectid
GROUP BY (subjectid);

=== UserAnalyticsRepository ===

------ Get Total Online Seconds -------

SELECT 
TIMESTAMPDIFF(SECOND, login_time, COALESCE(logout_time, NOW())) AS DurationSeconds
                    FROM user_session where user_id=1;

----- Get Active Users Count -------

SELECT COUNT(DISTINCT user_id) as activeuser
                    FROM user_session
                    WHERE session_status = 'ACTIVE';

----- Get User Count-----

  SELECT COUNT(DISTINCT user_id) AS allUserCount
                        FROM user_session;

------ fetch top 10 users with their role and longest session time-------

SELECT 
            us.user_id,
            e.firstname,
            e.lastname,
            e.email,
            GROUP_CONCAT(DISTINCT r.name) AS roles,
            SEC_TO_TIME(
                MAX(TIMESTAMPDIFF(SECOND, us.login_time, COALESCE(us.logout_time, NOW())))
            ) AS longest_session
        FROM user_session us
        JOIN employees e ON e.id = us.user_id
        LEFT JOIN userroles ur ON ur.userid = e.id
        LEFT JOIN roles r ON r.id = ur.roleid
        GROUP BY us.user_id, e.firstname, e.lastname
        ORDER BY longest_session DESC
        LIMIT 10;

----- show average session duration for current month------

SELECT 
			 TIME_FORMAT(
                                SEC_TO_TIME(
                                    AVG(
                                        TIMESTAMPDIFF(
                                            SECOND,
                                            login_time,
                                            COALESCE(logout_time, NOW())
                                        )
                                    )
                                ),
                                '%H:%i:%s'
                            ) AS AvgSessionDuration
                        FROM user_session
                        WHERE MONTH(login_time) = MONTH(CURRENT_DATE())
                        AND YEAR(login_time) = YEAR(CURRENT_DATE());

 -- Get active users along with their roles--
                        
SELECT 
                    u.id AS user_id,
                    u.firstname,
                    u.lastname,
                    u.email,
                    GROUP_CONCAT(DISTINCT r.name ORDER BY r.name) AS roles
                FROM user_session us
                JOIN employees u ON u.id = us.user_id
                LEFT JOIN userroles ur ON ur.userid = u.id
                LEFT JOIN roles r ON r.id = ur.roleid
                WHERE us.session_status = 'ACTIVE'
                GROUP BY u.id, u.firstname, u.lastname;


 == UserProfileRepository ==

-- Get user by contact number --
           
select id,firstname,lastname,email,contactnumber 
from users where contactnumber=9000000000;

-- To get all roles assign to user--

select r.id as id, r.name as rolename from roles r 
                            join userroles ur on ur.roleid=r.id 
                            join users u on u.id=ur.userid
                            where  u.id=1;

-- update users personal details using their ID--------

update users  set aadharid=258963148, firstname="Pranita",
 lastname="Mane", contactnumber=90000000111 where id=8;


-- update users personal details for perticular user--------

 update employees  set firstname="Pranita", lastname="Mane",
 contact=9000000008 where userId=8;

-- To get all employee whose role is SME--

 select e.id,e.userId, e.firstname, e.lastname
                            from employees e
                            join userroles ur on ur.userid=e.userId
                            join roles r on r.id=ur.roleid where r.name='sme';

-- Get subject by SME ID--

select s.title as subjectname
from subjects s  join subjectmatterexperts sme on sme.subjectid=s.id where sme.employeeid=1;


============== interviewRepository.cs =============
-- get all interview candidates
select interviews.candidateid,employees.firstname,employees.lastname,subjects.title
                        from interviews 
                        inner join employees on  interviews.candidateid= employees.id
                        inner join subjectmatterexperts on interviews.smeid = subjectmatterexperts.id
                        inner join subjects on subjectmatterexperts.subjectid=subjects.id;


-- Get Interviewed Candidates Subjects
select interviews.candidateid,employees.firstname,employees.lastname,subjects.title
                        from interviews inner join employees on  interviews.candidateid= employees.id
                        inner join subjectmatterexperts on interviews.smeid = subjectmatterexperts.id
                        inner join subjects on subjectmatterexperts.subjectid=subjects.id
                        where interviews.candidateid=5;

-- to update interview date  
update interviews set interviewdate ="2024-03-01"  where  id =5;

-- to update interview time 
update interviews set interviewtime ="09:40:30"  where  id =1;

-- to update interview date and time both
update interviews set interviewdate ="2025-10-07",interviewtime ="03:40PM"  where  id =7;

-- to change interviewer
update interviews set smeid =1  where  id =6;

-- to cancel interview
delete from interviews where id =7;



== MembershipRepository.cs==
-- to get all employees
select * from employees;

-- to update user role
insert into userroles(userid,roleid) values(19,3);


-- get employee by userid
select * from employees where userId=4;

-- to add new employee
insert into employees(firstname,lastname,email,contact) values("shreyas","shreyas","shreyas.pandit@example.com",2783264876);

-- to delete user role
delete from userroles where userid=3;

-- to delete sme subject
delete from subjectmatterexperts where employeeid=3;


-- to assign subject
insert into subjectmatterexperts(employeeid, subjectid) values(23, 6);


-- remove assign subject

delete from subjectmatterexperts where employeeid=23 and subjectid= 6;

-- get assign subject
select id from subjectmatterexperts where employeeid=4 and subjectid= 6;

============== interviewRepository.cs =============
-- get all interview candidates
select interviews.candidateid,employees.firstname,employees.lastname,subjects.title
                        from interviews 
                        inner join employees on  interviews.candidateid= employees.id
                        inner join subjectmatterexperts on interviews.smeid = subjectmatterexperts.id
                        inner join subjects on subjectmatterexperts.subjectid=subjects.id;


-- Get Interviewed Candidates Subjects
select interviews.candidateid,employees.firstname,employees.lastname,subjects.title
                        from interviews inner join employees on  interviews.candidateid= employees.id
                        inner join subjectmatterexperts on interviews.smeid = subjectmatterexperts.id
                        inner join subjects on subjectmatterexperts.subjectid=subjects.id
                        where interviews.candidateid=5;

-- to update interview date  
update interviews set interviewdate ="2024-03-01"  where  id =5;

-- to update interview time 
update interviews set interviewtime ="09:40:30"  where  id =1;

-- to update interview date and time both
update interviews set interviewdate ="2025-10-07",interviewtime ="03:40PM"  where  id =7;

-- to change interviewer
update interviews set smeid =1  where  id =6;

-- to cancel interview
delete from interviews where id =7;



== MembershipRepository.cs==
-- to get all employees
select * from employees;

-- to update user role
insert into userroles(userid,roleid) values(19,3);


-- get employee by userid
select * from employees where userId=4;

-- to add new employee
insert into employees(firstname,lastname,email,contact) values("shreyas","shreyas","shreyas.pandit@example.com",2783264876);

-- to delete user role
delete from userroles where userid=3;

-- to delete sme subject
delete from subjectmatterexperts where employeeid=3;


-- to assign subject
insert into subjectmatterexperts(employeeid, subjectid) values(23, 6);


-- remove assign subject

delete from subjectmatterexperts where employeeid=23 and subjectid= 6;

-- get assign subject
select id from subjectmatterexperts where employeeid=4 and subjectid= 6;




















