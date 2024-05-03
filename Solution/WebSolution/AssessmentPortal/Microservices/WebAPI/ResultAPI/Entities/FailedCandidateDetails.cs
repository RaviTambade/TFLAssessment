namespace Transflower.Assessment.WebAPI.ResultAPI.Entities;

public class FailedCandidateDetails {
    public int TestId {get;set;}
    public int CandidateId {get;set;}

    public string FirstName {get;set;}
    public string LastName {get;set;}
    public int PassingLevel {get;set;}
    public int Score {get;set;}

}