using AssessmentLib.Entities;
using AssessmentLib.Services.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AssessmentLib.Services.Implementation
{
    public class EvalutionCriteriaService : IEvalutionCriteriaService
    {
        private readonly IEvalutionCriteriaService _repository;
        public EvalutionCriteriaService(IEvalutionCriteriaService repository)
        {
            _repository = repository;
        }

        public async Task<bool> UpdateSubject(int Id, int SubjectId)
        {
            return await _repository.UpdateSubject(Id, SubjectId);
        }
        public async Task<bool> InsertCriteria(EvalutionCriteria criteria)
        {
            return await _repository.InsertCriteria(criteria);
        }
        public async Task<bool> UpdateCriteria(int EvalutionCriteriaId, int QuestionId)
        {
            return await _repository.UpdateCriteria(EvalutionCriteriaId, QuestionId);
        }
    }
}
