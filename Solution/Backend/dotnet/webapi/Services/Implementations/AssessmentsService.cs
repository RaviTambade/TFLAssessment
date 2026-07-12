using System.Collections.Generic;
using System.Threading.Tasks;
using backend.DTO.Responses;
using backend.DTO.Requests;
using backend.Models;
using backend.Repositories.Interfaces;



namespace backend.Services.Interfaces
{


    public class AssessmentsService : IAssessmentsService
    {
        private readonly IAssessmentRepository _repository;

        public AssessmentsService(IAssessmentRepository repository)
        {
            _repository = repository;
        }

        public async Task<List<Assessments>> GetAllUpcomingAssessmentsService(long userId, DateTime fromDate, DateTime toDate )
        {
            return await _repository.GetAllUpcomingAssessments(userId,fromDate, toDate); 
        }

        public async Task<List<AllAssessments>> GetAssessments()
        {
            return await _repository.GetAllAssessments();
        }

        public async Task<List<Tests>> GetTestsAsync()
        {
            return await _repository.GetTestsAsync();
        }

        // public async Task<List<string>> GetStudentsAsync()
        // {
        //       return await Task.FromResult(new List<string>());
        // }

        // public async Task<List<Student>> GetStudentsAsync()
        // {
        //      await _repository.GetStudentsAsync();
        // }

          public async Task<List<Student>> GetStudentsAsync()
        {
            return await
                _repository.GetStudentsAsync();
        }

      public async Task AssignAssessmentAsync(AssignAssessments dto)
        {
            await _repository.AssignAssessmentAsync(dto);
        }

        //   public async Task<List<AssessmentResultDto>> GetAssessmentResults()
        // {
        //     return await _repository.GetAssessmentResults();
        // }

        public async Task<List<AssessmentQuestions>> GetAssessmentQuestionsAsync(int assessmentId)
        {
            return await _repository.GetAssessmentQuestionsAsync(assessmentId);
        }

        public async Task<bool> SaveAssessmentAnswersAsync(AssessmentAnswers submission)
        {
            // Convert DTO to List<StudentAnswer>
            var answers = submission.Answers?.Select(a => new StudentAnswer
            {
                StudentId = submission.StudentId,
                AssessmentId = submission.AssessmentId,
                QuestionId = a.QuestionId,
                SelectedOption = a.SelectedOption,
                TimeTakenMinutes = submission.TimeTakenMinutes,
                CreatedAt = DateTime.UtcNow
            }).ToList();

            return await _repository.SaveAssessmentAnswersAsync(answers);
        }
        public async Task<AssessmentReports> GetResultData(AssessmentstudentsResults request)
        {
            var result = await _repository.GetResultData(request.StudentId, request.AssessmentId);

            if (result == null)
                return null;

            return new AssessmentReports
            {
                StudentId = result.StudentId,
                AssessmentId = result.AssessmentId,
                Score = result.Score,
                TotalQuestions = result.TotalQuestions,
                CorrectAnswers = result.CorrectAnswers,
                WrongAnswers = result.WrongAnswers,
                Percentage = result.Percentage,
            };
        }

        public async Task<int> GetTotalAssessmentsAsync()
        {
            return await _repository.GetTotalAssessmentsAsync();
        }

        public async Task<int> GetCompletedAssessmentsAsync()
        {
            return await _repository.GetCompletedAssessmentsAsync();
        }

        public async Task<List<AllAssessments>> GetAllAssessments()
        {
            return await _repository.GetAllAssessments();
        }

        public async Task<bool> DeactivateAssessment(long id)
        {
            return await _repository.DeactivateAssessment(id);
        }

        public async Task<int> CancelAssessmentsByTestId(long testId)
        {
            return await _repository.CancelAssessmentsByTestId(testId);
        }

        public async Task<bool> RestoreAssessment(long id)
        {
            return await _repository.RestoreAssessment(id);
        }

        public async Task<List<AssessmentSummaries>> GetAssessmentSummariesForStudent(long studentId)
        {
            return await _repository.GetAssessmentSummariesForStudent(studentId);
        }

        public async Task<List<CompletedAssessmentsResponse>> GetCompletedAssessments(int studentId)
        {
            return await _repository.GetCompletedAssessments(studentId);
        }

    }

}
