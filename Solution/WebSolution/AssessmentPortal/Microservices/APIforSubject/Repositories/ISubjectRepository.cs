using Transflower.Entities;
namespace Transflower.SubjectAPI.Repositories.Interfaces;

public interface ISubjectRepository
{
    public Task <List<SubjectModel>> GetAllSubject();

    //public Task <string> GetSubjectById(int id);

}