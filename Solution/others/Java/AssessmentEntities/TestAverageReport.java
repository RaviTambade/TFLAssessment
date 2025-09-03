package com.transflower.tflAssessment.entities;

public class TestAverageReport
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
}