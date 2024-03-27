-- Active: 1707123530557@@127.0.0.1@3306@assessmentdb
 -- Database Creation

    -- another logic
    -- get test details
    -- get questions of the test
    -- get correctAnswer and get candidate KEY
    -- compre correctAnswer with candiate candidateAnswerKey
    -- if answerkey and correctanswer matches candidateAnswerKey
    -- then increment marks
    -- else
    -- do nothing


use Assessmentdb;

-- get candidate test results
select * from candidatetestresults;

drop procedure spcandidatetestresult;

DELIMITER $$
create procedure spcandidatetestresult(IN pcandidateId INT,In ptestId INT,OUT pscore INT )
BEGIN
DECLARE totalMarks INT;
DECLARE resultId INT ; 
SELECT COUNT(CASE WHEN candidateanswers.answerkey = questionbank.answerkey THEN 1 ELSE NULL END) AS score 
INTO totalMarks FROM candidateanswers 
JOIN testquestions  ON candidateanswers.testquestionid = testquestions.questionbankid
JOIN questionbank ON testquestions.questionbankid = questionbank.id
WHERE candidateanswers.candidateid = pcandidateId AND testquestions.testid = ptestId;
set pscore=totalMarks;
Update candidatetestresults  set score =pscore where candidateid= pcandidateId and testid= ptestId;

END $$
-- select testquestions.testid,questionbank.id,questionbank.answerkey as correctanswer, candidateanswers.answerkey as candidateanswer from  candidateanswers
-- JOIN   testquestions  on testquestions.questionbankid=candidateanswers.testquestionid
-- JOIN   questionbank on questionbank.id=testquestions.questionbankid
-- where candidateid=6 and testid=1;
call spcandidatetestresult(6,2,@pscore) ;
select(@pscore);

-- Update candidatetestresults  set marks =5 where candidateresultid = 1;

-- DELIMITER $$
-- create procedure spinterviewdetails(IN pinterviewId INT,OUT pinterviewdate DATE,OUT pinterviewtime VARCHAR(20),OUT psmename VARCHAR(40),OUT pcandidatename VARCHAR(40),OUT psubjectname VARCHAR(20),OUT pcriterias VARCHAR(100) )
-- BEGIN
-- DECLARE interviewDate DATE;
-- DECLARE interviewTime VARCHAR(20); 
-- DECLARE smeName VARCHAR(40); 
-- DECLARE candidateName VARCHAR(40); 
-- DECLARE subjectName VARCHAR(20); 

-- -- DECLARE criterias VARCHAR(100); 


-- select interviews.interviewdate,interviews.interviewtime,
-- concat(employees.firstname," ",employees.lastname)as SubjectMattrExpName into interviewDate,interviewTime,smeName  from interviews
-- inner join subjectmatterexperts 
-- on interviews.smeid=subjectmatterexperts.id 
-- inner join employees
-- on subjectmatterexperts.employeeid= employees.id
-- where interviews.id=pinterviewId;

-- select concat(employees.firstname," ",employees.lastname)as InterviewCandidateName into candidateName  from employees
-- inner join interviews
-- on interviews.candidateid = employees.id
-- where interviews.id=pinterviewId;

-- select subjects.title into subjectName from interviews
-- inner join subjectmatterexperts
-- on interviews.smeid = subjectmatterexperts.id
-- inner join subjects
-- on subjectmatterexperts.subjectid = subjects.id
-- where interviews.id=pinterviewId;

-- select evaluationcriterias.title into criterias from interviews
-- inner join interviewcriterias
-- on interviews.id = interviewcriterias.interviewid
-- inner join evaluationcriterias
-- on interviewcriterias.evaluationcriteriaid = evaluationcriterias.id
-- where interviews.id=pinterviewId;

-- set pinterviewdate = interviewDate;
-- set pinterviewtime = interviewTime;
-- set psmename = smeName;
-- set pcandidatename = candidateName;
-- set psubjectname = subjectName;
-- set pcriterias = criterias;

-- END $$
-- call spinterviewdetails(2,@pinterviewdate,@pinterviewtime,@psmename,@pcandidatename,@psubjectname,@pcriterias) ;
-- select(@pinterviewdate,@pinterviewtime,@psmename,@pcandidatename,@psubjectname,@pcriterias);
DROP PROCEDURE IF Exists spinterviewdetails;
DELIMITER $$
create procedure spinterviewdetails(IN pinterviewId INT)
BEGIN
select interviews.id,interviews.interviewdate,interviews.interviewtime,interviews.smeid,
concat(employees.firstname," ",employees.lastname)as SmeName from interviews
inner join subjectmatterexperts 
on interviews.smeid=subjectmatterexperts.id 
inner join employees
on subjectmatterexperts.employeeid= employees.id
where interviews.id=2;

select interviews.candidateid, concat(employees.firstname," ",employees.lastname)as CandidateName from employees
inner join interviews
on interviews.candidateid = employees.id
where interviews.id=2;

select subjects.id, subjects.title from interviews
inner join subjectmatterexperts
on interviews.smeid = subjectmatterexperts.id
inner join subjects
on subjectmatterexperts.subjectid = subjects.id
where interviews.id=2;

select evaluationcriterias.id, evaluationcriterias.title from interviews
inner join interviewcriterias
on interviews.id = interviewcriterias.interviewid
inner join evaluationcriterias
on interviewcriterias.evaluationcriteriaid = evaluationcriterias.id
where interviews.id=2;

END $$
call spinterviewdetails(2);


