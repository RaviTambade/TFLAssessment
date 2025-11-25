using Transflower.TFLAssessment.Entities;

namespace Transflower.TFLAssessment.Repositories.Interfaces;

public interface IUserAnalyticsRepository
{
    Task<double> GetTotalOnlineSecondsAsync(int userId);
    Task<int> GetActiveUsersCountAsync();
    Task<int> GetUserCount();
    Task<List<User>> GetTopTenUser();
    Task<String> GetAverageSessionDurationAsync();
    // Task<IEnumerable<UserSession>> GetUserSessionsAsync(long userId, DateTime? start, DateTime? end);
}
