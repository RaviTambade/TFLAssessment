namespace US_Admin_01.DTOs.Responses
{

public class DashboardStatsDto
{
    public int ActiveUsers { get; set; }
    public int LoginsToday { get; set; }
    public double AvgSessionTime { get; set; }
}
}