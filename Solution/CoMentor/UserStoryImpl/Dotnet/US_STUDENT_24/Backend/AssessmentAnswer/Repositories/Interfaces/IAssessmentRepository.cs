using System.Collections.Generic;
using System.Threading.Tasks;
using AssessmentAnswer.Data;

namespace AssessmentAnswer.Repositories.Interfaces;

public interface IAssessmentRepository
{
    Task<bool> SaveAssessmentAnswersAsync( List<StudentAnswer>? answers);
}
