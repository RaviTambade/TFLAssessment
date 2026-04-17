using System.Collections.Generic;
using System.Threading.Tasks;

public interface IAssessmentAssignRepository
{
    Task<List<TestDto>> GetTestsAsync();
    Task<List<StudentDto>> GetStudentsAsync();
    Task AssignAssessmentAsync(AssignAssessmentDto dto);
   
}