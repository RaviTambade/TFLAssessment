//using Transflower.Entities;

using Transflower.TFLAssessment.Entities;

namespace Transflower.TFLAssessment.Repositories.Interfaces;


public interface ISubjectRepository
{
    // Get all subjects
    Task<List<SubjectModel>> GetAllSubject();
    // Add a new subject
    Task<int> AddSubject(SubjectModel subject);
    // Delete a subject by ID
    Task<int> DeleteSubject(int subjectId);
}
