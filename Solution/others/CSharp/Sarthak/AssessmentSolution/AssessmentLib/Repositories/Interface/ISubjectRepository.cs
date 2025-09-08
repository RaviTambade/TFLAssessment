using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AssessmentLib.Entities;
namespace AssessmentLib.Repositories.Interface
{
    public interface ISubjectRepository
    {
        Task<List<SubjectModel>> GetAllSubject();
        Task<Boolean> AddSubject(SubjectModel subject);
        Task<Boolean> DeleteSubject(int subjectId);
    }
}
