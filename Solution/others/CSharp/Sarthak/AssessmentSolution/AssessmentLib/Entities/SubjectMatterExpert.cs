using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AssessmentLib.Entities
{
    public class SubjectMatterExpert
    {
        public int Id { get; set; }
        public string EmployeeId { get; set; }
        public string SubjectId {  get; set; }
        
        public Subject Subject { get; set; }
        public Employee Employee { get; set; }


    }
}
