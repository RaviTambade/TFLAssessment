using System.Threading.Tasks;
using backend.DTO.Requests;
using backend.DTO.Responses;
using backend.Models;
using backend.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System;
namespace backend.Services.Interfaces
{
    public interface IUserSessionsService
    {
        
        Task<List<UserSessions>> GetUserSessionsAsync();
        Task<int> GetTotalUserSessionsAsync();
    }
}