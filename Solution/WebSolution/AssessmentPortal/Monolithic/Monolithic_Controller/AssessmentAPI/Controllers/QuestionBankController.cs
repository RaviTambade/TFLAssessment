using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Services.Interfaces;


//Controller is now responsible to handle HTTP Requests
// namespace Transflower.Assessment.WebAPI.QuestionBankAPI.Controllers;
namespace Transflower.TFLAssessment.Controllers;
[ApiController]
[Route("api/questionbank")]
public class QuestionBankController : ControllerBase
{
    private readonly ILogger<QuestionBankController> _logger;
    private readonly IQuestionBankService _svc;

    public QuestionBankController(ILogger<QuestionBankController> logger,IQuestionBankService service)
    {
        _logger = logger;
        _svc=service;
    }

    //http://localhost:5238/api/questionbank/questions
    [HttpGet("questions")]
    public async Task<IActionResult> GetAllQuestions()
    {
        List<QuestionTitle> questions =await _svc.GetAllQuestions();
        if (questions == null || questions.Count == 0)
        {
            _logger.LogWarning("No questions found at {DT}", DateTime.UtcNow.ToLongTimeString());
            return NotFound("No questions found.");
        }
        _logger.LogInformation("Get all products method invoked at  {DT}", DateTime.UtcNow.ToLongTimeString());
        return Ok(questions);
    }


    //http://localhost:5238/api/questionbank/questions/2
    [HttpGet("questions/{questionId}")]
    public async Task<IActionResult> GetQuestion(int questionId)
    {
        Question question = await _svc.GetQuestion(questionId);
        if (question == null)
        {
            _logger.LogWarning("Question with ID {Id} not found at {DT}", questionId, DateTime.UtcNow.ToLongTimeString());
            return NotFound($"Question with ID {questionId} not found.");
        }
        _logger.LogInformation("Get question with ID {Id} method invoked at {DT}", questionId, DateTime.UtcNow.ToLongTimeString());
        return Ok(question);
    }

    [HttpGet("questions/subjects/{subject}/questions/{questionId}")]
    public async Task<IActionResult> GetCriteria(string subject, int questionId)
    {
        string criteria = await _svc.GetCriteria(subject,questionId);
        if (string.IsNullOrEmpty(criteria))
        {
            _logger.LogWarning("Criteria for question with ID {Id} not found at {DT}", questionId, DateTime.UtcNow.ToLongTimeString());
            return NotFound($"Criteria for question with ID {questionId} not found.");
        }
        _logger.LogInformation("Get criteria for question with ID {Id} method invoked at {DT}", questionId, DateTime.UtcNow.ToLongTimeString());
        return Ok(criteria);
    }


    //get questions by subject .
    //http://localhost:5238/api/questionbank/questions/subjects/2
    [HttpGet("questions/subjects/{id}")]
    public async Task<IActionResult> GetQuestionsBySubjects(int id)
    {    
        List<SubjectQuestion> questions =await _svc.GetQuestionsBySubject(id);
        if (questions == null || questions.Count == 0)
        {
            _logger.LogWarning("No questions found for subject ID {Id} at {DT}", id, DateTime.UtcNow.ToLongTimeString());
            return NotFound($"No questions found for subject ID {id}.");
        }
        _logger.LogInformation("Get questions by subject ID {Id} method invoked at {DT}", id, DateTime.UtcNow.ToLongTimeString());
        return Ok(questions);
    }


         
    //Get questions by testid .
    [HttpGet("questions/tests/{testId}")]
    public async Task<IActionResult> GetQuestions(int testId)
    {   
        
        List<Question> questions =await _svc.GetQuestions(testId);
        if (questions == null || questions.Count == 0)
        {
            _logger.LogWarning("No questions found for test ID {Id} at {DT}", testId, DateTime.UtcNow.ToLongTimeString());
            return NotFound($"No questions found for test ID {testId}.");
        }
        _logger.LogInformation("Get questions by test ID {Id} method invoked at {DT}", testId, DateTime.UtcNow.ToLongTimeString());
        return Ok(questions);
    }

        
        
    //Get questions by subject criteria .
    //http://localhost:5238/api/questionbank/questions/subjects/4/criterias/1
    [HttpGet("questions/subjects/{subjectId}/criterias/{criteriaId}")]
    public async Task<IActionResult> GetQuestionsBySubjectAndCriteria(int subjectId,int criteriaId)
    {   
        List<QuestionDetails> questions =await _svc.GetQuestionsBySubjectAndCriteria(subjectId,criteriaId);
        if (questions == null || questions.Count == 0)
        {
            _logger.LogWarning("No questions found for subject ID {SubjectId} and criteria ID {CriteriaId} at {DT}", subjectId, criteriaId, DateTime.UtcNow.ToLongTimeString());
            return NotFound($"No questions found for subject ID {subjectId} and criteria ID {criteriaId}.");
        }   
        _logger.LogInformation("Get questions by subject ID {SubjectId} and criteria ID {CriteriaId} method invoked at {DT}", subjectId, criteriaId, DateTime.UtcNow.ToLongTimeString());
        return Ok(questions);
    }

    [HttpGet("questions/subjects/criterias")]
    public async Task<IActionResult> GetQuestionsWithSubjectAndCriteria()
    {   
        List<QuestionDetails> questions =await _svc.GetQuestionsWithSubjectAndCriteria();
        return Ok(questions);
    }

        
       
    //Update  answer of the question. 
    [HttpPut("question/{id}/updateanswer/{answerKey}")]
    public async Task<IActionResult> UpdateAnswer(int id ,char answerKey)
    {   
        bool status = await _svc.UpdateAnswer(id,answerKey);
        return Ok(status);
    }

        

    //Update question options .
    //http://localhost:5238/api/questionbank/update/options/question/1
    [HttpPut("update/options/question/{id}")]
    public async Task<IActionResult> UpdateQuestionOptions(int id,Question options)
    {

        bool  status = await _svc.UpdateQuestionOptions(id,options);

        return Ok(status);
    }


    //http://localhost:5238/api/questionbank/question
    [HttpPost("question")]
    public async Task<IActionResult> InsertQuestion(NewQuestion question)
    {
        bool status =await  _svc.InsertQuestion(question);
        return Ok(status);
    }
      
}
