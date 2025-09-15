using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AssessmentLib.Entities
{
    public class Assessment
    {
        public int Id { get; set; }
        public string TestName {  get; set; }
        public int SubjectId {  get; set; }
        public TimeOnly Duration { get; set; }
        public int SubjectExpertId { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime ModificationDate {  get; set; }
        public DateTime ScheduledDate { get; set; }
        public string Status {  get; set; }
        public int PassingLevel {  get; set; }
        public string Subject { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

    }
}
