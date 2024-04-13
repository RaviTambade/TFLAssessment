using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;

using QuestionBankEntities; //-----------------------dll
using QuestionBankInterfaces;//-----------------------dll
using QuestionBankServices;//------------------------dll

//Controller is now responsible to handle HTTP Requests

[ApiController]
[Route("api/questionbank")]
public class QuestionBankController : ControllerBase
{ 
        public QuestionBankController()
        {
            // Initialize with some sample data
            
        }
         IQuestionBankService _svc = new QuestionBankService();


    //http://localhost:5172/api/questionbank/questions
    [HttpGet("questions")]
    public IActionResult GetAllQuestions()
    {
        List<QuestionTitle> questions = _svc.GetAllQuestions();
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
        [HttpPut("/question/{id}/updateanswer")]
        public IActionResult UpdateAnswer(int id ,[FromBody]char answerKey)
        {
            Console.WriteLine("Id and answerkey:"+id+answerKey);
             bool status = false;
            status = _svc.UpdateAnswer(id,answerKey);
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
