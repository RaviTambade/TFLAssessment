 -- Active: 1707123530557@@127.0.0.1@3306@assessmentdb

-- get candidate test results
use assessmentdb;

drop procedure if exists spcandidatetestresult;

DELIMITER $$

create procedure spcandidatetestresult(IN pcandidateId INT,In passessmentId INT,OUT pscore INT )
BEGIN
DECLARE totalMarks INT;
SELECT COUNT(CASE WHEN candidateanswers.answerkey = questionbank.answerkey THEN 1 ELSE NULL END) AS score 
INTO totalMarks FROM candidateanswers 
INNER JOIN   testquestions  on testquestions.id=candidateanswers.testquestionid
INNER JOIN   questionbank on questionbank.id=testquestions.questionbankid
INNER JOIN tests on tests.id=testquestions.testid
INNER JOIN assessments on assessments.test_id=tests.id
WHERE candidateanswers.candidateid = pcandidateId AND assessments.id = passessmentId;
set pscore=totalMarks;
Update candidatetestresults  set score =pscore where candidateid= pcandidateId and assessmentid= passessmentId;
END $$

DELIMITER ;


call spcandidatetestresult(4,1,@pscore);
select(@pscore);



DROP PROCEDURE IF EXISTS spinterviewdetails;

DELIMITER $$
CREATE PROCEDURE spinterviewdetails(IN pinterviewId INT)
BEGIN
    SELECT 
        interviews.id,
        interviews.interviewdate,
        interviews.interviewtime,
        interviews.smeid,
        CONCAT(employees.firstname, " ", employees.lastname) AS SmeName,
        CONCAT(candidates.firstname, " ", candidates.lastname) AS CandidateName,
        subjects.title AS Subject
    FROM 
        interviews
    INNER JOIN 
        subjectmatterexperts ON interviews.smeid = subjectmatterexperts.id
    INNER JOIN 
        employees ON subjectmatterexperts.employeeid = employees.id
    LEFT JOIN 
        employees AS candidates ON interviews.candidateid = candidates.id
    LEFT JOIN 
        subjects ON subjectmatterexperts.subjectid = subjects.id
    WHERE 
        interviews.id = pinterviewId;

    SELECT 
        concepts.id, 
        concepts.title 
    FROM 
        interviews
    INNER JOIN 
        interviewcriterias ON interviews.id = interviewcriterias.interviewid
    INNER JOIN 
        concepts ON interviewcriterias.conceptid = concepts.id
    WHERE 
        interviews.id = pinterviewId;

END $$

DELIMITER ;

-- Call the procedure by passing a dynamic interview ID
CALL spinterviewdetails(5);


DROP PROCEDURE IF Exists spcandidateassessmentresultdetails;
-- assis use
DELIMITER $$
create procedure spcandidateassessmentresultdetails(IN pcandidateId INT, IN passessmentId INT, OUT pcorrectAnswers INT, OUT pincorrectAnswers INT, OUT pskippedQuestions INT)
BEGIN
DECLARE totalQuestions INT;
DECLARE correctCandidateAnswers INT;
DECLARE attendedCount INT;

     -- total attended question
	SELECT COUNT(assessments.status)  INTO attendedCount
    FROM candidateanswers
    INNER JOIN testquestions ON testquestions.id = candidateanswers.testquestionid
	INNER JOIN tests on tests.id=testquestions.testid
    JOIN assessments on assessments.test_id = tests.id
    WHERE candidateanswers.candidateid = pcandidateId 
	AND assessments.id = passessmentId
    AND assessments.status='conducted';
      
    IF attendedCount = 0 THEN
        SELECT 'Candidate has not attended the test.' AS message;
    ELSE
  -- total question  
      select count(*) into totalQuestions from testquestions
      join tests on tests.id = testquestions.testid
      join assessments on assessments.test_id = tests.id
      where assessments.id=passessmentId;

		-- correct question
		SELECT COUNT(CASE WHEN candidateanswers.answerkey = questionbank.answerkey THEN 1 ELSE NULL END) AS score 
		INTO correctCandidateAnswers FROM candidateanswers 
		INNER JOIN   testquestions  on testquestions.id=candidateanswers.testquestionid
		INNER JOIN   questionbank on questionbank.id=testquestions.questionbankid
		INNER JOIN tests on tests.id=testquestions.testid
		INNER JOIN assessments on assessments.test_id = tests.id
		WHERE candidateanswers.candidateid = pcandidateId AND assessments.id = passessmentId;

		-- skipped question
		SELECT COUNT(*) INTO pskippedQuestions  FROM CandidateAnswers
		 INNER JOIN testquestions ON testquestions.id = candidateanswers.testquestionid 
		 INNER JOIN tests on tests.id=testquestions.testid
		INNER JOIN assessments on assessments.test_id = tests.id
		WHERE candidateanswers.answerkey="N" 
		AND candidateanswers.candidateId = pcandidateId AND assessments.id = passessmentId;

		SET pincorrectAnswers = totalQuestions-correctCandidateAnswers - pskippedQuestions;
		SET pcorrectAnswers=correctCandidateAnswers;
