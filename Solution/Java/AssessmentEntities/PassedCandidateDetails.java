package com.transflower.tflAssessment.entities;

public class PassedCandidateDetails {
    private int testId ;
    private int candidateId ;
    private String firstName ;
    private String lastName ;
    private int passingLevel ;
    private int score ;

    public int getTestId(){
        return testId;
    }

    public void setTestId(int testId){
        this.testId =testId;
    }
    

    public int getCandidateId(){
        return candidateId;
    }

    public void setCandidateId(int candidateId){
        this.candidateId = candidateId;
    }

    public String getFirstName(){
        return firstName;
    }

    public void setFirstName(String firstName){
        this.firstName = firstName;
    }


    public String getLastName(){
        return lastName;
    }

    public void setLastName(String lastName){
        this.lastName =lastName;
    }


    public int getPassingLevel(){
        return passingLevel;
    }

    public void setPassingLevel(int passingLevel){
        this.passingLevel =passingLevel;
    }


    public int getScore(){
        return score;
    }

    public void setScore(int score){
        this.score =score;
    }
}

