using US_Admin_01.DTOs.Responses;
using US_Admin_01.Repositories.Interfaces;
using US_Admin_01.Services.Interfaces;

namespace US_Admin_01.Services.Implementation;

public class DashboardService : IDashboardService
{
    private readonly IDashboardRepository _repo;

    public DashboardService(IDashboardRepository repo)
    {
        _repo = repo;
    }

    public async Task<DashboardResponseDto> GetDashboardData()
    {
        return await _repo.GetDashboardData();
    }
}