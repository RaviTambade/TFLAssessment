using backend.DTOs;
using backend.Models;
using backend.Repositories.Interfaces;
using backend.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace backend.Services.Implementations
{
    public class UserSessionsService : IUserSessionsService
    {
        private readonly IUserSessionRepository _repo;

        public UserSessionsService(IUserSessionRepository repo)
        {
            _repo = repo;
        }

        public async Task<List<UserSessionDto>> GetUserSessionsAsync()
        {
            return await _repo.GetAllUserSessionsAsync();
        }

        public async Task<int> GetTotalUserSessionsAsync()
        {
            return await _repo.GetTotalUserSessionsAsync();
        }

    }
}