END IF;
END $$

CALL spcandidateassessmentresultdetails(4,1, @pcorrectAnswers, @pincorrectAnswers,@pskippedQuestions);

select @pcorrectAnswers,@pincorrectAnswers,@pskippedQuestions;





DROP PROCEDURE IF Exists spupdatemarks;
DELIMITER $$

CREATE PROCEDURE spupdatemarks(IN passessmentid INT, IN markstoraise INT)
BEGIN
    DECLARE candId INT;
    DECLARE marks INT;
    DECLARE done INT DEFAULT 0;

    DECLARE candidate_result_cursor CURSOR FOR
        SELECT score, candidateid 
        FROM candidatetestresults 
        WHERE assessmentid = passessmentid;

    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;

    OPEN candidate_result_cursor;

    read_loop: LOOP
        FETCH candidate_result_cursor INTO marks, candId;
        IF done = 1 THEN
            LEAVE read_loop;
        END IF;

        SET marks = marks + markstoraise;

        UPDATE candidatetestresults 
        SET score = marks
        WHERE candidateid = candId AND assessmentid = passessmentid;
    END LOOP;

    CLOSE candidate_result_cursor;
END $$

DELIMITER ;
call spupdatemarks(1, 3);


DROP PROCEDURE IF EXISTS spcandidate_performance;

DELIMITER $$

CREATE PROCEDURE spcandidate_performance(IN passessmentid INT)
BEGIN
    DECLARE marks INT;
    DECLARE candId INT;
    DECLARE performance_level VARCHAR(20);
    DECLARE done INT DEFAULT 0;

    -- Cursor to get candidate scores
    DECLARE candidate_testresult_cursor CURSOR FOR
        SELECT score, candidateid 
        FROM candidatetestresults 
        WHERE assessmentid = passessmentid;

    -- Handler to detect end of cursor
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;

    OPEN candidate_testresult_cursor;

    read_loop: LOOP
        FETCH candidate_testresult_cursor INTO marks, candId;
        IF done = 1 THEN
            LEAVE read_loop;
        END IF;

        -- Determine performance level
        IF marks >= 9 THEN
            SET performance_level = 'excellent';
        ELSEIF marks >= 7 THEN
            SET performance_level = 'very good';
        ELSEIF marks >= 5 THEN
            SET performance_level = 'good';
        ELSEIF marks >= 4 THEN
            SET performance_level = 'poor';
        ELSE
            SET performance_level = 'very poor';
        END IF;

        -- Update employee performance
        UPDATE employeeperformance
        SET test = performance_level
        WHERE employeeid = candId;

    END LOOP;

    CLOSE candidate_testresult_cursor;
END $$

DELIMITER ;

call spcandidate_performance(1);


