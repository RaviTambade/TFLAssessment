using System.Dynamic;

namespace CSVFileIO.Entity{
public class Question
{
    public int Id{get;set;}
    public string Concept{get;set;}
    public string Subject{get;set;}
    public string Title{get;set;}
    public string A{get;set;}
    public string B{get;set;}
    public string C{get;set;}
    public string D{get;set;}
    public string AnswerKey{get;set;}
    public string DifficultyLevel{get;set;}
    public string CreatedBy{get;set;}
  
    public Question()
        {
            
        }
    public Question(int id, string concept, string subject,string title,string a,string b, string c, string d, string answerKey,string difficultyLevel,string createdBy)
    {
        this.Id = id;
        this.Concept = concept;
        this.Subject = subject;
        this.Title = title;
        this.A = a;
        this.B = b;
        this.C = c;
        this.D = d;
        this.AnswerKey = answerKey;
        this.DifficultyLevel = difficultyLevel;
        this.CreatedBy = createdBy;
    }

    
    public  string ToString()
        {
            return Id + "," + Concept + "," + Subject + "," + "\"" + Title + "\"," + A + "," + B + "," + C + "," + D + "," + AnswerKey + "," + DifficultyLevel + "," + CreatedBy;
        }
}
}