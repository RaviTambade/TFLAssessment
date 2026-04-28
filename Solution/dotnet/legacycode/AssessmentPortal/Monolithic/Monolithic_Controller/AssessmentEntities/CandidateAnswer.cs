namespace Transflower.TFLAssessment.Entities
{
    public class CandidateAnswer
    {
        public int Id { get; set; }          // Primary Key (not needed for insert, but good for completeness)
        public int CandidateId { get; set; } // Foreign Key 
       public int AssessmentId { get;set; }
        public int TestQuestionId { get; set; } // Foreign Key
        public string AnswerKey { get; set; } // Answer
    }
}
