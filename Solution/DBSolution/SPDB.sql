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