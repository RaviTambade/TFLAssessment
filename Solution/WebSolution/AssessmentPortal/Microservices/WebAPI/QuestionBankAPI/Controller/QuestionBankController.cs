using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Services.Interfaces;


//Controller is now responsible to handle HTTP Requests
namespace Transflower.Assessment.WebAPI.QuestionBankAPI.Controllers;

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

    //http://localhost:5172/api/questionbank/questions
    [HttpGet("questions")]
    public async Task<IActionResult> GetAllQuestions()
    {
        List<QuestionTitle> questions =await _svc.GetAllQuestions();
        _logger.LogInformation("Get all products method invoked at  {DT}", DateTime.UtcNow.ToLongTimeString());
        return Ok(questions);
    }


    //http://localhost:5172/api/questionbank/questions/2
    [HttpGet("questions/{questionId}")]
    public async Task<IActionResult> GetQuestion(int questionId)
    {
        Question question = await _svc.GetQuestion(questionId);
        return Ok(question);
    }

    [HttpGet("questions/subjects/{subject}/questions/{questionId}")]
    public async Task<IActionResult> GetCriteria(string subject, int questionId)
    {
        string criteria = await _svc.GetCriteria(subject,questionId);
        return Ok(criteria);
    }


    //get questions by subject .
    //http://localhost:5172/api/questionbank/questions/subjects/2
    [HttpGet("questions/subjects/{id}")]
    public async Task<IActionResult> GetQuestionsBySubjects(int id)
    {    
        List<SubjectQuestion> questions =await _svc.GetQuestionsBySubject(id);
        return Ok(questions);
    }


         
    //Get questions by testid .
    [HttpGet("questions/tests/{testId}")]
    public async Task<IActionResult> GetQuestions(int testId)
    {   
        
        List<Question> questions =await _svc.GetQuestions(testId);
        return Ok(questions);
    }

        
        
    //Get questions by subject criteria .
    //http://localhost:5172/api/questionbank/questions/subjects/4/criterias/1
    [HttpGet("questions/subjects/{subjectId}/criterias/{criteriaId}")]
    public async Task<IActionResult> GetQuestionsBySubjectAndCriteria(int subjectId,int criteriaId)
    {   
        List<QuestionDetails> questions =await _svc.GetQuestionsBySubjectAndCriteria(subjectId,criteriaId);
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
    //http://localhost:5172/api/questionbank/update/options/question/1
    [HttpPut("update/options/question/{id}")]
    public async Task<IActionResult> UpdateQuestionOptions(int id,Question options)
    {

        bool  status = await _svc.UpdateQuestionOptions(id,options);

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
    public async Task<IActionResult> InsertQuestion(NewQuestion question)
    {
        bool status =await  _svc.InsertQuestion(question);
        return Ok(status);
    }
      
}
