// using Transflower.Entities;
// using Transflower.SubjectAPI.Repositories.Interfaces;
// using Transflower.SubjectAPI.Services.Interfaces;

// namespace Transflower.SubjectAPI.Services;

using MySql.Data.MySqlClient;
using System.Data;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;
using Transflower.TFLAssessment.Services.Interfaces;
namespace Transflower.TFLAssessment.Services;

public class SubjectService : ISubjectService
{
    private readonly ISubjectRepository _repository;

    public SubjectService(ISubjectRepository repository)
    {
        _repository = repository;

    }
    /*public async Task<SubjectModel> GetDetails(int subjectId)
    {
       return await _repository.GetSubjectById(subjectId);
    }*/
    public async Task<List<SubjectModel>> GetAllSubject()
    {
        return await _repository.GetAllSubject();
    }

    public async Task<int> AddSubject(SubjectModel subject)
    {
        return await _repository.AddSubject(subject);
    }

    public async Task<int> DeleteSubject(int subjectId)
    {
        return await _repository.DeleteSubject(subjectId);
    }
     public async Task<List<SubjectModel>> GetSubjectsByEmployeeId(int smeId)
    {

        return await _repository.GetSubjectsByEmployeeId(smeId);

    }


}