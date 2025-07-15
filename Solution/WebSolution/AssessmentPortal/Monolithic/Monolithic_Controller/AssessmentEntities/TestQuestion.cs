namespace Transflower.TFLAssessment.Entities;
public class TestQuestion{
    public int Id{get;set;}
    public string Title{get;set;}
    public string A{get;set;}
    public string B{get;set;}
    public string C{get;set;}
    public string D{get;set;}
    public int TestId{get;set;}
    public int EvaluationCriteriaId{get;set;}
    public string Criteria{get;set;}
    public string AnswerKey{get;set;} 
}
