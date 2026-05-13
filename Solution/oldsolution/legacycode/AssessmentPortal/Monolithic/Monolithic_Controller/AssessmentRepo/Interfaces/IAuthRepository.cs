using  Transflower.TFLAssessment.Entities;
namespace Transflower.TFLAssessment.Repositories.Interfaces;

public interface IAuthRepository
{
    Task<User> GetUserWithRolesByEmail(string email,string password);
    Task<bool> AddUser(User user);
    Task<bool> CheckOldPassword(string email, string oldPassword);
    Task<bool> UpdatePassword(string email, string newPassword);


}
