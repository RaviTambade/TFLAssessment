
-- get candidate test results

drop procedure if exists spcandidatetestresult;

DELIMITER $$
create procedure spcandidatetestresult(IN pcandidateId INT,In ptestId INT,OUT pscore INT )
BEGIN
DECLARE totalMarks INT;
SELECT COUNT(CASE WHEN candidateanswers.answerkey = questionbank.answerkey THEN 1 ELSE NULL END) AS score 
INTO totalMarks FROM candidateanswers 
INNER JOIN   testquestions  on testquestions.questionbankid=candidateanswers.testquestionid
INNER JOIN   questionbank on questionbank.id=testquestions.questionbankid
WHERE candidateanswers.candidateid = pcandidateId AND testquestions.testid = ptestId;
set pscore=totalMarks;
Update candidatetestresults  set score =pscore where candidateid= pcandidateId and testid= ptestId;
END $$

call spcandidatetestresult(2,1,@pscore) ;
select(@pscore);


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

DROP PROCEDURE IF Exists spcandidatetestresultdetails;
DELIMITER $$
create procedure spcandidatetestresultdetails(IN pcandidateId INT, IN ptestId INT, OUT pcorrectAnswers INT, OUT pincorrectAnswers INT, OUT pskippedQuestions INT)
BEGIN
DECLARE totalQuestions INT;
DECLARE correctCandidateAnswers INT;

select count(*) INTO totalQuestions from testquestions where testid=1;

SELECT COUNT(CASE WHEN candidateanswers.answerkey = questionbank.answerkey THEN 1 ELSE NULL END) AS score 
INTO correctCandidateAnswers FROM candidateanswers 
INNER JOIN   testquestions  on testquestions.questionbankid=candidateanswers.testquestionid
INNER JOIN   questionbank on questionbank.id=testquestions.questionbankid
WHERE candidateanswers.candidateid = pcandidateId AND testquestions.testid = ptestId;
SET pincorrectAnswers = totalQuestions-correctCandidateAnswers;
SELECT COUNT(*) INTO pskippedQuestions FROM CandidateAnswers INNER JOIN testQuestions ON testquestions.id = candidateanswers.testquestionid 
WHERE candidateanswers.answerkey="NO" AND candidateanswers.candidateId = pcandidateId AND testquestions.testId = ptestId;

SET pcorrectAnswers=correctCandidateAnswers;
END $$
CALL spcandidatetestresultdetails(3,2, @pcorrectAnswers, @pincorrectAnswers,@pskippedQuestions);
select @pcorrectAnswers,@pincorrectAnswers,@pskippedQuestions;




DROP PROCEDURE IF Exists spupdatemarks;
DELIMITER $$
create procedure spupdatemarks(in ptestid int, in markstoraise int)
begin 
declare candId int;
declare marks int;
declare candidateMarks int;
declare id int;
declare candidate_result_cursor cursor for
select  score,candidateid from candidatetestresults where testid= ptestid;
 OPEN  candidate_result_cursor;
 loop
    FETCH NEXT FROM  candidate_result_cursor INTO marks, candId;
        SET marks = marks + markstoraise;
        UPDATE candidatetestresults 
        SET score = marks
        WHERE candidateid = candId;
	end loop;
close candidate_result_cursor;
end $$
call spupdatemarks(1, 13);



