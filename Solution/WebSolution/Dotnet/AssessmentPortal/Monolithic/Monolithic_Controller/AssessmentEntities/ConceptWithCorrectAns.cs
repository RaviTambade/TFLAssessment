
namespace Transflower.TFLAssessment.Entities;

public class ConceptWithCorrectAns
{
        public int ConceptId { get; set; } 
        public string ConceptName { get; set; }
        public int TotalQuestions { get; set; }
        public int CorrectAnswers { get; set; }
}