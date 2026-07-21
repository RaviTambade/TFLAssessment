namespace backend.DTO.Responses
{
    public class UpcomingAssessmentResponse
    {
        public int AssessmentId { get; set; }
        public string AssessmentName { get; set; } = string.Empty;
        public DateTime ScheduledAt { get; set; }
        public int Duration { get; set; }
        public string Status { get; set; } = string.Empty;
    }
}