DROP PROCEDURE IF EXISTS spcandidateinterviewperformance;
DELIMITER $$
create procedure spcandidateinterviewperformance(IN pcandidateId INT)
BEGIN 
    DECLARE candidateratings INT;
    DECLARE performanceLevel VARCHAR(20);

    select interviewresults.ratings INTO candidateratings from interviewresults
    inner join interviewcriterias on interviewresults.interviewcriteriaid=interviewcriterias.id
    inner join  interviews on interviewcriterias.interviewid=interviews.id 
    where interviews.candidateid=pcandidateId
    order by interviews.interviewdate DESC LIMIT 1;

        CASE 
            WHEN candidateratings >= 9 THEN SET performanceLevel = 'excellent';
            WHEN candidateratings >= 7 THEN SET performanceLevel = 'very good';
            WHEN candidateratings >= 5 THEN SET performanceLevel = 'good';
            WHEN candidateratings <= 4 THEN SET performanceLevel = 'poor';
        END CASE;

    UPDATE employeeperformance SET interview = performanceLevel
    WHERE employeeid = pcandidateId;
END $$

DELIMITER ;

call spcandidateinterviewperformance(2);


drop procedure if exists spgettestevaluationcriteriapercentage;   

DELIMITER $$

CREATE PROCEDURE spgettestevaluationcriteriapercentage(IN p_testid INT)
BEGIN
         select
     ec.id AS evaluation_criteria_id,
        ec.title AS evaluation_criteria_title,
        COUNT(qb.id) AS total_questions,
        ROUND(COUNT(qb.id) * 100.0 / 
            (SELECT COUNT(*) 
             FROM testquestions tq_sub 
             WHERE tq_sub.testid = p_testid), 2) AS percentage,
        s.title AS subject_title
    FROM 
        testquestions tq
    JOIN 
        questionbank qb ON tq.questionbankid = qb.id
	JOIN 
        subject_concepts sc on sc.subject_concept_id=qb.subject_concept_id
    JOIN 
        concepts ec ON sc.concept_id = ec.id
    JOIN 
        subjects s ON s.id = sc.subject_id
    WHERE 
        tq.testid = p_testid
    GROUP BY 
        ec.id, ec.title, s.title;
END $$

DELIMITER ;

call spgettestevaluationcriteriapercentage(1);

DROP PROCEDURE IF Exists spgetaveragereportbytestid;
DELIMITER $$

CREATE PROCEDURE spgetaveragereportbytestid(IN assessmentid INT)
BEGIN
    SELECT 
        s.title AS subjectname,
        ec.title AS concept,
        COUNT(ca.id) AS totalquestionsanswered,
        SUM(CASE 
            WHEN qb.answerkey = ca.answerkey THEN 1
            ELSE 0
        END) AS correctanswers,
        ROUND(
            (SUM(CASE WHEN qb.answerkey = ca.answerkey THEN 1 ELSE 0 END) / COUNT(ca.id)) * 100, 
            2
        ) AS percentagecorrect
    FROM 
        candidateanswers ca
        JOIN testquestions tq ON ca.testquestionid = tq.id
        JOIN questionbank qb ON tq.questionbankid = qb.id
        join subject_concepts sc on sc.subject_concept_id=qb.subject_concept_id
        join tests t on t.id=tq.testid
        join assessments a on a.test_id=t.id
        JOIN concepts ec ON sc.concept_id = ec.id
        JOIN subjects s ON sc.subject_id = s.id
    WHERE 
        a.id = assessmentid
    GROUP BY 
        s.id, ec.id;
END $$

DELIMITER ;

CALL spgetaveragereportbytestid(1);



DROP PROCEDURE IF Exists GetTestEmployeeDetailsByCandidate;
DELIMITER $$

CREATE PROCEDURE GetTestEmployeeDetailsByCandidate(IN candidate INT)
BEGIN
    SELECT 
        t.id  AS Id,
        a.id AS assessmentid,
        a.candidate_id,
        t.name AS testname,
        t.passinglevel,
        t.duration,
        a.scheduledstart,
        a.scheduledend,
        a.status
    FROM 
        assessments a
    JOIN 
        tests t ON a.test_id = t.id
    WHERE 
        a.candidate_id = candidate;
END $$

DELIMITER ;

CALL GetTestEmployeeDetailsByCandidate(4);


