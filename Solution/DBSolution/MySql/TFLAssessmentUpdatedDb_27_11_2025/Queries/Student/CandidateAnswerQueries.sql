-- get candidate answer(my update)
SELECT ca.candidateid ,qb.title, ca.answerkey as candidateAnswer ,qb.answerkey
from candidateanswers ca
join testquestions tq on ca.testquestionid=tq.id
join questionbank qb on qb.id=tq.questionbankid
WHERE candidateid = 4
AND testquestionid IN (SELECT testquestions.id FROM testquestions
inner join assessments on assessments.test_id=testquestions.testid where assessments.id=6);
 
-- get candidate answer result(original but both look same)
 SELECT 
ca.testquestionid,
ca.answerkey AS CandidateAnswer,
qb.answerkey AS CorrectAnswer
FROM candidateanswers ca
JOIN testquestions tq ON ca.testquestionid = tq.id
JOIN questionbank qb ON tq.questionbankid = qb.id
JOIN assessments a ON a.test_id = tq.testid
WHERE ca.candidateid = 4 AND a.id = 6;

