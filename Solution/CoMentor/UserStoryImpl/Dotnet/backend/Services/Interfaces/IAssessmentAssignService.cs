using System.Collections.Generic;
using System.Threading.Tasks;

public interface IAssessmentAssignService
{
    Task<List<TestDto>> GetTests();
    Task<List<StudentDto>> GetStudents();
    Task CreateAssessment(CreateAssessmentDto dto);
    
}