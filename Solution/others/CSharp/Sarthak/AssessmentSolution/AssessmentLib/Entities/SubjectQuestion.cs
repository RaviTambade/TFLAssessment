using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AssessmentLib.Entities
{
    public class SubjectQuestion
    {
        public int QuestionId { get; set; }
        public string Question { get; set; }
        public int SubjectId { get; set; }
        public string Subject { get; set; }
        
    }
}
