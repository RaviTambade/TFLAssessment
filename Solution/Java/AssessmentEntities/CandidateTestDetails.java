package com.transflower.tflAssessment.entities;
import java.time.LocalDateTime;

public class CandidateTestDetails {
    
    private int candidateId;

    private String candidateName;

    private int testId;

    private String testName;

    private LocalDateTime testDate;

    private int testPassingLevel;

   public CandidateTestDetails() {
 
        this.candidateId = 0;
        this.candidateName=null;
        this.testId=0;
        this.testName=null;
        this.testDate=null;
        this.testPassingLevel=0;

    }

    public CandidateTestDetails(int candidateId, String candidateName, int testId, String testName, LocalDateTime testDate, int testPassingLevel) {
        this.candidateId = candidateId;
        this.candidateName = candidateName;
        this.testId = testId;
        this.testName = testName;
        this.testDate = testDate;
        this.testPassingLevel = testPassingLevel;
    }
    
    public int getCandidateId()
    {
        return this.candidateId;

    }
    public void setCandidateId(int id)
    {
        this.candidateId=id;
    }
    
     public String getCandidateName()
    {
        return this.candidateName;

    }
    public void setCandidateName(String name)
    {
        this.candidateName=name;

    }
    
    public int getTestId()
    {
        return this.testId;

    }
    public void setTestId(int id)
    {
        this.testId=id;

    }

    public String getTestName()
    {
        return this.testName;

    }
    public void setTestName(String name)
    {
        this.testName=name;

    }

    public LocalDateTime getTestDate()
    {
        return this.testDate;

    }
    public void setTestDate(LocalDateTime date)
    {
        this.testDate=date;

    }

    public int getTestPassingLevel()
    {
        return this.testPassingLevel;

    }
    public void setTestPassingLevel(int tplevel)
    {
        this.testPassingLevel=tplevel;


    }
}
