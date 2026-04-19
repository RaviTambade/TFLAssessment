namespace backend.DTOs
{
    public class QuestionDetailsDto
    {
        public int QuestionId { get; set; }
        public string Description { get; set; }
        public string QuestionType { get; set; }
        public string DifficultyLevel { get; set; }
        public string Status { get; set; }

        public string FrameworkName { get; set; }
        public string ConceptName { get; set; }

        public string OptionA { get; set; }
        public string OptionB { get; set; }
        public string OptionC { get; set; }
        public string OptionD { get; set; }
        public string CorrectAnswer { get; set; }

        public string ProblemAnswer { get; set; }
    }
}