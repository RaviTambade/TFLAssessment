using System.Threading.Tasks;
using backend.DTOs;
using backend.Models;
using backend.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System;
namespace backend.Services.Interfaces
{
    public interface IUserSessionsService
    {
        Task<List<UserSessionDto>> GetUserSessionsAsync();
        Task<int> GetTotalUserSessionsAsync();
    }
}