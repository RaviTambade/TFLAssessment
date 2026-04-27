package com.transflower.tflassessment.demo.entities;

import java.util.Objects;

public class TestAverageReport implements Cloneable

{
    private String subjectName;
    private String evaluationCriteria;
    private int totalQuestionAnswered;
    private int correctAnswer;
    private double percentageCorrect;

    public TestAverageReport(){
        this.subjectName = "";
        this.evaluationCriteria="";
        this.totalQuestionAnswered = 0;
        this.correctAnswer=0;
        this.percentageCorrect=0.0;
    }

    public TestAverageReport(String subjectName,String evalutionCriteria, int totalQuestionAnswered,int correctAnswer, double percentageCorrect)
    {
        this.subjectName = subjectName;
        this.evaluationCriteria=evalutionCriteria;
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

    public String getEvaluationCriteria() {
        return evaluationCriteria;
    }

    public void setEvaluationCriteria(String evalutionCriteria) {
        this.evaluationCriteria = evalutionCriteria;
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
        ",Evaluation Criteria='"+ evaluationCriteria+
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
         &&  Objects.equals(evaluationCriteria,other.evaluationCriteria) 
         && totalQuestionAnswered == other.totalQuestionAnswered 
         && correctAnswer == other.correctAnswer
          && percentageCorrect == other.percentageCorrect;
    }

    @Override
    public int hashCode()
    {
        return Objects.hash(subjectName, evaluationCriteria, totalQuestionAnswered, correctAnswer, percentageCorrect);
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
            return new TestAverageReport(subjectName,evaluationCriteria,totalQuestionAnswered,correctAnswer,percentageCorrect);
        }
        catch(Exception e)
        {
            System.out.println("Clone Exception");
            return null;
        }
    }


}
