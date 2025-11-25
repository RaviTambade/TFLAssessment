using Transflower.TFLAssessment.Entities;
namespace Transflower.TFLAssessment.Repositories.Interfaces;

public interface IUserSessionRepository
{
    Task<bool> CreateLoginAsync(long userId);
    Task<bool> LogoutAsync(long userId);
    Task<IEnumerable<UserSession>> GetUserHistory(int userId);

}

