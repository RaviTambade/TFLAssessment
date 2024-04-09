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


    //http://localhost:5172/api/questionbank/questions/2
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

            return Ok( );
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
        // http://localhost:5172/api/questionbank/answer/question/1
        [HttpPut("answer/question/{id}")]
        public IActionResult UpdateAnswer(int id ,char answerKey)
        {
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

       
}
