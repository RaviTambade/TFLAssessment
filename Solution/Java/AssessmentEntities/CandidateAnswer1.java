package com.transflower.tflAssessment.entities;

public class CandidateAnswer1{
    private int  testQuestionId;
    private String  answer;

    public CandidateAnswer1()
    {

    }

    public CandidateAnswer1(int testQuestionId,String answer)
    {
        this.testQuestionId = testQuestionId;
        this.answer = answer;
    }

    public int getTestQuestionId()
    {
        return testQuestionId;
    }

    public void setTestQuestionId(int testQuestionId)
    {
        this.testQuestionId = testQuestionId;
    }

    public String getAnswer()
    {
        return answer;
    }

    public void setAnswer(String answer)
    {
        this.answer=answer;
    }
}