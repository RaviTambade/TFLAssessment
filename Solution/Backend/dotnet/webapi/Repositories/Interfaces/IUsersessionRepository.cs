using System.Collections.Generic;
using System.Threading.Tasks;
using backend.DTOs;
using backend.Models;
using backend.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;



namespace backend.Repositories.Interfaces
{
    public interface IUserSessionRepository
    {
        Task<List<UserSessionDto>> GetAllUserSessionsAsync();
        Task<int> GetTotalUserSessionsAsync();
    }
}