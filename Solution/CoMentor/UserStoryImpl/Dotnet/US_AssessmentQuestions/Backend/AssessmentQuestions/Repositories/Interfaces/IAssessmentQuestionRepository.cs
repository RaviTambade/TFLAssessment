using System;
using AssessmentQuestions.DTOs;
public interface IAssessmentQuestionRepository
{
    Task<List<AssessmentQuestionDto>> GetAssessmentQuestions(int assessmentId);
}