namespace Transflower.TFLAssessment.Entities;

public class NewQuestion{
    public int Id{get;set;}
    public int SubjectId{get;set;}
    public string Title{get;set;}
    public string A{get;set;}
    public string B{get;set;}
    public string C{get;set;}
    public string D{get;set;}
    public char AnswerKey{get;set;}
    public int EvaluationCriteriaId{get;set;}
}