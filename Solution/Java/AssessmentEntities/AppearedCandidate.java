// package com.transflower.tflAssessment.entities;

public class AppearedCandidate {
    private int testId;
    private int candidateId;
    private String firstName;
    private String lastName;

    public AppearedCandidate(){

    }
    public AppearedCandidate(int testId, int candidateId, String firstName,String lastname)
    {
        this.testId=testId;
        this.candidateId=candidateId;
        this.firstName=firstName;
        this.lastName=lastName;
    }

    public int getTestId()
    {
        return testId;

    }
    public void setTestId(int testId)
    {
        this.testId=testId;
    }
    public int getCandidateId()
    {
        return candidateId;
    }
    public void setCandidateId(int candidateId)
    {
        this.candidateId=candidateId;
    }
    public String getFirstName()
    {
        return firstName;
    }
    public void setFirstName(String firstName)
    {
        this.firstName=firstName;
    }
    public void setLastName(String lastName)
    {
        this.lastName=lastName;
    }
}
