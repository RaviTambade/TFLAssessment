-- Active: 1694968636816@@127.0.0.1@3306@assessmentdb

use assessmentdb;

select * from technicalskills;
select * from employee;

select * from subjectexperties;
select * from evaluationcriterias;
select * from questions;


select * from tests;
select * from testquestions;

select * from candidateanswers;

select * from candidatetestresults;


select * from interviewcriterias;
select * from interviewresults;
select * from interviews;

show tables;

select * from testquestions where testid=8;
select * from candidateanswers where employeeid=6;

 

-- Select all questions  beong to ADV JAVA
select * from questions where skillid=(select  techskid from technicalskills where title ="ADV JAVA");
 

select  subexid from subjectexperties where technicalskillid=(select  techskid from technicalskills where title ="ADV JAVA");

-- Show all employee details who are experts in CORE JAVA
select * from employee  where employee.id in(
								select  employeeid from subjectexperties employee
								where technicalskillid=( select  techskid from technicalskills 
														 where title ="CORE JAVA")
								);

-- Show question titles of test conducted on specific DATE

select * from questions;

select * from tests;

  select question 
  from questions 
  where questions.skillid in (
                              select techskid from technicalskills 
                              where techskid = (
                                                select skillid from tests 
                                                where Id=1 )); 



-- Question Paper
select  qid, question, answerkey from questions
where qid in (select questionid from  testquestions
              where testid=1);



-- get all questions and answer givn by candidate(employee id) for test (test id )

select testquestions.testid,questions.qid,questions.answerkey as correctanswer, candidateanswers.answerkey as candidateanswer from  candidateanswers
JOIN   testquestions  on testquestions.testquestionid=candidateanswers.testquestionid
JOIN   questions on questions.qid=testquestions.questionid
where employeeid=1 and testid=2;



-- get count of correct answers  given by candidate(employee id) for test (test id )

select count(*) from  candidateanswers
JOIN   testquestions  on testquestions.testquestionid=candidateanswers.testquestionid
JOIN   questions on questions.qid=testquestions.questionid
where employeeid=1 and testid=2
AND questions.answerkey=candidateanswers.answerkey;


-- answer with date quetionId 

-- get all employees who have answered  question id=1;

select * from employees;


 
--- INNER JOIN WITH THREE TABLE
-- at given date show answers of quetions given by candidate IDENTIFIED
-- test id, emp id
-- expected output ADD
-- qestionid, correct Answer, candidate given answer



-- Get all  Candidates answsers  for given test id

select  candidateanswers.employeeid,questions.qid, questions.answerkey as CorrectAnswer, candidateanswers.answerkey as CandidatesAnswer  
from questions
  JOIN testquestigit puons ON questions.qid=testquestions.questionid
  JOIN candidateanswers ON candidateanswers.testquestionid=testquestions.testquestionid 
WHERE   candidateanswers.employeeid=1
AND     testquestions.testid=1;



-- Get all employees who appeared for quetsion 1 in assessment for test id =1

select candidateanswers.employeeid, testquestions.testid, questions.qid, candidateanswers.answerkey from candidateanswers
JOIN testquestions on testquestions.testquestionid=candidateanswers.testquestionid
JOIn questions on questions.qid= testquestions.questionid
Where questions.qid=1 and testid=1;


-- get all tests and sheduled  date  the employee appeared
select distinct(testquestions.testid), tests.sheduledon from candidateanswers
Join testquestions on testquestions.testquestionid=candidateanswers.testquestionid
Join tests on tests.id=testquestions.testid
where employeeid=1;



-- get all emplyoees who  have been teseted for  object oriented (Criteria)


-- get all questions of particular subject
select questions.qid,questions.question,questions.a,questions.b,questions.c,questions.d 
from questions inner join technicalskills on technicalskills.techskid=questions.skillid
 where technicalskills.title="ADVJAVA";


-- find the score of cadidate in the particualar test.
SELECT 
    testquestions.testid,
    candidateanswers.employeeid,
    COUNT(CASE WHEN candidateanswers.answerkey = questions.answerkey THEN 1 ELSE NULL END) AS score,
    COUNT(*) AS total_questions
    FROM 
    candidateanswers 
JOIN 
    testquestions  ON candidateanswers.testquestionid = testquestions.testquestionid
JOIN 
    questions   ON testquestions.testquestionid = questions.qid
WHERE 
    candidateanswers.employeeid = 1 AND testquestions.testid = 1
GROUP BY 
    candidateanswers.employeeid;


-- call spcandidatetestresult procedure
call spcandidatetestresult(1,1,@pscore);
select @pscore;

-- get correctanswer and candidateanswer
select questions.answerkey,candidateanswers.answerkey,questions.qid  from questions 
inner join testquestions on testquestions.questionid = questions.qid 
inner join candidateanswers on candidateanswers.testquestionid=testquestions.questionid
where testquestions.testid=1 and candidateanswers.employeeid=5;


insert into candidatetestresults(testid,marks,teststarttime,testendtime,candidateid) values (1,10,"12/03/2024 01:10:00","12/03/2024 01:40:00",2);

-- get questions with subject
select questions.qid, questions.question, technicalskills.title from questions, technicalskills where questions.skillid=technicalskills.techskid;
select questions.qid, questions.question, technicalskills.title from questions, technicalskills where questions.skillid=technicalskills.techskid and technicalskills.title='CSHARP';



SELECT * from evaluationcriterias;
SELECT * from technicalskills;
SELECT * from questions;

select questions.*,evaluationcriterias.title from evaluationcriterias INNER join questions on questions.evacriid=evaluationcriterias.evacriid
inner join technicalskills on questions.skillid= evaluationcriterias.skillid WHERE technicalskills.title="COREJAVA" and questions.qid=13;