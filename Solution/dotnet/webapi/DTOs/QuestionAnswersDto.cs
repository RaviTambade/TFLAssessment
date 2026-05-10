namespace backend.DTOs;
public class QuestionAnswerDto
    {
        public int Id { get; set; }
        public int QuestionId { get; set; }
        public string SelectedOption { get; set; }
    }