package com.transflower.tflAssessment.entities;

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
}

