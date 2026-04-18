using US_Admin_01.DTOs.Responses;
namespace US_Admin_01.Repositories.Interfaces
{
public interface IDashboardRepository
{
    Task<DashboardResponseDto> GetDashboardData();
}
}