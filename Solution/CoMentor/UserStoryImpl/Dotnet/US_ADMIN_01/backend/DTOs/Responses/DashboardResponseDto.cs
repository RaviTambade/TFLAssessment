
namespace US_Admin_01.DTOs.Responses
{
public class DashboardResponseDto
{
    public DashboardStatsDto? DashboardStats { get; set; }
    public SummaryDto? Summary { get; set; }
    public PerformanceDto? Performance { get; set; }

    public List<UserSessionDto>? Sessions { get; set; } 
}
}