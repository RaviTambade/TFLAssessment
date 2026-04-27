package com.transflower.tflassessment.demo.entities;

import java.util.Objects;

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

    @Override
    public String toString()
    {
        return "CandidateAnswer{testQuestionId = ' "+testQuestionId+" ',answer = ' "+answer+"}";
    }

    @Override
    public boolean equals(Object obj)
    {
        if(this == obj) return true;
        if(obj == null || getClass() != obj.getClass()) return false;
        CandidateAnswer1 that =(CandidateAnswer1) obj;
        return testQuestionId == that.testQuestionId &&
        Objects.equals(answer,that.answer);
    }

    @Override
    public int hashCode()
    {
        return Objects.hash(testQuestionId,answer);
    }

    @Override
    protected void finalize() throws Throwable
    {
        try{
            System.out.println("Finalize called for"+this);
        }finally
        {
            super.finalize();
        }
    }

    protected Object clone() throws CloneNotSupportedException
    {
        return super.clone();
    }
}