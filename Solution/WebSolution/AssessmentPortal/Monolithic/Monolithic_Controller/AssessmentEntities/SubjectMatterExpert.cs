using System;

namespace Transflower.TFLAssessment.Entities
{
    public class SubjectMatterExpert
    {
        public int Id { get; set; }
        public int SubjectId { get; set; }
        public int EmployeeId { get; set; }

        // Navigation Properties
        public Subject Subject { get; set; }
        public Employee Employee { get; set; }
    }
}
