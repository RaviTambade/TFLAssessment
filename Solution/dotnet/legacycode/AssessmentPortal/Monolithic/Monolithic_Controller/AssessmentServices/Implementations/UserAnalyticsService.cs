using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Services.Interfaces;
using Transflower.TFLAssessment.Repositories.Interfaces;

namespace Transflower.TFLAssessment.Services;

public class UserAnalyticsService : IUserAnalyticsService
{
    private readonly IUserAnalyticsRepository _repository;
    private readonly IRoleRepository _rolerepository;

    public UserAnalyticsService(IUserAnalyticsRepository repository, IRoleRepository rolerepository)
    {
        _repository = repository;
        _rolerepository=rolerepository;

    }
    public async Task<double> GetTotalOnlineSecondsAsync(int userId)
    {
        return await _repository.GetTotalOnlineSecondsAsync( userId);
    }
    public async Task<int> GetActiveUsersCountAsync()
    {
        return await _repository.GetActiveUsersCountAsync();
    }
    public async Task<int> GetUserCount()
    {
        return await _repository.GetUserCount();
    }
    public async Task<List<User>> GetTopTenUser()
    {
       return await _repository.GetTopTenUser();
    }
     public async Task<String> GetAverageSessionDurationAsync()
    {
        return await _repository.GetAverageSessionDurationAsync();
    }

    public async Task<List<User>> GetActiveUsers()
    {
        return await _repository.GetActiveUsers();
    }

    public async Task<List<User>> GetAllUsers()
    {
        return await _repository.GetAllUsers();
    }
    // Task<IEnumerable<UserSession>> GetUserSessionsAsync(long userId, DateTime? start, DateTime? end);
}
