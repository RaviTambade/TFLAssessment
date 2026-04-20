using System;
using System.Linq;
using System.Threading.Tasks;
using AssessmentAnswer.Data;
using AssessmentAnswer.DTOs;
using AssessmentAnswer.Repositories.Interfaces;
using AssessmentAnswer.Services.Interfaces;

namespace AssessmentAnswer.Services.Implementations
{
    public class AssessmentService : IAssessmentService
    {
        private readonly IAssessmentRepository _repo;

        public AssessmentService(IAssessmentRepository repo)
        {
            _repo = repo;
        }

        public async Task<bool> SaveAssessmentAnswersAsync(AssessmentAnswersDto submission)
        {
            if (submission == null)
            {
                throw new ArgumentNullException(nameof(submission));
            }

            var resultEntity = new StudentAssessmentResult
            {
                StudentId = submission.StudentId,
                AssessmentId = submission.AssessmentId,
                TimeTakenMinutes = submission.TimeTakenMinutes,
                Score = 0,
                Percentile = 0
            };

            var answerEntities = submission.Answers?
                .Select(a => new StudentAnswer
                {
                    StudentId = submission.StudentId,
                    AssessmentId = submission.AssessmentId,
                    QuestionId = a.QuestionId,
                    SelectedOption = a.SelectedOption,
                    TimeTakenMinutes = submission.TimeTakenMinutes,
                    CreatedAt = DateTime.UtcNow
                })
                .ToList();

            Console.WriteLine($"[Assessment Submission] StudentId: {submission.StudentId}, AssessmentId: {submission.AssessmentId}, TimeTaken: {submission.TimeTakenMinutes}min, Answers: {answerEntities?.Count ?? 0}");

            return await _repo.SaveAssessmentAnswersAsync( answerEntities);
        }
    }
}