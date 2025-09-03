package com.transflower.tflassessment.demo.entities;

import java.util.Objects;

public class CandidateResultDetails {
    private int candidateId;

    private int testId;
    
    private int correctAnswers;

    private int incorrectAnswers;

    private int skippedQuestions;

    public CandidateResultDetails()
    {

    }

    public CandidateResultDetails(int candidateId,int testId,int correctAnswer,int incorrectAnswers,int skippedQuestions)
    {
        this.candidateId = candidateId;
        this.testId = testId;
        this.correctAnswers = correctAnswer;
        this.incorrectAnswers = incorrectAnswers;
        this.skippedQuestions = skippedQuestions;
    }

    public int getCandidateId()
    {
        return candidateId;
    }

    public void setCandidateId(int candidateId)
    {
        this.candidateId = candidateId;
    }

    public int getTestId()
    {
        return testId;
    }

    public void setTestId(int testId)
    {
        this.testId = testId;
    }

    public int getCorrectAnswer()
    {
        return correctAnswers;
    }

    public void setCorrectAnswer(int correctAnswers)
    {
        this.correctAnswers = correctAnswers;
    }

    public int getIncorrectAnswer()
    {
        return incorrectAnswers;
    }

    public void setIncorrectAnswer(int incorrectAnswers)
    {
        this.incorrectAnswers = incorrectAnswers;
    }

    public int getSkippedQuestions()
    {
        return skippedQuestions;
    }

    public void setSkippedQuestions(int skippedQuestions)
    {
        this.skippedQuestions = skippedQuestions;
    }
    
    @Override
    public String toString()
    {
        return "CandidateResultDetails{candidateId' "+candidateId+" ',testId' "+testId+" ',correctAnswer' "+correctAnswers+" ',incorrectAnswer+' "+incorrectAnswers+" ',skippedQuestions+' "+skippedQuestions+"}";

    }
  
    @Override
    public boolean equals(Object obj)
    {
        if(this == obj) return true;
        if(obj == null || getClass() != obj.getClass()) return false;
        CandidateResultDetails CandidateResultDetails = (CandidateResultDetails) obj;
        return candidateId ==candidateId &&
               testId ==testId &&
               correctAnswers == correctAnswers &&
               incorrectAnswers == incorrectAnswers &&
               skippedQuestions == skippedQuestions;
    }

    @Override
    public int hashCode()
    {
        return Objects.hash(candidateId,testId,correctAnswers,incorrectAnswers,skippedQuestions);
    }
     
    @Override
    protected void finalize() throws Throwable
    {
        try{
            System.out.println("Finallized Called"+this);
        }finally{
            
        }
    }

    @Override
    protected Object clone() throws CloneNotSupportedException
    {
        return super.clone();
    }
}
