using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AssessmentLib.Entities
{
    public class Question
    {
       public int Id {  get; set; }
       public string Title { get; set; }

        public string A { get; set; }
        public string B { get; set; }
        public string C { get; set; }
        public string D { get; set; }  
        
        public string SubjectId { get; set; }
        public string AnswerKey { get; set; }
        public int  EvalutionCriteriaId { get; set; }

    }
}
