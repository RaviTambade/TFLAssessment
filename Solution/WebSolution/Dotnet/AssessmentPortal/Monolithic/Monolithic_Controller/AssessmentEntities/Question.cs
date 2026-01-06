using System.Collections.Specialized;
using System.Text;

namespace Transflower.TFLAssessment.Entities;

public class Question{
 
    public int Id{get;set;}
    public string Title{get;set;}

    public string A{get;set;}
    public string B{get;set;}
    public string C{get;set;}
    public string D{get;set;}
    public int SubjectId{get;set;}
    public string AnswerKey{get;set;}
    public int ConceptId{get;set;}
    string difficultyLevel{get;set;}
}
