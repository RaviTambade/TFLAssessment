 package com.transflower.tflassessment.demo.entities;

import java.util.Objects;

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
                 "testId=" + testId +
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
        return testId == other.testId &&
                 candidateId == other.candidateId &&
                 Objects.equals(firstName,other.firstName)&&
                 Objects.equals(lastName,other.lastName);
      }
      @Override
      public int hashCode()
      {
        return Objects.hash(testId,candidateId,firstName,lastName);
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
