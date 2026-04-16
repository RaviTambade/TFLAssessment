using System.Collections.Generic;
using System.Threading.Tasks;

public interface IAssessmentAssignService
{
    Task<List<TestDto>> GetTestsAsync();
    Task<List<StudentDto>> GetStudentsAsync();
    Task AssignAssessmentAsync(AssignAssessmentDto dto);
    
}