package com.transflower.tflassessment.demo.entities;

import java.util.Objects;

public class TestList implements Cloneable
{
    private int testId;
    private String testName;
    private int score;

    public TestList() {
        testId = 0;
        testName = " ";
        score = 0;
    }

    public TestList(int id, String name, int score) {
        this.testId = id;
        this.testName = name;
        this.score = score;
    }

    public void setTestId(int testId) {
        this.testId = testId;
    }

    public int getTestId() {
        return testId;
    }

    public void setTestName(String name) {
        this.testName = name;
    }

    public String getTestName() {
        return testName;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public int getScore() {
        return score;
    }

    @Override
    public String toString(){
        return "TestList{ Test Id : " +testId +"\t "
                +"Test Name : "+testName+"\t "
                +"Test Score : "+score+"}";
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null || getClass() != obj.getClass())
            return false;
        TestList other = (TestList) obj;
        return (testId == other.testId &&
                testName.equals(other.testName) &&
                score == other.score) ;
    }

    @Override
    public Object clone() throws CloneNotSupportedException{
        try{
            return new TestList(testId, testName, score);
        }catch(Exception e){
            System.out.println(e);
            return null;
        }
    }

    @Override
    public int hashCode(){
        return Objects.hash(testId,testName,score);
    }

}
