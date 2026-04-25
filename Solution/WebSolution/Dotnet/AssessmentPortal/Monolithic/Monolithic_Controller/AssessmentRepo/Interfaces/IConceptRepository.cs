using Transflower.TFLAssessment.Entities;
namespace Transflower.TFLAssessment.Repositories.Interfaces;

public interface IConceptRepository

{
    public Task <bool> UpdateSubject(int id, int subjectId);

    public Task <bool> InsertConcept(Concepts concept);

    public Task <bool> UpdateConcept(int conceptId, int questionId);

    public Task<List<Concepts>> GetConceptBySubjectId(int subjectId);

    public Task<List<ConceptQuestionCount>> getConceptQuestionCount(int subjectid);
}