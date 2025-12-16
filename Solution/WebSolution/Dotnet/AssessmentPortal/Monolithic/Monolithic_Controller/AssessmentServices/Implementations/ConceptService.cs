using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Services.Interfaces;
using Transflower.TFLAssessment.Repositories.Interfaces;

namespace Transflower.TFLAssessment.Services
{
    public class ConceptService : IConceptService
    {
        private readonly IConceptRepository _repository;
        
        public ConceptService(IConceptRepository repository)
        {
            _repository = repository;
        }

        public async Task<bool> UpdateSubject(int id, int subjectId)
        {
            return await _repository.UpdateSubject(id, subjectId);
        }

        public async Task<bool> InsertConcept(Concepts concept)
        {
            return await _repository.InsertConcept(concept);
        }

        public async Task<bool> UpdateConcept(int conceptId, int questionId)
        {
            return await _repository.UpdateConcept(conceptId, questionId);
        }

        public async Task<List<Concepts>> GetConceptBySubjectId(int subjectId)
        {
            return await _repository.GetConceptBySubjectId(subjectId);
        }

        public async Task<List<ConceptQuestionCount>> getConceptQuestionCount(int subjectid)
        {
            return await _repository.getConceptQuestionCount(subjectid);
        }
    }
}
