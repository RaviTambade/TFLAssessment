package com.transflower.tflassessment.demo.entities;

import java.util.Objects;

public class CandidateSubjectResults {
    private int testId;
    private int subjectId;
    private int candidateId;
    private String firstName;
    private String lastName;
    private String subject;
    public int score;

    public CandidateSubjectResults()
    {

    }

    public CandidateSubjectResults(int testId,int subjectId,int candidateId,String firstName,String lastname,String subject,int score)
    {
        this.testId = testId;
        this.subjectId = subjectId;
        this.candidateId = candidateId;
        this.firstName = firstName;
        this.lastName = lastname;
        this.subject = subject;
        this.score = score;
    }

    public int getTestId()
    {
        return testId;
    }

    public void setTestId(int testId)
    {
        this.testId = testId;
    }

    public int getSubjectId()
    {
        return subjectId;
    }

    public void setSubjectId(int subjectId)
    {
        this.subjectId = subjectId;
    }

    public int getCandidateId()
    {
        return candidateId;
    }

    public void setCandidateId(int candidateId)
    {
        this.candidateId = candidateId;
    }

    public String getFirstName()
    {
        return firstName;
    }

    public void setFirstName(String firstName)
    {
        this.firstName = firstName;
    }

    public String getLastName()
    {
        return lastName;
    }
    
    public void setLastName(String lastName)
    {
        this.lastName = lastName;
    }

    public String getSubject()
    {
        return subject;
    }

    public void setSubject(String subject)
    {
        this.subject = subject;
    }

    public int getScore()
    {
        return score;
    }

    public void setScore(int score)
    {
        this.score = score;
    }

    @Override
    public String toString()
    {
        return "CandidateSubjectResults{testId' "+testId+" ',subjectId' "+subjectId+" ',candidateId' "+candidateId+" ',fistName' "+firstName+" ',lastName' "+lastName+" ',subject' "+subject+" ',score' "+score+"}";
    }

    @Override
    public boolean equals(Object obj)
    {
        if(this == obj) return true;
        if(obj == null || getClass() != obj.getClass()) return false;
        CandidateSubjectResults that = (CandidateSubjectResults) obj;
        return testId == that.testId &&
                subjectId == that.subjectId &&
                candidateId == that.candidateId &&
                score == that.score &&
                Objects.equals(firstName,that.firstName) &&
                Objects.equals(lastName,that.lastName) &&
                Objects.equals(subject,that.subject);
    }

    @Override
    public int hashCode()
    {
        return Objects.hash(testId,subjectId,candidateId,firstName,lastName,subject,score);
    }

    @Override
    public void finalize() throws Throwable
    {
        try{
            System.out.println("Finilizaed called"+this);
        }finally
        {
           
        }
    }

    @Override
    protected Object clone() throws CloneNotSupportedException
    {
        return super.clone();
    }
}
