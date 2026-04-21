
-- store procedure Student Assessment Result -- 
CREATE DEFINER=`root`@`%` PROCEDURE `GetStudentAssessmentReport`(
    IN p_student_id INT,
    IN p_assessment_id INT
)
BEGIN
    SELECT 
        p_student_id AS StudentId,
        p_assessment_id AS AssessmentId,

        -- ✅ Correct Answers (Score)
        COUNT(DISTINCT CASE 
            WHEN s.selectedoption = m.correct_answer THEN tq.question_id 
        END) AS Score,

        -- ✅ Total Questions
        COUNT(DISTINCT tq.question_id) AS TotalQuestions,

        -- ✅ Correct Answers
        COUNT(DISTINCT CASE 
            WHEN s.selectedoption = m.correct_answer THEN tq.question_id 
        END) AS CorrectAnswers,

        -- ✅ Wrong Answers
        COUNT(DISTINCT CASE 
            WHEN s.selectedoption != m.correct_answer 
                 AND s.selectedoption IS NOT NULL THEN tq.question_id 
        END) AS WrongAnswers,

        -- ✅ Percentage (0–100 always)
        ROUND(
            COUNT(DISTINCT CASE 
                WHEN s.selectedoption = m.correct_answer THEN tq.question_id 
            END) * 100.0 
            / COUNT(DISTINCT tq.question_id),
        2) AS Percentage

    FROM test_questions tq

    INNER JOIN mcq_options m 
        ON tq.question_id = m.question_id

    LEFT JOIN studentanswers s 
        ON tq.question_id = s.questionid
        AND s.studentid = p_student_id
        AND s.assessmentid = p_assessment_id

    WHERE tq.test_id = p_assessment_id;
END

CALL GetStudentAssessmentReport(1, 4);