namespace backend.DTO.Responses
{
    public class AssessmentPerformanceResponse
    {
        public long AssessmentId { get; set; }
        public string AssessmentName { get; set; }
        public string Difficulty { get; set; }
        public string Description { get; set; }
        public int CandidateCount { get; set; }

        // Temporary values
        public string Subject { get; set; }
        public double AverageScore { get; set; }
        public double PassRate { get; set; }
    }
}