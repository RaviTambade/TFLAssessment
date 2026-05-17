namespace Transflower.TFLAssessment.Entities;
public class FailedCandidateDetails {
    public int AssessmentId {get;set;}
    public int CandidateId {get;set;}

    public string FirstName {get;set;}
    public string LastName {get;set;}
    public int PassingLevel {get;set;}
    public int Score {get;set;}

}