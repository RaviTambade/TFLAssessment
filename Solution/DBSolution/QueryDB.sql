
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

select * from questions

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
where employeeid=1 and testid=2



--get count of correct answers  given by candidate(employee id) for test (test id )

select count(*) from  candidateanswers
JOIN   testquestions  on testquestions.testquestionid=candidateanswers.testquestionid
JOIN   questions on questions.qid=testquestions.questionid
where employeeid=1 and testid=2
AND questions.answerkey=candidateanswers.answerkey


-- answer with date quetionId 

-- get all employees who have answered  question id=1;

select * from employees


 
--- INNER JOIN WITH THREE TABLE
--at given date show answers of quetions given by candidate IDENTIFIED
--test id, emp id
--expected output ADD
-- qestionid, correct Answer, candidate given answer



-- Get all  Candidates answsers  for given test id

select  candidateanswers.employeeid,questions.qid, questions.answerkey as CorrectAnswer, candidateanswers.answerkey as CandidatesAnswer  
from questions
  JOIN testquestions ON questions.qid=testquestions.questionid
  JOIN candidateanswers ON candidateanswers.testquestionid=testquestions.testquestionid 
WHERE   candidateanswers.employeeid=1
AND     testquestions.testid=1;



-- Get all employees who appeared for quetsion 1 in assessment for test id =1

select candidateanswers.employeeid, testquestions.testid, questions.qid, candidateanswers.answerkey from candidateanswers
JOIN testquestions on testquestions.testquestionid=candidateanswers.testquestionid
JOIn questions on questions.qid= testquestions.questionid
Where questions.qid=1 and testid=1;


--get all tests and sheduled  date  the employee appeared
select distinct(testquestions.testid), tests.sheduledon from candidateanswers
Join testquestions on testquestions.testquestionid=candidateanswers.testquestionid
Join tests on tests.id=testquestions.testid
where employeeid=1



--get all emplyoees who  have been teseted for  object oriented (Criteria)
