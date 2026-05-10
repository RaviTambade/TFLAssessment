use assessmentdb;
-- GET /api/mentor/profile --

SELECT 
  CONCAT(e.firstname,' ',e.lastname) AS name,
  s.title AS subject
FROM subjectmatterexperts sme
JOIN employees e ON sme.employeeid = e.id
JOIN subjects s ON sme.subjectid = s.id
WHERE sme.id = 3;



-- GET /api/mentor/dashboard/summary --


SELECT
  COUNT(DISTINCT t.id) AS testsCreated,
  SUM(CASE WHEN t.status = 'conducted' THEN 1 ELSE 0 END) AS testsConducted,
  ROUND(AVG(ctr.score),2) AS averageScore,
  ROUND(
    (SUM(CASE WHEN ctr.score >= t.passinglevel THEN 1 ELSE 0 END)
     / COUNT(*)) * 100,2
  ) AS passPercentage
FROM tests t
JOIN assessments a ON t.id = a.test_id
JOIN candidatetestresults ctr ON a.id = ctr.assessmentid
WHERE t.smeid = 3;


-- GET /api/mentor/tests/performance --
SELECT 
  t.id AS testId,
  t.name AS testName,
  COUNT(ctr.id) AS appeared,
  SUM(CASE WHEN ctr.score >= t.passinglevel THEN 1 ELSE 0 END) AS passed,
  SUM(CASE WHEN ctr.score < t.passinglevel THEN 1 ELSE 0 END) AS failed
FROM tests t
JOIN assessments a ON t.id = a.test_id
JOIN candidatetestresults ctr ON a.id = ctr.assessmentid
WHERE t.smeid = 3
GROUP BY t.id;


-- GET /api/mentor/performance/concepts --
SELECT 
  c.title AS concept,
  ROUND(
    (SUM(CASE WHEN ca.answerkey = qb.answerkey THEN 1 ELSE 0 END)
     / COUNT(*)) * 100,2
  ) AS averageAccuracy
FROM candidateanswers ca
JOIN testquestions tq ON ca.testquestionid = tq.id
JOIN questionbank qb ON tq.questionbankid = qb.id
JOIN subject_concepts sc ON qb.subject_concept_id = sc.subject_concept_id
JOIN concepts c ON sc.concept_id = c.id
JOIN tests t ON tq.testid = t.id
WHERE t.smeid = 3
GROUP BY c.id;

-- GET /api/mentor/questions/problematic --
SELECT 
  qb.title AS question,
  ROUND(
    (COUNT(CASE WHEN ca.answerkey <> qb.answerkey THEN 1 END)
     / COUNT(*)) * 100,2
  ) AS incorrectPercentage
FROM candidateanswers ca
JOIN testquestions tq ON ca.testquestionid = tq.id
JOIN questionbank qb ON tq.questionbankid = qb.id
JOIN tests t ON tq.testid = t.id
WHERE t.smeid = 3
GROUP BY qb.id
ORDER BY incorrectPercentage DESC;

-- GET /api/mentor/interviews/analytics --
SELECT 
  c.title AS concept,
  ROUND(AVG(ir.ratings),2) AS averageRating
FROM interviewresults ir
JOIN interviewcriterias ic ON ir.interviewcriteriaid = ic.id
JOIN interviews i ON ic.interviewid = i.id
JOIN concepts c ON ic.conceptid = c.id
WHERE i.smeid = 3
GROUP BY c.id;

-- GET /api/mentor/students/at-risk --
SELECT 
  e.id AS studentId,
  CONCAT(e.firstname,' ',e.lastname) AS name,
  ROUND(AVG(ctr.score),2) AS averageScore
FROM candidatetestresults ctr
JOIN employees e ON ctr.candidateid = e.id
JOIN assessments a ON ctr.assessmentid = a.id
JOIN tests t ON a.test_id = t.id
WHERE t.smeid = 3
GROUP BY e.id
HAVING averageScore < 50;

-- GET /api/mentor/tests/status --
SELECT status, COUNT(*) AS total
FROM tests
WHERE smeid = 3
GROUP BY status;










