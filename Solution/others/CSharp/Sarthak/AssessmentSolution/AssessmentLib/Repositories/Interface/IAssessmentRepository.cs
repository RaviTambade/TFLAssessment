using AssessmentLib.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AssessmentLib.Repositories.Interface
{
    public interface IAssessmentRepository
    {
        public Task<Assessment> GetAllDetails(int AssessmentId);
        public Task<List<Assessment>> GetAll(DateTime? fromDate, DateTime toDate);
        public Task<List<Assessment>> GetAllTests();
        public Task<List<Assessment>> GetAllSubjectById(int userId);
        public Task<List<Employee>> GetAllEmployees();
        public Task<List<Employee>> GetEmployeeById(int userId);
        public Task<List<Subject>> GetAllSubjects();
        public Task<List<Subject>> GetEvalutionCriterias();
        public Task<List<EvalutionCriteria>> GetEvalutionCriteriaBySubject(int subjectId);
        public Task<bool> CreateTest(CreateTestRequest request);
        public Task<bool> AddQuestion(int AssessmentId, int QuestionId);
        public Task<bool> AddQuestions(int AssessmentId, List<QuestionBank> questions);
        public Task<bool> ChangeDuration(int AssessmentId,string duration);
        public Task<bool> Reschedule(int AssessmentId,DateTime date);
        public Task<bool>

    }
}
