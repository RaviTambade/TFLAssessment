 package com.transflower.tflassessment.entities;

import java.util.Objects;

public class AppearedCandidate {
    private int assessmentId;
    private int candidateId;
    private String firstName;
    private String lastName;

    public AppearedCandidate(){

    }
    public AppearedCandidate(int testId, int candidateId, String firstName,String lastname)
    {
        this.assessmentId=assessmentId;
        this.candidateId=candidateId;
        this.firstName=firstName;
        this.lastName=lastName;
    }

    public int getAssessmentId()
    {
        return assessmentId;

    }
    public void setAssessmentId(int testId)
    {
        this.assessmentId=assessmentId;
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
    public String getLastName()
    {
        return lastName;
    }
    public void setLastName(String lastName)
    {
        this.lastName=lastName;
    }
    @Override
    public String toString()
    {
        return "AppearedCandidate{"+
                 "testId=" + assessmentId +
                 "candidateId="+candidateId +
                 ", firstName = ' "+ firstName +
                 " ',lastName =' " + lastName +
                 '}';}
      @Override
      public boolean equals(Object obj)
      {
        if (this == obj ) return true;
        if(obj == null || getClass() != obj.getClass())return false;
        AppearedCandidate other=(AppearedCandidate )obj;
        return assessmentId == other.assessmentId &&
                 candidateId == other.candidateId &&
                 Objects.equals(firstName,other.firstName)&&
                 Objects.equals(lastName,other.lastName);
      }
      @Override
      public int hashCode()
      {
        return Objects.hash(assessmentId,candidateId,firstName,lastName);
      }

      @Override
      protected void finalize() throws Throwable {
        try {
            System.out.println("Finalize call for"+this);
        }
        finally{
            super.finalize();
        }
      }
      @Override
      protected Object clone() throws CloneNotSupportedException  
      {
        return super.clone();
      }  

}
