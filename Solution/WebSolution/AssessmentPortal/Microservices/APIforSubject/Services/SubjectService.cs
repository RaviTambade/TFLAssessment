using Transflower.Entities;
using Transflower.SubjectAPI.Repositories.Interfaces;
using Transflower.SubjectAPI.Services.Interfaces;

namespace Transflower.SubjectAPI.Services;

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

   
}