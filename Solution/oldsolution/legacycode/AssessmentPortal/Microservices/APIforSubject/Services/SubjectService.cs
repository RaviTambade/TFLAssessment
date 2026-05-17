// using Transflower.Entities;
// using Transflower.SubjectAPI.Repositories.Interfaces;
// namespace Transflower.SubjectAPI.Services;

using APIforSubject.Entities;
using APIforSubject.Services.Interfaces;
using APIforSubject.Repositories.Interfaces;
namespace APIforSubject.Services;

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


}