using backend.DTOs;
using backend.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using backend.Models;
using System.Threading.Tasks;
using System.Linq;
using System;
using backend.Repositories.Interfaces;



namespace backend.Repositories.Implementations
{
    public class UsersessionRepository : IUserSessionRepository
    {
        private readonly AppDbContext _context;


        public UsersessionRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<List<UserSessionDto>> GetAllUserSessionsAsync()
        {
            var sessions = await (from ul in _context.UserLogs
                                  join u in _context.Users on ul.UserId equals u.Id
                                  join pi in _context.PersonalInformations on u.Id equals pi.UserId
                                  orderby ul.LoginTime descending
                                  select new UserSessionDto
                                  {
                                      Id = ul.UserId ?? 0,
                                      Name = pi.FullName,

                                      LoginTime = ul.LoginTime.HasValue
                                          ? ul.LoginTime.Value.ToString("HH:mm dd-MM-yyyy")
                                          : "",

                                      LogoutTime = ul.LogoutTime.HasValue
                                          ? ul.LogoutTime.Value.ToString("HH:mm dd-MM-yyyy")
                                          : "",

                                      Status = ul.LogoutTime == null ? "Active" : "Inactive"
                                  }).ToListAsync();

            return sessions;

        }



    

    public async Task<int> GetTotalUserSessionsAsync()
        {
            return await _context.UserLogs.CountAsync();
        }


    }
}