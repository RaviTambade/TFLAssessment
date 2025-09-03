using  Transflower.TFLAssessment.Entities;
namespace Transflower.TFLAssessment.Repositories.Interfaces;

public interface IAuthRepository
{
    Task<User> GetUserWithRolesByEmail(string email,string password);
}
