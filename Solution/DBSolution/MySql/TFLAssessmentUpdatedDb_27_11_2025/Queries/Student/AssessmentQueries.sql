-- ****************************************************NEW QUERIES"*********************************************************

-- 1. Student Profile
SELECT e.id, e.firstname, e.lastname, e.email, e.contact
FROM employees e
WHERE e.id = 7;

-- 2. Total tests attempted by student
SELECT COUNT(*) AS total_tests_attempted
FROM assessments
WHERE candidate_id =4
AND status = 'conducted';

-- 3. Upcoming scheduled tests
SELECT t.name, ts.scheduledstart, ts.scheduledend, s.title AS subject
FROM testschedules ts
JOIN tests t ON ts.testid = t.id
JOIN subjects s ON t.subjectid = s.id
WHERE ts.candidateid =7
AND ts.status = 'scheduled';

-- 4. Assessment count by status
SELECT status, COUNT(*) AS total
FROM assessments
WHERE candidate_id = 7
GROUP BY status;

-- 5. Test-wise scores
SELECT t.name, ctr.score, ctr.teststarttime, ctr.testendtime
FROM candidatetestresults ctr
JOIN assessments a ON ctr.assessmentid = a.id
JOIN tests t ON a.test_id = t.id
WHERE ctr.candidateid = 4;

-- 6. Pass / Fail status
SELECT t.name,
       ctr.score,
       t.passinglevel,
       CASE 
         WHEN ctr.score >= t.passinglevel THEN 'PASS'
         ELSE 'FAIL'
       END AS result
FROM candidatetestresults ctr
JOIN assessments a ON ctr.assessmentid = a.id
JOIN tests t ON a.test_id = t.id
WHERE ctr.candidateid = 4;

-- 7. Average, highest, lowest score
SELECT 
  AVG(score) AS avg_score,
  MAX(score) AS highest_score,
  MIN(score) AS lowest_score
FROM candidatetestresults
WHERE candidateid = 4;

-- 8. Concept-wise accuracy
SELECT 
  c.id AS concept_id,
  c.title AS concept_name,
  COUNT(qb.id) AS total_questions,
  SUM(CASE 
        WHEN ca.answerkey = qb.answerkey THEN 1 
        ELSE 0 
      END) AS correct_answers,
  ROUND(
    (SUM(CASE WHEN ca.answerkey = qb.answerkey THEN 1 ELSE 0 END) 
     / COUNT(qb.id)) * 100, 2
  ) AS accuracy_percentage
FROM candidateanswers ca
JOIN testquestions tq ON ca.testquestionid = tq.id
JOIN questionbank qb ON tq.questionbankid = qb.id
JOIN subject_concepts sc ON qb.subject_concept_id = sc.subject_concept_id
JOIN concepts c ON sc.concept_id = c.id
WHERE ca.candidateid = 4
GROUP BY c.id, c.title;

-- 9. Performance by difficulty
SELECT 
  qb.difficulty_level,
  COUNT(*) AS total_questions,
  SUM(CASE WHEN ca.answerkey = qb.answerkey THEN 1 ELSE 0 END) AS correct_answers
FROM candidateanswers ca
JOIN testquestions tq ON ca.testquestionid = tq.id
JOIN questionbank qb ON tq.questionbankid = qb.id
WHERE ca.candidateid = 4
GROUP BY qb.difficulty_level;

-- 10. Incorrectly answered questions
SELECT 
  qb.title AS question,
  qb.answerkey AS correct_answer,
  ca.answerkey AS student_answer
FROM candidateanswers ca
JOIN testquestions tq ON ca.testquestionid = tq.id
JOIN questionbank qb ON tq.questionbankid = qb.id
WHERE ca.candidateid = 4
AND ca.answerkey <> qb.answerkey;

-- 11. Interview ratings & comments
SELECT 
  c.title AS concept,
  ir.ratings,
  ir.comments
FROM interviews i
JOIN interviewcriterias ic ON i.id = ic.interviewid
JOIN interviewresults ir ON ic.id = ir.interviewcriteriaid
JOIN concepts c ON ic.conceptid = c.id
WHERE i.candidateid = 7;


-- ****************************************************EXISTING QUERIES***************************************************

-- get assessmets details (student details)--  
SELECT t.id, t.smeid AS subjectExpertId, t.subjectid AS subjectId,CONCAT(e.firstName," ", e.lastName) AS candidateName,
t.name AS AssessmentName,t.status,t.passinglevel,
t.creationdate AS creationDate,t.modificationdate AS modificationDate,t.scheduleddate AS scheduledDate
FROM   tests t
JOIN assessments a ON t.id=a.test_id
LEFT JOIN employees e ON a.candidate_id = e.id 
WHERE a.id = 4;

-- get all subjects
select * from subjects;

-- get all concepts 
select * from concepts;

-- get all concepts by subject
select * from concepts c
join subject_concepts sc on c.id=sc.concept_id
where sc.subject_id=1;

-- get all tests (assigned to student)
select * from tests t
join assessments a on t.id=a.test_id
where a.candidate_id=7;

-- get annual report
select candidatetestresults.score as score,subjects.title,assessments.id 
from candidatetestresults
inner join assessments on assessments.id=candidatetestresults.assessmentid
inner join tests on tests.id=assessments.test_id
inner join subjects on subjects.id=tests.subjectid
where candidatetestresults.candidateid=4 and year(teststarttime)=2025;