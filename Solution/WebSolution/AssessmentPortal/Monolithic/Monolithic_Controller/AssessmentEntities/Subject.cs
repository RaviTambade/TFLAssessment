namespace Transflower.TflAssesment.Entities
{
    public class SubjectMatterExpert
    {
        public int Id { get; set; }
        public int SubjectId { get; set; }
        public int EmployeeId { get; set; }
        public Subject Subject { get; set; }
        public Employee Employee { get; set; }
    }
}
