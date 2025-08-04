package com.transflower.tflAssessment.entities;

public class TestList{
    private int testId;
    private String testName;
    private int score;

    public TestList(){
        testId=0;
        testName=" ";
        score=0;
    }

    public TestList(int id,String name,int score){
        this.testId=id;
        this.testName=name;
        this.score=score;
    }

    public void setTestId(int testId){
        this.testId=testId;
    } 
    public int getTestId(){
        return testId;
    }

    public void setTestName(String name){
        this.testName=name;
    }
    public String getTestName(){
        return testName;
    }

    public void setScore(int score){
        this.score=score;
    }
    public int getScore(){
        return score;
    }
}
