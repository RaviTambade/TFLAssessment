
using Transflower.TFLAssessment.Repositories.Interfaces;
using Transflower.TFLAssessment.Entities;
namespace Transflower.TFLAssessment.Services.Interfaces;

public interface IUserSessionService
{
    Task<bool> LoginAsync(long userId);
    Task<bool> LogoutAsync(long userId);
    Task<IEnumerable<UserSession>> GetUserHistory(int userId);

}


