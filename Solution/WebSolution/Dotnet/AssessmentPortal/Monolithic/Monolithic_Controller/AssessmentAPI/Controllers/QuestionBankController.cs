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
    public async Task<IActionResult> GetConcept(string subject, int questionId)
    {
        string criteria = await _svc.GetConcept(subject,questionId);
        if (string.IsNullOrEmpty(criteria))
        {
            _logger.LogWarning("Concept for question with ID {Id} not found at {DT}", questionId, DateTime.UtcNow.ToLongTimeString());
            return NotFound($"Concept for question with ID {questionId} not found.");
        }
        _logger.LogInformation("Get Concept for question with ID {Id} method invoked at {DT}", questionId, DateTime.UtcNow.ToLongTimeString());
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
    [HttpGet("questions/tests/{assessmentId}")]
    public async Task<IActionResult> GetQuestions(int assessmentId)
    {   
        Console.WriteLine(assessmentId);
        List<Question> questions =await _svc.GetQuestions(assessmentId);
        if (questions == null || questions.Count == 0)
        {
            _logger.LogWarning("No questions found for assessment ID {Id} at {DT}", assessmentId, DateTime.UtcNow.ToLongTimeString());
            return NotFound($"No questions found for assessment ID {assessmentId}.");
        }
        _logger.LogInformation("Get questions by assessment ID {Id} method invoked at {DT}", assessmentId, DateTime.UtcNow.ToLongTimeString());
        return Ok(questions);
    }



    //Get questions by subject concepts .
    //http://localhost:5238/api/questionbank/questions/subjects/4/concepts/1
    [HttpGet("questions/subjects/{subjectId}/concepts/{conceptId}")]
    public async Task<IActionResult> GetQuestionsBySubjectAndConcept(int subjectId,int conceptId)
    {   
        List<QuestionDetails> questions =await _svc.GetQuestionsBySubjectAndConcept(subjectId, conceptId);
        if (questions == null || questions.Count == 0)
        {
            _logger.LogWarning("No questions found for subject ID {SubjectId} and concept ID {ConceptId} at {DT}", subjectId, conceptId, DateTime.UtcNow.ToLongTimeString());
            return NotFound($"No questions found for subject ID {subjectId} and concept ID {conceptId}.");
        }   
        _logger.LogInformation("Get questions by subject ID {SubjectId} and concept ID {ConceptId} method invoked at {DT}", subjectId, conceptId, DateTime.UtcNow.ToLongTimeString());
        return Ok(questions);
    }


    
    //http://localhost:5238/api/questionbank/questions/subjects/options/4/concepts/1
    [HttpGet("questions/subjects/options/{subjectId}/concepts/{conceptId}")]
    public async Task<IActionResult> GetQuestionsBySubjectAndConceptWithOptions(int subjectId,int conceptId)
    {   
        List<QuestionDetails> questions =await _svc.GetQuestionsBySubjectAndConceptWithOptions(subjectId, conceptId);
        if (questions == null || questions.Count == 0)
        {
            _logger.LogWarning("No questions found for subject ID {SubjectId} and concept ID {ConceptId} at {DT}", subjectId, conceptId, DateTime.UtcNow.ToLongTimeString());
            return NotFound($"No questions found for subject ID {subjectId} and concept ID {conceptId}.");
        }   
        _logger.LogInformation("Get questions by subject ID {SubjectId} and concept ID {ConceptId} method invoked at {DT}", subjectId, conceptId, DateTime.UtcNow.ToLongTimeString());
        return Ok(questions);
    }
     //http://localhost:5238/api/questionbank/questions/subjects/options/answer/4/concepts/1
    [HttpGet("questions/subjects/options/answer/{subjectId}/concepts/{conceptId}")]
    public async Task<IActionResult> GetQuestionsBySubjectAndConceptWithOptionsAndAnswer(int subjectId,int conceptId)
    {   
        List<QuestionDetails> questions =await _svc.GetQuestionsBySubjectAndConceptWithOptionsAndAnswer(subjectId, conceptId);
        if (questions == null || questions.Count == 0)
        {
            _logger.LogWarning("No questions found for subject ID {SubjectId} and concept ID {ConceptId} at {DT}", subjectId, conceptId, DateTime.UtcNow.ToLongTimeString());
            return NotFound($"No questions found for subject ID {subjectId} and concept ID {conceptId}.");
        }   
        _logger.LogInformation("Get questions by subject ID {SubjectId} and concept ID {ConceptId} method invoked at {DT}", subjectId, conceptId, DateTime.UtcNow.ToLongTimeString());
        return Ok(questions);
    }

     //http://localhost:5238/api/questionbank/questions/subjects/1/concepts/1/questionId/1
    [HttpGet("questions/subjects/{subjectId}/concepts/{conceptId}/questionId/{questionId}")]
    public async Task<IActionResult> GetQuestionsBySubjectAndConceptAndQuestionId(int subjectId,int conceptId,int questionId)
    {   
        List<QuestionDetails> questions =await _svc.GetQuestionsBySubjectAndConceptAndQuestionId(subjectId, conceptId, questionId);
        if (questions == null || questions.Count == 0)
        {
            _logger.LogWarning("No questions found for subject ID {SubjectId} and concept ID {ConceptId} and questionId {questionId} at {DT} ", subjectId, conceptId,questionId, DateTime.UtcNow.ToLongTimeString());
            return NotFound($"No questions found for subject ID {subjectId} and concept ID {conceptId}.");
        }   
        _logger.LogInformation("Get questions by subject ID {SubjectId} and concept ID {ConceptId} method invoked at {DT}", subjectId, conceptId, DateTime.UtcNow.ToLongTimeString());
        return Ok(questions);
    }
     //http://localhost:5238/api/questionbank/questions/subjects/concepts
    [HttpGet("questions/subjects/concepts")]
    public async Task<IActionResult> GetQuestionsWithSubjectAndConcept()
    {   
        List<QuestionDetails> questions =await _svc.GetQuestionsWithSubjectAndConcept();
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
    public async Task<IActionResult> UpdateQuestionOptions(int id, [FromBody]Question options)
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


    

    [HttpGet("questionCount")]
    public async Task<IActionResult> GetSubjectQuestionCount()
    {
        List< SubjectQuestionCount > subjectQuestionCount = await _svc.GetSubjectQuestionCount();
        if(subjectQuestionCount.Count<0)
        {
            return NotFound("No subject with question count found.");
        }
        return Ok(subjectQuestionCount);
    }

   
    // GET: api/questions/by-concept
   // http://localhost:5238/api/questionbank/conceptId/1/subjectId/1/difficultyLevel/Beginner
   [HttpGet("conceptId/{conceptId}/subjectId/{subjectId}/difficultyLevel/{difficultyLevel}")]
public async Task<IActionResult> GetQuestionsByConceptAndLevel(int conceptId, int subjectId, string difficultyLevel)
{
    if (subjectId <= 0 || conceptId <= 0 || string.IsNullOrEmpty(difficultyLevel))
    {
        return BadRequest("Invalid parameters.");
    }

    var questions = await _svc.GetQuestionsByConceptAndLevel(
        subjectId, conceptId, difficultyLevel);

    if (questions == null || questions.Count == 0)
    {
        return NotFound("No questions found.");
    }

    return Ok(questions);
}



}

