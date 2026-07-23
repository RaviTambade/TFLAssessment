namespace API.DTOs
{
    public class GetQuestionsByTestId
    {
        public string Description { get; set; } = string.Empty;

        public string QuestionType { get; set; } = string.Empty;

        public string Language { get; set; } = string.Empty;

        public string Framework { get; set; } = string.Empty;
    }
}