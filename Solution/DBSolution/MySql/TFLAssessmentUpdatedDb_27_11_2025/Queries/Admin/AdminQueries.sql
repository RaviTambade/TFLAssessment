-- ***************************************************ADMIN QUERIES************************************************************

-- 1. Total users by role
-- GET /api/admin/users/role-summary
SELECT r.name AS role, COUNT(u.id) AS total_users
FROM users u
JOIN userroles ur ON u.id = ur.userid
JOIN roles r ON ur.roleid = r.id
GROUP BY r.name;

-- 2. Active vs inactive users (based on sessions)
-- GET /api/admin/users/activity-summary
SELECT 
  CASE 
    WHEN us.session_status = 'ACTIVE' THEN 'Active'
    ELSE 'Inactive'
  END AS user_status,
  COUNT(DISTINCT us.user_id) AS total_users
FROM user_session us
GROUP BY user_status;

-- 3. Recently registered users
-- GET /api/admin/users/recent
SELECT id, firstname, lastname, email, createdon
FROM users
ORDER BY createdon DESC
LIMIT 10;

-- 4. Subject-wise SME mapping
-- GET /api/admin/subjects/sme-mapping
SELECT 
  s.title AS subject,
  CONCAT(e.firstname,' ',e.lastname) AS sme_name
FROM subjectmatterexperts sme
JOIN employees e ON sme.employeeid = e.id
JOIN subjects s ON sme.subjectid = s.id;

-- 5. Concepts mapped per subject
-- GET /api/admin/subjects/concept-count
SELECT 
  s.title AS subject,
  COUNT(sc.concept_id) AS total_concepts
FROM subject_concepts sc
JOIN subjects s ON sc.subject_id = s.id
GROUP BY s.id;

-- 6. Orphan concepts (not mapped to any subject)
-- GET /api/admin/concepts/orphan
SELECT c.id, c.title
FROM concepts c
LEFT JOIN subject_concepts sc ON c.id = sc.concept_id
WHERE sc.concept_id IS NULL;

-- 7. Tests count by status
-- GET /api/admin/tests/status-summary
SELECT status, COUNT(*) AS total_tests
FROM tests
GROUP BY status;

-- 8. Assessments count by status
-- GET /api/admin/assessments/status-summary
SELECT status, COUNT(*) AS total_assessments
FROM assessments
GROUP BY status;

-- 9. Scheduled vs conducted assessments (monthly)
-- GET /api/admin/assessments/monthly-summary
SELECT 
  MONTH(scheduledstart) AS month,
  COUNT(*) AS total_assessments
FROM assessments
WHERE status IN ('scheduled','conducted')
GROUP BY MONTH(scheduledstart);

-- 10. Overall platform average score
-- GET /api/admin/analytics/platform-average-score
SELECT ROUND(AVG(score),2) AS platform_avg_score
FROM candidatetestresults;

-- 11. Subject-wise average score
-- GET /api/admin/analytics/subject-average-scores
SELECT 
  s.title AS subject,
  ROUND(AVG(ctr.score),2) AS avg_score
FROM candidatetestresults ctr
JOIN assessments a ON ctr.assessmentid = a.id
JOIN tests t ON a.test_id = t.id
JOIN subjects s ON t.subjectid = s.id
GROUP BY s.id;

-- 12. Pass vs Fail distribution
-- GET /api/admin/analytics/pass-fail-distribution
SELECT 
  CASE 
    WHEN ctr.score >= t.passinglevel THEN 'PASS'
    ELSE 'FAIL'
  END AS result,
  COUNT(*) AS total_students
FROM candidatetestresults ctr
JOIN assessments a ON ctr.assessmentid = a.id
JOIN tests t ON a.test_id = t.id
GROUP BY result;

-- 13. Top 10 performers
-- GET /api/admin/analytics/top-performers
SELECT 
  CONCAT(e.firstname,' ',e.lastname) AS student,
  ROUND(AVG(ctr.score),2) AS avg_score
FROM candidatetestresults ctr
JOIN employees e ON ctr.candidateid = e.id
GROUP BY e.id
ORDER BY avg_score DESC
LIMIT 10;

-- 14. Bottom 10 performers (at-risk)
-- GET /api/admin/analytics/top-performers
SELECT 
  CONCAT(e.firstname,' ',e.lastname) AS student,
  ROUND(AVG(ctr.score),2) AS avg_score
FROM candidatetestresults ctr
JOIN employees e ON ctr.candidateid = e.id
GROUP BY e.id
ORDER BY avg_score ASC
LIMIT 10;

-- 15. Total questions by difficulty
-- GET /api/admin/questions/difficulty-summary
SELECT difficulty_level, COUNT(*) AS total_questions
FROM questionbank
GROUP BY difficulty_level;

-- 16. Questions never answered correctly
-- GET /api/admin/questions/never-correct
SELECT qb.id, qb.title
FROM questionbank qb
JOIN testquestions tq ON qb.id = tq.questionbankid
JOIN candidateanswers ca ON tq.id = ca.testquestionid
GROUP BY qb.id
HAVING SUM(ca.answerkey = qb.answerkey) = 0;

-- 17. Highly problematic questions (>70% incorrect)
-- GET /api/admin/questions/problematic
SELECT 
  qb.title,
  ROUND(
    (SUM(CASE WHEN ca.answerkey <> qb.answerkey THEN 1 ELSE 0 END) 
     / COUNT(*)) * 100,2
  ) AS incorrect_percentage
FROM candidateanswers ca
JOIN testquestions tq ON ca.testquestionid = tq.id
JOIN questionbank qb ON tq.questionbankid = qb.id
GROUP BY qb.id
HAVING incorrect_percentage > 70;

-- 18. Average interview rating per SME
-- GET /api/admin/interviews/sme-average-ratings
SELECT 
  CONCAT(e.firstname,' ',e.lastname) AS sme_name,
  ROUND(AVG(ir.ratings),2) AS avg_rating
FROM interviewresults ir
JOIN interviewcriterias ic ON ir.interviewcriteriaid = ic.id
JOIN interviews i ON ic.interviewid = i.id
JOIN subjectmatterexperts sme ON i.smeid = sme.id
JOIN employees e ON sme.employeeid = e.id
GROUP BY sme.id;

-- 19. Interview count per subject
-- GET /api/admin/interviews/subject-summary
SELECT 
  s.title AS subject,
  COUNT(i.id) AS total_interviews
FROM interviews i
JOIN subjectmatterexperts sme ON i.smeid = sme.id
JOIN subjects s ON sme.subjectid = s.id
GROUP BY s.id;

-- 20. Daily login count
-- GET /api/admin/users/logins/daily
SELECT 
  DATE(login_time) AS login_date,
  COUNT(DISTINCT user_id) AS total_logins
FROM user_session
GROUP BY DATE(login_time);

-- 21. Users never logged in
-- GET /api/admin/users/never-logged-in
SELECT u.id, u.email
FROM users u
LEFT JOIN user_session us ON u.id = us.user_id
WHERE us.user_id IS NULL;

-- 22. Data integrity check – assessments without results
-- GET /api/admin/assessments/missing-results
SELECT a.id AS assessment_id
FROM assessments a
LEFT JOIN candidatetestresults ctr ON a.id = ctr.assessmentid
WHERE a.status = 'conducted'
AND ctr.id IS NULL;

-- 23. Tests without questions
-- GET /api/admin/tests/without-questions
SELECT t.id, t.name
FROM tests t
LEFT JOIN testquestions tq ON t.id = tq.testid
WHERE tq.id IS NULL;



