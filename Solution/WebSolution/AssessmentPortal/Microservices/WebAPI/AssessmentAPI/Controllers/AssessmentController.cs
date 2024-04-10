using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;

using AssessmentEntities; //-----------------------dll
using AssessmentInterfaces;//-----------------------dll
using AssessmentServices;//------------------------dll

//Controller is now responsible to handle HTTP Requests

[ApiController]
[Route("api/[controller]")]
public class AssessmentController : ControllerBase
{ 
        public AssessmentController()
        {
            // Initialize with some sample data
            
        }
        IAssessmentService _svc=new AssessmentService();

        // GET: api/assessment
        [HttpGet("creationdate/fromDate/{fromDate}/toDate/{toDate}")]
        public IActionResult GetAll(DateTime fromDate, DateTime toDate)
        {
            List<Assessment> assessments =_svc.GetAll( fromDate,  toDate);
            return Ok(assessments);
        }



        // GET: get all assessments

        //http://localhost:5151/api/assessment/assessments
        [HttpGet("assessments")]
        public IActionResult GetAllAssesment()
        {
            List<Assessment> assessments =_svc.GetAllTests();
            return Ok(assessments);
        }


          
          
     //http://localhost:5151/api/assessment/employees
     
     [HttpGet("employees")]
        public IActionResult GetAllEmployees()
        {
            List<Employee> employees =_svc.GetAllEmployees();
            return Ok(employees);
        }

           
        
        //http://localhost:5151/api/assessment/subjects
        [HttpGet("subjects")]
        public IActionResult GetAllSubjects()
        {
            List<Subject> subjects =_svc.GetAllSubjects();
            return Ok(subjects);
        }


       //http://localhost:5151/api/assessment/criterias
       [HttpGet("criterias")]
        public IActionResult GetEvalutionCriterias()
        {
            List<EvaluationCriteria> criterias =_svc.GetEvalutionCriterias();
            return Ok(criterias);
        }



       //http://localhost:5151/api/assessment/criterias/subjects/1
       [HttpGet("criterias/subjects/{subjectId}")]
        public IActionResult GetEvalutionCriteriasBySubject(int subjectId)
        {
            List<EvaluationCriteria> criterias =_svc.GetEvalutionCriteriasBySubject(subjectId);
            return Ok(criterias);
        }

       
        //http://localhost:5151/api/assessment/1
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            Assessment theAssessment=_svc.GetDetails(id);
            return Ok(theAssessment);
        }

        
        //http://localhost:5151/api/assessment/subjectexperts/2
        [HttpGet("subjectexperts/{smeId}")]
        public IActionResult GetAllBySubjectMatterExpert(int smeId)
        {
            List<Assessment> assessments=_svc.GetAllBySubjectMatterExpert(smeId);
            return Ok(assessments);

        }

         [HttpPost("createtest")]
        public IActionResult CreateTest( Assessment assessment)
        {
            bool status=_svc.CreateTest(assessment);
            return Ok(status);
        }

        [HttpPost("addquestion/assessments/{assessmentId}/questions/{questionId}")]
        public IActionResult AddQuestion(int assessmentId,int questionId)
        {
            bool status=_svc.AddQuestion(assessmentId,questionId);
            return Ok(status);
        }

        [HttpPost("addmultiplequestions/assessments/{assessmentId}")]
        public IActionResult AddQuestions(int assessmentId,List<TestQuestion> questions)
        {
            bool status=_svc.AddQuestions(assessmentId, questions);
            return Ok(status);
        }

        [HttpDelete("{assessmentId}/questions/{questionId}")]
        public IActionResult RemoveQuestion(int assessmentId,int questionId)
        {
            bool status=_svc.RemoveQuestion(assessmentId,questionId);
            return Ok(status);
        }

        [HttpPut("{assessmentId}/duration/{duration}")]
        public IActionResult ChangeDuration(int assessmentId,string duration)
        {
            bool status=_svc.ChangeDuration(assessmentId,duration);
            return Ok(status);
        }

        [HttpPut("{assessmentId}/reschedule/{date}")]
        public IActionResult Reschedule(int assessmentId,DateTime date)
        {
            bool status=_svc.Reschedule(assessmentId,date);
            return Ok(status);
        }

        [HttpDelete("deletequestions")]
        public IActionResult DeleteQuestions(int[] testQuestions)
        {
            bool status=_svc.DeleteQuestions(testQuestions);
            return Ok(status);
        }


     
      

}
