using backend.DTO.Responses;

namespace backend.Repositories.Interfaces
{
    public interface IUserSessionRepository
    {
        Task<List<UserSessions>> GetAllUserSessionsAsync();
        Task<int> GetTotalUserSessionsAsync();
    }
}