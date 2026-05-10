-- Fetch upcoming assigned assessments for a student
-- Used in: Student Dashboard / Upcoming Assessments Screen

SELECT
    a.Id                    AS AssessmentId,
    t.Title                 AS AssessmentName,   
    a.Scheduled_At          AS ScheduledAt,
    t.Duration              AS Duration,         
    a.Status                AS Status

FROM Assessments AS a

LEFT JOIN Tests AS t
    ON a.Test_Id = t.Id

LEFT JOIN Personal_Informations AS s
    ON a.Student_Id = s.User_Id

LEFT JOIN Personal_Informations AS c
    ON a.Assigned_By = c.User_Id

LEFT JOIN User_Roles AS ur
    ON a.Student_Id = ur.User_Id

LEFT JOIN Roles AS r
    ON ur.Role_Id = r.Role_Id
    AND LOWER(r.Role_Name) = 'student'

WHERE
    a.Student_Id = 4
    AND a.Status = 'Assigned'

ORDER BY
    a.Scheduled_At ASC;



-- 2] Get all assessments with test and student details

SELECT
    t.Title      AS AssessmentTitle,
    p.First_Name AS FullName,
    t.Difficulty AS DifficultyLevel,
    a.Status

FROM Assessments a
LEFT JOIN Tests t                 ON a.Test_Id = t.Id
LEFT JOIN Users u                 ON a.Student_Id = u.Id
LEFT JOIN Personal_Informations p ON u.Id = p.User_Id 


-- 3] Fetch basic details of each test
-- Used in: Test Listing Page / Test Detail View

SELECT
    t.Id,
    t.Title,
    t.Duration As Duration,  
    t.Description,
    t.Difficulty

FROM Tests AS t

-- 4] Fetch all students with their full name
-- Used in: Student Dropdown / Student Listing

SELECT
    u.Id   AS Id,
    p.Full_Name   AS FullName  

FROM Users AS u

JOIN Personal_Informations AS p
    ON u.Id = p.User_Id  



-- 5] Insert a new assessment record for a student
-- Used in: Assign Assessment / Admin Panel

INSERT INTO Assessments
    (Test_Id, Student_Id, Assigned_At, Scheduled_At, Status)

VALUES
    (@TestId,      
     @StudentId,    
     @Assigned_At,    
     @ScheduledAt,  
     @Status) 

--6] ============================================================
-- REQUIREMENT: Fetch all questions and their MCQ options
--              for a specific assessment.
-- Used in: Student Test Screen / Assessment Attempt Page
-- ============================================================

SELECT
    ques.question_id        AS QuestionId,

    ques.description        AS Description,

    ques.question_type      AS QuestionType,

    mcq.option_a            AS OptionA,
    mcq.option_b            AS OptionB,
    mcq.option_c            AS OptionC,
    mcq.option_d            AS OptionD

FROM Assessments AS asm

INNER JOIN Tests AS tst
    ON asm.Test_Id = tst.Id

INNER JOIN Test_Questions AS testQues
    ON testQues.Test_Id = tst.Id

INNER JOIN Questions AS ques
    ON ques.Question_Id = testQues.Question_Id

INNER JOIN Mcq_Options AS mcq
    ON mcq.Question_Id = ques.Question_Id

WHERE
    asm.Id = 4    
ORDER BY
    testQues.Sequence_Order ASC;  


- ============================================================
--7] REQUIREMENT: Save a student's answer for a specific question
--              during an assessment attempt.
-- Used in: Student Test Screen / Answer Submission
-- ============================================================

INSERT INTO Student_Answers
    (Student_Id, Assessment_Id, Question_Id, Selected_Option, Time_Taken_Minutes, Created_At)

VALUES
    (@StudentId,        
     @AssessmentId,     
     @QuestionId,       
     @SelectedOption,   
     @TimeTakenMinutes, 
     @CreatedAt)        