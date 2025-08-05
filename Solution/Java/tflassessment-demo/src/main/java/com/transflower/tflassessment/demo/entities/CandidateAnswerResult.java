package com.transflower.tflassessment.demo.entities;

import java.util.Objects;

public class CandidateAnswerResult {
    private int testQuestionId;
    private String candidateAnswer;
    private String correctAnswer;
    private boolean isCorrect;

    public CandidateAnswerResult()
    {

    }

    public CandidateAnswerResult(int testQuestionId,String candidateAnswer,String correctAnswer,boolean isCorrect)
    {
        this.testQuestionId = testQuestionId;
        this.candidateAnswer = candidateAnswer;
        this.correctAnswer = correctAnswer;
        this.isCorrect = isCorrect;
    }

    public int getTestQuestionId()
    {
        return testQuestionId;
    }

    public void setTestQuestionId(int testQuestionId)
    {
        this.testQuestionId = testQuestionId;
    }

    public String getCandidateAnswer()
    {
        return candidateAnswer;
    }

    public void setCandidateAnswer(String candidateAnswer)
    {
        this.candidateAnswer = candidateAnswer;
    }

    public String getCorrectAnswer()
    {
        return correctAnswer;
    }

    public void setCorrectAnswer(String correctAnswer)
    {
        this.correctAnswer = correctAnswer;
    }

    public  boolean getIsCorrect()
    {
        return isCorrect;
    }

    public void setIsCorrect(boolean isCorrect)
    {
        this.isCorrect = isCorrect;
    }

    @Override
    public String toString()
    {
        return "CandidateAnswerResult{testQuestionId =' "+testQuestionId+" ',candidateAnswer =' "+candidateAnswer+" ',correctAnswer =' "+correctAnswer+" ',isCorrect =' "+isCorrect+"}";
    }

    @Override
    public boolean equals(Object obj)
    {
        if(this == obj) return true;
        if(obj == null || getClass() != obj.getClass()) return false;
        CandidateAnswerResult that =(CandidateAnswerResult) obj;
        return testQuestionId == that.testQuestionId &&
               isCorrect == that.isCorrect &&
               Objects.equals(candidateAnswer,that.candidateAnswer);
               Objects.equals(correctAnswer,that.correctAnswer);
    }

    @Override
    public int hashCode()
    {
        return Objects.hash(testQuestionId,candidateAnswer,correctAnswer,isCorrect);
    }

    @Override
    protected void finalize() throws Throwable
    {
        try{
            System.out.println("Finallized Called"+this);
        }finally{
            super.finalize();
        }
    }

    @Override
    protected Object clone() throws CloneNotSupportedException
    {
       return super.clone();
    }
}

