using AssessmentLib.Repositories.Interface;
using AssessmentLib.Services.Interface;
using AssessmentLib.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AssessmentLib.Services.Implementation
{
    public class SubjectService:ISubjectService
    {
        private readonly ISubjectRepository _repository;

    public SubjectService(ISubjectRepository repository)
        {
            _repository= repository;
        }
    public async Task<List<SubjectModel>> GetAllSubject()
        {
            return await _repository.GetAllSubject();
        }
    public async Task<Boolean > AddSubject(SubjectModel subject )
        {
         return  await _repository.AddSubject(subject);

        }
        public async Task<Boolean> DeleteSubject(int SubjectId)
        {
            return await _repository.DeleteSubject(SubjectId);
          
        }

    }
}
