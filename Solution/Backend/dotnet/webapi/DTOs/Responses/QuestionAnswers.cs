namespace backend.DTO.Responses;
public class QuestionAnswers
    {
        public int Id { get; set; }
        public int QuestionId { get; set; }
        public string SelectedOption { get; set; }
    }