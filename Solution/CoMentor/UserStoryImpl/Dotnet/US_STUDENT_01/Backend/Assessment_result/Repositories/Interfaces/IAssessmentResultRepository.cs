using System.Collections.Generic;
using System.Threading.Tasks;
using Assessment_result.Models; 
namespace Assessment_result.Repositories;

public interface IAssessmentResultRepository
{
  Task<AssessmentReportDto> GetResultData(int studentId, int assessmentId);  
}


