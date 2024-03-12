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

DELIMITER $$

CREATE PROCEDURE GetTestMarks(IN  ptestId INT, IN  pemployeeId INT, OUT pMarks  INT)
BEGIN
    DECLARE marks INT  DEFAULT 0; 
    -- logic using  JOIN statement
    select count(*) INTO marks from  candidateanswers
    JOIN   testquestions  on testquestions.testquestionid=candidateanswers.testquestionid
    JOIN   questions on questions.qid=testquestions.questionid
    where employeeid=pemployeeId and testid=ptestId
    AND questions.answerkey=candidateanswers.answerkey;
    
    SET pMarks=marks;

END$$

DELIMITER ;



call `GetTestMarks`(1,2,@marks);
select @marks


-- get candidate test results
DELIMITER $$
create procedure spcandidatetestresult(IN pcandidateId INT,In ptestId INT,OUT pscore INT )
BEGIN
DECLARE totalMarks INT;
SELECT COUNT(CASE WHEN candidateanswers.answerkey = questions.answerkey THEN 1 ELSE NULL END) AS score 
INTO totalMarks FROM candidateanswers 
JOIN testquestions  ON candidateanswers.testquestionid = testquestions.testquestionid
JOIN questions ON testquestions.testquestionid = questions.qid
WHERE candidateanswers.employeeid = pcandidateId AND testquestions.testid = ptestId;
INSERT INTO candidatetestresults(testid,marks,teststarttime,testendtime,candidateid) VALUES(ptestId,totalMarks,"2024-06-03 12:00:34","2024-03-02 02:30:20",pcandidateId);
set pscore=totalMarks;
END $$
