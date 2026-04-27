package com.transflower.tflassessment.demo.entities;

import java.util.Objects;

public class AnnualCandidateResult {

    private int candidateId;
    private int score;
    private String subjectTitle;

    public AnnualCandidateResult() {

        this.candidateId = 0;
        this.score = 0;
        this.subjectTitle = "";
    }

    public AnnualCandidateResult(int candidateId, int score, String subjectTitle) {
        this.candidateId = candidateId;
        this.score = score;
        this.subjectTitle = subjectTitle;
    }
    public int getCandidateId() {
        return candidateId;
    }

    public void setCandidateId(int candidateId) {
        this.candidateId = candidateId;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public String getSubjectTitle() {
        return subjectTitle;
    }

    public void getSubjectTitle(String subjectTitle) {
        this.subjectTitle = subjectTitle;
    }

    @Override
    public String toString()
    {
        return "AnnualCandidateResult{"+
                 "candidateId =" +candidateId +
                ", score =" + score +
                ", subjectTitle =' "+subjectTitle + '\'' +
                '}';
    }
    @Override
    public boolean equals(Object obj){
        if(this == obj) return true;
        if(obj== null || getClass() !=obj.getClass()) return false;
        AnnualCandidateResult other=(AnnualCandidateResult) obj;
        return candidateId == other.candidateId &&
                 score == other.score &&
                //  subjectTitle == other.subjectTitle
                  Objects.equals(subjectTitle,other.subjectTitle);

    }
    @Override
    public int hashCode(){
        return Objects.hash(candidateId,score,subjectTitle);

    }
    @Override
    protected void finalize() throws Throwable {
        try {
         System.out.println("Finalize called for"+this);

        }
        finally {
            super.finalize();
            
        }
       
    }
    @Override
    protected Object clone() throws CloneNotSupportedException
    {
        return super.clone();
    }

}


