using AssessmentLib.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AssessmentLib.Repositories.Interface
{
    public interface IEvalutionCriteriaRepository
    {
        public Task<bool> UpdateSubject(int Id, int SubjectId);
        public Task<bool> InsertCriteria(EvalutionCriteria criteria);
        public Task<bool> UpdateCriteria(int EvalutionCriteriaId, int QuestionId);
    }
}
