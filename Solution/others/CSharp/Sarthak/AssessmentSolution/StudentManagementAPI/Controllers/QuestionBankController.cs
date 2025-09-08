using AssessmentLib.Entities;
using AssessmentLib.Services.Interface;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using AssessmentLib.Services.Implementation;

namespace StudentManagementAPI.Controllers
{
    public class QuestionBankController : ControllerBase
    {
        private readonly ILogger<QuestionBankController> _logger;
        private readonly IQuestionBankService _svc;

        public QuestionBankController(ILogger<QuestionBankController> logger, IQuestionBankService service)
        {
            _logger = logger;
            _svc = service;
        }
        public async Task<IActionResult> GetAllQuestions()
        {
            List<QuestionTitle> questions = await _svc.GetAllQuestions();
            if (questions == null || questions.Count == 0)
            {
                _logger.LogWarning("No questions.found at {DT}", DateTime.UtcNow.ToLongTimeString());
                return NotFound("no question found");
            }
            _logger.LogInformation("Get all products method invoked at {DT} ", DateTime.UtcNow.ToLongTimeString());
            return Ok(questions);
        }
        public async Task<IActionResult> GetQuestion(int QuestionId)
        {
            Question question= await _svc.GetQuestion(QuestionId);
            if (question==null)
            {
                _logger.LogWarning("No questions.found at {DT}", DateTime.UtcNow.ToLongTimeString());
                return NotFound($"Question with Id {QuestionId} not found ");
            }
            _logger.LogInformation("Get question with ID {ID} method invoked at {DT}", QuestionId, DateTime.UtcNow.ToLongTimeString());
            return Ok(question);
        }
        public async Task<IActionResult> GetCriteria(string SubjectId, int QuestionId)
        {
            string criteria = await _svc.GetCriteria(SubjectId, QuestionId);
            if (string.IsNullOrEmpty(criteria))
            {
                _logger.LogWarning("Criteria for question with ID {Id} not found at {DT}", QuestionId, DateTime.UtcNow.ToLongTimeString());
                return NotFound($"Criteria for question with ID {QuestionId} not found.");
            }
            _logger.LogInformation("Get criteria for question with ID {Id} method invoked at {DT}", QuestionId, DateTime.UtcNow.ToLongTimeString());
            return Ok(criteria);
        }
        public async Task<IActionResult> GetQuestionsBySubjects(int id)
        {
            List<SubjectQuestion> questions = await _svc.GetQuestionsBySubject(id);
            if (questions == null || questions.Count == 0)
            {
                _logger.LogWarning("Criteria for question with ID {Id} not found at {DT}", id, DateTime.UtcNow.ToLongTimeString());
                return NotFound($"Criteria for question with ID {id} not found.");
            }
            _logger.LogInformation("Get criteria for question with ID {Id} method invoked at {DT}", id, DateTime.UtcNow.ToLongTimeString());
            return Ok(questions);
        }
        public async Task<IActionResult> GetQuestions(int TestId)
        {
            List<Question> questions = await _svc.GetQuestions(TestId);
            if (questions == null || questions.Count == 0)
            {
                _logger.LogWarning("No questions found for test ID {Id} at {DT}", TestId, DateTime.UtcNow.ToLongTimeString());
                return NotFound($" No questions found for test ID {TestId}.");
            }
            _logger.LogInformation("Get questions by Test ID {Id} method invoked at {DT}", TestId, DateTime.UtcNow.ToLongTimeString());
            return Ok(questions);
        }
        public async Task<IActionResult> GetQuestionsBySubjectAndCriteria(int SubjectId, int CriteriaId)
        {
            List<QuestionDetails> questions = await _svc.GetQuestionsBySubjectAndCriteria(SubjectId, CriteriaId);
            if (questions == null || questions.Count == 0)
            {
                _logger.LogWarning("No questions found for subjectID {SubjectId} and CriteriaId {CriteriaId} at {DT}", SubjectId, CriteriaId, DateTime.UtcNow.ToLongTimeString());
                return NotFound($" No questions found for SubjectId {SubjectId} and criteria Id {CriteriaId}.");
            }
            _logger.LogInformation("Get questions by subject ID {SubjectId} and criteria ID {CriteriaId} method invoked at {DT}", SubjectId, CriteriaId, DateTime.UtcNow.ToLongTimeString());
            return Ok(questions);
        }
        public async Task<IActionResult> GetQuestionsWithSubjectAndCriteria()
        {
            List<QuestionDetails> questions = await _svc.GetQuestionsWithSubjectAndCriteria();
            return Ok(questions);
        }
        public async Task<IActionResult> UpdateAnswer(int Id,char AnswerKey)
        {
            bool status= await _svc.UpdateAnswer(Id,AnswerKey);
            return Ok(status);
        }
        public async Task<IActionResult> UpdateQuestionOptions(int Id,Question option)
        {
            bool status = await _svc.UpdateQuestionOptions(Id,option);
            return Ok(status);
        }
        public async Task<IActionResult> InsertQuestion(Question question)
        {
            bool status=await _svc.InsertQuestion(question);
            return Ok(status);
        }
    }
}
