namespace backend.Models
{
    public class FrameworkConcept
    {
        public long Id { get; set; }

        public int? FrameworkId { get; set; }
        public Framework? Framework { get; set; }

        public long? ConceptId { get; set; }
        public Concept? Concept { get; set; }
    }
}