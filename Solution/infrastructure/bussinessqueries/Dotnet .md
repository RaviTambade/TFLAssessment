 # .NET Business Queries — Structured Reference

This document lists the business query endpoints and stored-procedure usage with a consistent, easy-to-read format: **Requirement**, **Purpose** (two lines), 
---

## 1. GetAllUpcomingAssessments
**Requirement:** Fetch all upcoming assigned assessments for a specific student within a date range.
**Purpose:**
- Helps students view scheduled assessments and upcoming tests.
- Used by dashboard and calendar components to display scheduled items.


```sql
SELECT
    a.Id AS AssessmentId,
    t.Title AS AssessmentName,
    a.ScheduledAt,
    t.Duration,
    a.Status
FROM Assessments a
LEFT JOIN Tests t ON a.TestId = t.Id
WHERE a.StudentId = @UserId
  AND a.Status = 'Assigned'
  AND a.ScheduledAt BETWEEN @FromDate AND @ToDate
ORDER BY a.ScheduledAt ASC;
```

---

## 2. GetAllAssessments
**Requirement:** Retrieve all assessments with test, student, difficulty, status, and active information.
**Purpose:**
- Allow admins to monitor assessment records and activity.
- Provide reporting data for assessment management.


```sql
SELECT
    a.Id,
    t.Title AS AssessmentTitle,
    p.FirstName AS FullName,
    t.Difficulty AS DifficultyLevel,
    a.Status,
    a.IsActive
FROM Assessments a
LEFT JOIN Tests t ON a.TestId = t.Id
LEFT JOIN Users u ON a.StudentId = u.Id
LEFT JOIN PersonalInformations p ON u.Id = p.UserId;
```

---

## 3. DeactivateAssessment
**Requirement:** Deactivate an assessment by setting its `IsActive` flag to false.
**Purpose:**
- Temporarily disable an assessment without deleting its records.
- Preserve historical data and allow later restoration.


```sql
UPDATE Assessments
SET IsActive = 0
WHERE Id = @Id
  AND IsActive = 1;
```

---

## 4. CancelAssessmentsByTestId
**Requirement:** Cancel all active assessments for a specific test and mark the test inactive.
**Purpose:**
- Prevent students from attempting tests that are cancelled.
- Support test corrections or rescheduling workflows.


```sql
UPDATE Tests
SET Status = 0
WHERE Id = @TestId;

UPDATE Assessments
SET Status = 'Cancelled', IsActive = 0
WHERE TestId = @TestId
  AND IsActive = 1
  AND Status <> 'Completed';
```

---

## 5. RestoreAssessment
**Requirement:** Reactivate a previously deactivated assessment.
**Purpose:**
- Allow recovery of accidentally disabled assessments.
- Re-enable assessments for student access when appropriate.


```sql
UPDATE Assessments
SET IsActive = 1
WHERE Id = @Id
  AND IsActive = 0;
```

---

## 6. GetTestsAsync
**Requirement:** Retrieve all tests with basic metadata (title, duration, difficulty, description).
**Purpose:**
- Display available tests for assignment and management.
- Support admin and SME dashboards.


```sql
SELECT Id, Title, Duration, Description, Difficulty
FROM Tests;
```

---

## 7. AssignAssessmentAsync
**Requirement:** Assign a test to one or more students while preventing duplicate assignments.
**Purpose:**
- Enable scheduling assessments for multiple students.
- Ensure unique assignments and avoid duplicates.


```sql
-- Check existing assignments
SELECT StudentId FROM Assessments
WHERE TestId = @TestId
  AND StudentId IN (@StudentIds);

-- Insert (example single student)
INSERT INTO Assessments (TestId, StudentId, AssignedBy, AssignedAt, ScheduledAt, Status)
VALUES (@TestId, @StudentId, @AssignedBy, NOW(), @ScheduledAt, 'Assigned');
```

---

## 8. GetAssessmentQuestionsAsync
**Requirement:** Retrieve assessment questions with MCQ options in defined sequence order.
**Purpose:**
- Provide ordered questions and options during assessment attempts.
- Preserve sequence for fair assessment delivery.


```sql
SELECT
  ques.question_id AS QuestionId,
  ques.description  AS Description,
  ques.question_type AS QuestionType,
  MAX(mcq.option_a) AS OptionA,
  MAX(mcq.option_b) AS OptionB,
  MAX(mcq.option_c) AS OptionC,
  MAX(mcq.option_d) AS OptionD
FROM Assessments asm
JOIN Tests tst ON asm.test_id = tst.id
JOIN Test_Questions testQues ON testQues.test_id = tst.id
JOIN Questions ques ON ques.question_id = testQues.question_id
JOIN Mcq_Options mcq ON mcq.question_id = ques.question_id
WHERE asm.id = @AssessmentId
GROUP BY ques.question_id, ques.description, ques.question_type, testQues.sequence_order
ORDER BY testQues.sequence_order ASC;
```

