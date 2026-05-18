namespace backend.DTO.Responses;

    public class AssignAssessmentResults
    {
        public bool Success { get; set; }
        public string Message { get; set; } = string.Empty;
        public int AssignedCount { get; set; }
        public int SkippedCount { get; set; }
    }


//delete this dto
