package com.transflower.tflassessment.entities;

import java.util.Objects;

public class PassedCandidateDetails {
    private int assessmentId ;
    private int candidateId ;
    private String firstName ;
    private String lastName ;
    private int passingLevel ;
    private int score ;

    public PassedCandidateDetails()
    {

    }

    public PassedCandidateDetails(int assessmentId,int candidateId,String firstName,String lastName,int passingLevel,int score)
    {
        this.assessmentId = assessmentId;
        this.candidateId = candidateId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.passingLevel = passingLevel;
        this.score = score;
    }

    public int getAssessmentId(){
        return assessmentId;
    }

    public void setAssessmentId(int assessmentId){
        this.assessmentId =assessmentId;
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


     @Override     
    public boolean equals(Object obj){
    if (this==obj) return true;
    if(obj==null || getClass() != obj.getClass()) return false;
     PassedCandidateDetails other = (PassedCandidateDetails) obj;
       return Objects.equals(firstName, other.firstName) && Objects.equals(lastName, other.lastName);     
    }  
    
     @Override
    public int hashCode() {
    return Objects.hash(firstName, lastName);
    }


    @Override
    protected void finalize() throws Throwable {
    try {
    } finally {
        super.finalize();
    }
    }


    @Override
    public Object clone() throws CloneNotSupportedException {
    return super.clone();
    }

    @Override
     public String toString(){
     return "PassedCandidateDetails{assessmentId  ="+ assessmentId + " , candidateId = " + candidateId +" , firstName" + firstName + " , lastName" + lastName+ "passingLevel" +passingLevel+  " ,score " +score+ "}";
    }
}