---

## 9. SaveAssessmentAnswersAsync
**Requirement:** Persist student answers and mark the assessment as completed upon submission.
**Purpose:**
- Store submitted responses for grading and reporting.
- Update assessment lifecycle to `Completed` after submission.


```sql
DELETE FROM StudentAnswers
WHERE StudentId = @StudentId
  AND AssessmentId = @AssessmentId;

INSERT INTO StudentAnswers (StudentId, AssessmentId, QuestionId, Answer, CreatedAt)
VALUES (@StudentId, @AssessmentId, @QuestionId, @Answer, NOW());

UPDATE Assessments
SET Status = 'Completed'
WHERE Id = @AssessmentId;
```

---

## 10. GetResultData
**Requirement:** Produce a detailed assessment report via stored procedure.
**Purpose:**
- Generate student performance reports for results and analytics modules.
- Provide summary and per-question insights for review.


```sql
CALL GetStudentAssessmentReport(@StudentId, @AssessmentId);
```

---

## 11. GetTotalAssessmentsAsync
**Requirement:** Return the total number of assessments in the system.
**Purpose:**
- Supply statistics for dashboards and usage monitoring.
- Track assessment inventory across the platform.


```sql
SELECT COUNT(*) AS TotalAssessments FROM Assessments;
```

---

## 12. GetCompletedAssessmentsAsync
**Requirement:** Count all assessments with status `Completed`.
**Purpose:**
- Measure completed assessment activity for analytics.
- Support completion rate calculations.


```sql
SELECT COUNT(*) AS CompletedAssessments FROM Assessments WHERE Status = 'Completed';
```

---

## 13. GetFullData
**Requirement:** Retrieve combined assessment, test, student, and result details for reporting.
**Purpose:**
- Provide comprehensive data for admin dashboards and analytics.
- Support detailed reporting and exports.


```sql
SELECT a.Id, t.Title AS TestTitle, p.FullName AS StudentName,
       a.Status, a.AssignedAt, a.ScheduledAt,
       r.Score, r.Percentile, r.TimeTakenMinutes
FROM Assessments a
LEFT JOIN Tests t ON a.TestId = t.Id
LEFT JOIN Users u ON a.StudentId = u.Id
LEFT JOIN PersonalInformations p ON u.Id = p.UserId
LEFT JOIN StudentAssessmentResults r ON a.Id = r.AssessmentId;
```

---

## 14. AddSmeExpertise
**Requirement:** Insert SME expertise records into the expertise table.
**Purpose:**
- Map SMEs to runtime/framework/language expertise for test creation.
- Enable skill-based routing and filtering in the SME UI.


```sql
INSERT INTO expertise (user_roles_id, runtime, framework, layer, language)
VALUES (@UserRoleId, @Runtime, @Framework, @Layer, @Language);
```

---

## 15. GetAllConcepts
**Requirement:** Return all concepts associated with questions.
**Purpose:**
- Enable concept-based filtering and categorization during test authoring.
- Support analytics grouped by concept.


```sql
SELECT question_id, concept FROM questions;
```

---

## 16. GetQuestionDetailsWithAnswer
**Requirement:** Retrieve question details, framework/concept metadata, MCQ options, and the correct answer where applicable.
**Purpose:**
- Allow SMEs and admins to review question content and correctness.
- Support editing, validation, and export of question data.


```sql
SELECT q.question_id, q.description AS question_description, q.question_type,
       q.difficulty_level, q.status, f.name AS framework_name, c.name AS concept_name,
       m.option_a, m.option_b, m.option_c, m.option_d, m.correct_answer,
       psa.answer AS problem_answer
FROM questions q
LEFT JOIN question_framework_concepts qfc ON q.question_id = qfc.question_id
LEFT JOIN framework_concepts fc ON qfc.framework_concepts_id = fc.id
LEFT JOIN frameworks f ON fc.framework_id = f.id
LEFT JOIN concepts c ON fc.concept_id = c.id
LEFT JOIN mcq_options m ON q.question_id = m.question_id
LEFT JOIN problem_statement_answers psa ON q.question_id = psa.question_id
WHERE q.question_id = @question_id;
```

---

## 17. GetStudentAssessmentQuestionsResultAsync
**Requirement:** Retrieve per-question result details (correct/wrong) for a student's assessment.
**Purpose:**
- Provide detailed result analysis for student review and feedback.
- Support item-level analytics in result modules.


```sql
SELECT a.Id AS AssessmentId, a.StudentId,
       -- join other tables to include question-level results and correctness
FROM Assessments a
WHERE a.Id = @AssessmentId;
```

