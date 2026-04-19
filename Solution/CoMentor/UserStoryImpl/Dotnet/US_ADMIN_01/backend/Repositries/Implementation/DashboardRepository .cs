
using Microsoft.EntityFrameworkCore;
using US_Admin_01.Data;
using US_Admin_01.DTOs.Responses;   
using US_Admin_01.Repositories.Interfaces;
using US_Admin_01.Services.Interfaces;
namespace US_Admin_01.Repositories.Implementation;

public class DashboardRepository : IDashboardRepository
{
    private readonly AppDbContext _context;

    public DashboardRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<DashboardResponseDto> GetDashboardData()
    {
        var today = DateTime.Today;
        var tomorrow = today.AddDays(1);

        // DASHBOARD STATS
        var activeUsers = await _context.UserLogs
            .Where(x => x.LogoutTime == null)
            .Select(x => x.UserId)
            .Distinct()
            .CountAsync();

        var loginsToday = await _context.UserLogs
            .CountAsync(x => x.LoginTime >= today && x.LoginTime < tomorrow);

       var sessionList = await _context.UserLogs
    .Where(x => x.LoginTime != null &&
                x.LogoutTime != null &&
                x.LoginTime >= today &&
                x.LoginTime < tomorrow)
    .Select(x => new { x.LoginTime, x.LogoutTime })
    .ToListAsync();

 double avgSession = sessionList.Any()
    ? sessionList.Average(x => (x.LogoutTime!.Value - x.LoginTime!.Value).TotalMinutes)
    : 0;

        // SUMMARY
        var totalStudents = await _context.UserRoles.CountAsync(x => x.RoleId == 2);
        var totalAssessments = await _context.Assessments.CountAsync();
        var completed = await _context.Assessments.CountAsync(x => x.Status == "Completed");
        var pending = await _context.Assessments.CountAsync(x => x.Status == "Pending");
        var assigned = await _context.Assessments.CountAsync(x => x.Status == "Assigned");

        // PERFORMANCE
        var avgScore = await _context.StudentAssessmentResults
            .AverageAsync(x => (double?)x.Score) ?? 0;

        var avgPercentile = await _context.StudentAssessmentResults
            .AverageAsync(x => (double?)x.Percentile) ?? 0;

        // SESSIONS TABLE (YOUR UI)
        var sessions = await (from ul in _context.UserLogs
                      join u in _context.Users on ul.UserId equals u.Id
                      join pi in _context.PersonalInformations on u.Id equals pi.UserId
                      orderby ul.LoginTime descending
                      select new UserSessionDto
                      {
                          Id = ul.UserId,
                          Name = pi.FullName,

                          LoginTime = ul.LoginTime.HasValue 
                              ? ul.LoginTime.Value.ToString("HH:mm dd-MM-yyyy") 
                              : "",

                          LogoutTime = ul.LogoutTime.HasValue 
                              ? ul.LogoutTime.Value.ToString("HH:mm dd-MM-yyyy") 
                              : "",

                          Status = ul.LogoutTime == null ? "Active" : "Inactive"
                      }).ToListAsync();

        return new DashboardResponseDto
        {
            DashboardStats = new DashboardStatsDto
            {
                ActiveUsers = activeUsers,
                LoginsToday = loginsToday,
                AvgSessionTime = Math.Round(avgSession, 2)
            },
            Summary = new SummaryDto
            {
                TotalStudents = totalStudents,
                TotalAssessments = totalAssessments,
                CompletedAssessments = completed,
                PendingAssessments = pending,
                AssignedAssessments = assigned
            },
            Performance = new PerformanceDto
            {
                AverageScore = avgScore,
                AveragePercentile = avgPercentile
            },
            Sessions = sessions
        };
    }

}

