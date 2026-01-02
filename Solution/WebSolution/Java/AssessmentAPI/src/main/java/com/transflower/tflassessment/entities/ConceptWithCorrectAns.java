package com.transflower.tflassessment.entities;

public class ConceptWithCorrectAns {
    
    private int conceptId;
    private String conceptName;
    private int totalQuestions;
    private int correctAnswers;

    public ConceptWithCorrectAns(){

    }

    public ConceptWithCorrectAns(int conceptId,String conceptName,int totalQuestions,int correctAnswers)
    {
        this.conceptId = conceptId;
        this.conceptName = conceptName;
        this.totalQuestions = totalQuestions;
        this.correctAnswers = correctAnswers;
    }

    public int getConceptId()
    {
        return this.conceptId;
    }

    public void setConceptId(int conceptId)
    {
        this.conceptId = conceptId;
    }

    public String getConceptName()
    {
        return this.conceptName;
    }

    public void setConceptName(String conceptName)
    {
        this.conceptName = conceptName;
    }

    public int getTotalQuestions()
    {
        return this.totalQuestions;
    }

    public void setTotalQuestions(int totalQuestions)
    {
        this.totalQuestions = totalQuestions;
    }

    public int getCorrectAnswers()
    {
        return this.correctAnswers;
    }

    public void setCorrectAnswers(int correctAnswers)
    {
        this.correctAnswers = correctAnswers;
    }

    @Override
    public String toString()
         {
        return "ConceptWithCorrectAns{"+
        "ConceptId="+conceptId+
        ",ConceptName="+conceptName+
        ",TotalQuestions="+totalQuestions+
        ",CorrectAnswers="+correctAnswers+'\''+
        '}';
    }
}
