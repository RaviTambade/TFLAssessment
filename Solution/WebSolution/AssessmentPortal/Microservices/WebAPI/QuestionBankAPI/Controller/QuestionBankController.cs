using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using QuestionBankEntities; 
using QuestionBankInterfaces;
using QuestionBankServices;

//Controller is now responsible to handle HTTP Requests
namespace Transflower.Assessment.WebAPI.QuestionBankAPI.Controllers;

[ApiController]
[Route("api/questionbank")]
public class QuestionBankController : ControllerBase
{
    private readonly ILogger<QuestionBankController> _logger;

    IQuestionBankService _svc = new QuestionBankService();
    public QuestionBankController(ILogger<QuestionBankController> logger)
    {
        _logger = logger;
        // Initialize with some sample data

    }

    //http://localhost:5172/api/questionbank/questions
    [HttpGet("questions")]
    public IActionResult GetAllQuestions()
    {
        List<QuestionTitle> questions = _svc.GetAllQuestions();
        _logger.LogInformation("Get all products method invoked at  {DT}", DateTime.UtcNow.ToLongTimeString());
        return Ok(questions);
    }


    //http://localhost:5172/api/questionbank/questions/2
    [HttpGet("questions/{questionId}")]
    public IActionResult GetQuestion(int questionId)
    {
        Question question = _svc.GetQuestion(questionId);
        return Ok(question);
    }

    [HttpGet("questions/subjects/{subject}/questions/{questionId}")]
    public IActionResult GetCriteria(string subject, int questionId)
    {
        string criteria = _svc.GetCriteria(subject,questionId);
        return Ok(criteria);
    }


    //get questions by subject .
    //http://localhost:5172/api/questionbank/questions/subjects/2
    [HttpGet("questions/subjects/{id}")]
    public IActionResult GetQuestionsBySubjects(int id)
    {   
        
        List<SubjectQuestion> questions = _svc.GetQuestionsBySubject(id);
        return Ok(questions);
    }


         
    //Get questions by testid .
    [HttpGet("questions/tests/{testId}")]
    public IActionResult GetQuestions(int testId)
    {   
        
        List<Question> questions = _svc.GetQuestions(testId);
        return Ok(questions);
    }

        
        
    //Get questions by subject criteria .
    //http://localhost:5172/api/questionbank/questions/subjects/4/criterias/1
    [HttpGet("questions/subjects/{subjectId}/criterias/{criteriaId}")]
    public IActionResult GetQuestionsBySubjectAndCriteria(int subjectId,int criteriaId)
    {   
        List<QuestionDetails> questions = _svc.GetQuestionsBySubjectAndCriteria(subjectId,criteriaId);
        return Ok(questions);
    }


        
       
    //Update  answer of the question. 
    [HttpPut("question/{id}/updateanswer/{answerKey}")]
    public IActionResult UpdateAnswer(int id ,char answerKey)
    {   
        bool status = _svc.UpdateAnswer(id,answerKey);
        return Ok(status);
    }

        

    //Update question options .
    //http://localhost:5172/api/questionbank/update/options/question/1
    [HttpPut("update/options/question/{id}")]
    public IActionResult UpdateQuestionOptions(int id,Question options)
    {

        bool  status = _svc.UpdateQuestionOptions(id,options);

        return Ok(status);
    }

    //  [HttpPut("update/subjectcriteria/question/{questionId}")]
    //   public IActionResult UpdateSubjectCriteria(int questionId,Question question)
    //   {

    //     bool  status = _svc.UpdateSubjectCriteria(questionId,question);

    //     return Ok(status);
    //   }

    //http://localhost:5172/api/questionbank/question
    [HttpPost("question")]
    public IActionResult InsertQuestion(NewQuestion question)
    {
            bool status = false;
        status = _svc.InsertQuestion(question);
        return Ok(status);
    }
      
}
