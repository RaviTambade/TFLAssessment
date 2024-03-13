-- Active: 1694968636816@@127.0.0.1@3306@assessmentdb
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

DELIMITER ;



call `GetTestMarks`(1,2,@marks);
select @marks


-- get candidate test results
select * from candidatetestresults;

DELIMITER $$
create procedure spcandidatetestresult(IN pcandidateId INT,In ptestId INT,IN  pstarttime DATETIME,OUT pscore INT )
BEGIN
DECLARE totalMarks INT;
DECLARE resultId INT ; 
SELECT COUNT(CASE WHEN candidateanswers.answerkey = questions.answerkey THEN 1 ELSE NULL END) AS score 
INTO totalMarks FROM candidateanswers 
JOIN testquestions  ON candidateanswers.testquestionid = testquestions.testquestionid
JOIN questions ON testquestions.testquestionid = questions.qid
WHERE candidateanswers.employeeid = pcandidateId AND testquestions.testid = ptestId;
set pscore=totalMarks;
select candidateresultid INTO resultId from candidatetestresults where teststarttime=pstarttime and candidateid= pcandidateId and testid= ptestId;
Update candidatetestresults  set marks =pscore where candidateresultid = resultId;

END $$

-- call spcandidatetestresult(1,1,"2024-03-13 15:42:42",@pscore) ;
-- select(@pscore);

-- Update candidatetestresults  set marks =5 where candidateresultid = 1;