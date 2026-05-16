using backend.Models;

namespace backend.DTO.Responses;


public class StudentResults
{
    public string? student_name  { get; set; }
    public string? subject { get; set; }
    public string? assessment_title { get; set; }  // ❗ REQUIRED
    public float percentile { get; set; }
    public string? result_status { get; set; }
}


