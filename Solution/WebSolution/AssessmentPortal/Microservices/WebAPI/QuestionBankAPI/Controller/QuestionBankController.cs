using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;

using QuestionBankEntity; //-----------------------dll
using QuestionBankInterfaces;//-----------------------dll
using QuestionBankServices;//------------------------dll

//Controller is now responsible to handle HTTP Requests

[ApiController]
[Route("api/[controller]")]
public class QuestionBankController : ControllerBase
{ 
        public QuestionBankController()
        {
            // Initialize with some sample data
            
        }
        
        // GET: api/assessment
         IQuestionBankService _svc = new QuestionBankService();
      
      
        [HttpGet]
        public IActionResult GetQuestion(int questionId)
        {
            Question question = _svc.GetQuestion(id);
            return Ok(question);

            return Ok( );
        }

       // GET: api/questionbank/{id}
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {   
           
            QuestionTitle question = _svc.GetQuestion(id);
            return Ok(question);
        }


        [HttpGet("questions/subjects/{id}")]
        public IActionResult GetQuestionsBySubjects(int id)
        {   
           
            SubjectQuestion question = _svc.GetQuestionsBySubjects(id);
            return Ok(question);
        }


         [HttpGet("questions/subjects/{id}")]
        public IActionResult GetQuestionsBySubjectAndCriteria(int id)
        {   
           
            QuestionDetails question = _svc.GetQuestionsBySubjectAndCriteria(id);
            return Ok(question);
        }

        // PUT: api/assessments
        [HttpPut]
        public IActionResult UpdateAnswer(Question answer,int id)
        {

          bool  status = _svc.UpdateAnswer(answer,id);

          return status;
        }


        [HttpPut]
        public IActionResult UpdateQuestionOptions(int id,Question options)
        {

          bool  status = _svc.UpdateQuestionOptions(id,options);

          return status;
        }



       [HttpPut]
        public IActionResult UpdateSubjectCriteria(int questionId,Question question)
        {

          bool  status = _svc.UpdateSubjectCriteria(questionId,question);

          return status;
        }

       
}
