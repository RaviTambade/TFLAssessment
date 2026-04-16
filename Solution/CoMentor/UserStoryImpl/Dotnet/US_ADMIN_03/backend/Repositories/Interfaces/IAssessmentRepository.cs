

using System.Collections.Generic;
using System.Threading.Tasks;

public interface IAssessmentRepository
{
    Task<List<AssessmentDto>> GetAllAssessments();
    
}