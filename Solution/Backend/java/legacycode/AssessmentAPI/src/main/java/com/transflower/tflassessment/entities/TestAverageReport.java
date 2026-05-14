package com.transflower.tflassessment.entities;

import java.util.Objects;

public class TestAverageReport implements Cloneable

{
    private String subjectName;
    private String concept;
    private int totalQuestionAnswered;
    private int correctAnswer;
    private double percentageCorrect;

    public TestAverageReport(){
        this.subjectName = "";
        this.concept="";
        this.totalQuestionAnswered = 0;
        this.correctAnswer=0;
        this.percentageCorrect=0.0;
    }

    public TestAverageReport(String subjectName,String concept, int totalQuestionAnswered,int correctAnswer, double percentageCorrect)
    {
        this.subjectName = subjectName;
        this.concept=concept;
        this.totalQuestionAnswered=totalQuestionAnswered;
        this.correctAnswer=correctAnswer;
        this.percentageCorrect=percentageCorrect;
    }

    public String getSubjectName()
    {
        return subjectName;
    }

    public void setSubjectName(String subjectName)
    {
        this.subjectName=subjectName;
    }

    public String getConcept() {
        return concept;
    }

    public void setConcept(String concept) {
        this.concept = concept;
    }

    public int getTotalQuestionAnswered() {
        return totalQuestionAnswered;
    }

    public void setTotalQuestionAnswered(int totalQuestionAnswered) {
        this.totalQuestionAnswered = totalQuestionAnswered;
    }

    public int getCorrectAnswer() {
        return correctAnswer;
    }

    public void setCorrectAnswer(int correctAnswer) {
        this.correctAnswer = correctAnswer;
    }

    public double getPercentageCorrect() {
        return percentageCorrect;
    }

    public void setPercentageCorrect(double percentageCorrect) {
        this.percentageCorrect = percentageCorrect;
    }

       @Override
    public String toString()
    {
        return "TestAverageReport{"+
        "Subject Name="+ subjectName+
        ",Concept='"+ concept+
        ",Total Question Answered='"+ totalQuestionAnswered+
        ",Correct Answer='"+ correctAnswer+
        ",Percentage Correct='"+ percentageCorrect+"'}";
    }

    @Override
    public boolean equals(Object obj)
    {
        if(this==obj) return true;
        if(obj==null || getClass() !=obj.getClass())return false;
        TestAverageReport other=(TestAverageReport) obj;
        return Objects.equals(subjectName,other.subjectName)
         &&  Objects.equals(concept,other.concept) 
         && totalQuestionAnswered == other.totalQuestionAnswered 
         && correctAnswer == other.correctAnswer
          && percentageCorrect == other.percentageCorrect;
    }

    @Override
    public int hashCode()
    {
        return Objects.hash(subjectName, concept, totalQuestionAnswered, correctAnswer, percentageCorrect);
    }

    @Override
    public void finalize() throws Throwable
    {
        try{
            System.out.println("Finalize called for"+this);
        }
       finally{
            super.finalize();
        }
    }

   @Override
    protected Object clone()throws CloneNotSupportedException
    {
        try
        {
            return new TestAverageReport(subjectName,concept,totalQuestionAnswered,correctAnswer,percentageCorrect);
        }
        catch(Exception e)
        {
            System.out.println("Clone Exception");
            return null;
        }
    }


}
