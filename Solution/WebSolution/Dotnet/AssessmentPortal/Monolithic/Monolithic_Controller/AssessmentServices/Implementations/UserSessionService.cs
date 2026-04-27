using MySql.Data.MySqlClient;
using System.Data;
using Transflower.TFLAssessment.Entities;
using Transflower.TFLAssessment.Repositories.Interfaces;
using Transflower.TFLAssessment.Services.Interfaces;
namespace Transflower.TFLAssessment.Services;
public class UserSessionService : IUserSessionService
{
    private readonly IUserSessionRepository _repo;

    public UserSessionService(IUserSessionRepository repo)
    {
        _repo = repo;
    }

    public Task<bool> LoginAsync(long userId){
        return _repo.CreateLoginAsync(userId);
    }

    public Task<bool> LogoutAsync(long userId){
        return _repo.LogoutAsync(userId);
    }

    public Task<IEnumerable<UserSession>> GetUserHistory(int userId)
    {
        return _repo.GetUserHistory(userId);
    }

}


