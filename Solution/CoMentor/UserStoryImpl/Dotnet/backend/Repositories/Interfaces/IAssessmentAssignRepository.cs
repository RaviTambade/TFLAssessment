using System.Collections.Generic;
using System.Threading.Tasks;

public interface IAssessmentAssignRepository
{
    Task<List<TestDto>> GetTests();
    Task<List<StudentDto>> GetStudents();
    Task CreateAssessment(CreateAssessmentDto dto);
   
}