using Transflower.TFLAssessment.Repositories.Interfaces;
using Transflower.TFLAssessment.Entities;
namespace Transflower.TFLAssessment.Services.Interfaces;


public interface IAuthService
{
    Task<LoginResponse> GetUserWithRolesByEmail(string email, string password);
    Task<bool> AddUser(User user);
    Task<bool> ChangePassword(ChangePasswordRequest request);


}