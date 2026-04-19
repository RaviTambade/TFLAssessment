using US_Admin_01.DTOs.Responses;
namespace US_Admin_01.Services.Interfaces
{


public interface IDashboardService
{
    Task<DashboardResponseDto> GetDashboardData();
}
}