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

