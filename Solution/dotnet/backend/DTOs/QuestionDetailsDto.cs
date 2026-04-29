namespace backend.DTOs
{
    public class QuestionDetailsDto
    {
        public int QuestionId { get; set; }
        public string QuestionDescription { get; set; }
        public string QuestionType { get; set; }
        public string DifficultyLevel { get; set; }
        public string Status { get; set; }
        public string FrameworkName { get; set; }
        public string ConceptName { get; set; }
    }
}