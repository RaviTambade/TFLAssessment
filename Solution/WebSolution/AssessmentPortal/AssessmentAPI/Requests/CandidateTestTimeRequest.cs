using Assessment.Entities;

namespace Requests;
public class CandidateTestTimeRequest{

    public int CandidateId{get;set;}
    public int TestId{get;set;}
    public TestTime Time{get;set;}
}