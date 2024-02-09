 --Database Creation

use assessmentdb;

select * from technicalskills;

-- Select all questions  beong to ADV JAVA
select * from questions where skillid=(select  techskid from technicalskills where title ="ADV JAVA");

select * from employee;

select  subexid from subjectexperties where technicalskillid=(select  techskid from technicalskills where title ="ADV JAVA");

-- Show all employee details who are experts in CORE JAVA
select * from employee  where employee.id in(
								select  employeeid from subjectexperties employee
								where technicalskillid=( select  techskid from technicalskills 
														 where title ="CORE JAVA")
								);

-- Show question titles of test conducted on specific DATE

  select question from questions where questions.skillid in (
  select techskid from technicalskills where techskid = (select skillid from tests where sheduledon="2024-01-05" )); 

-- answer with date quetionId 










--- INNER JOIN WITH THREE TABLE
select * from questions
  INNER JOIN tests
  ON questions.qid = tests.id
  INNER JOIN candidateanswers
  ON questions.qid = candidateanswers.questionsanswereid;




