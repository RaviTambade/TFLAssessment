package com.transflower.tflassessment.entities;

public class ConceptWithCorrectAns {
    
    private int ConceptId;
    private String ConceptName;
    private int TotalQuestions;
    private int CorrectAnswers;

    public ConceptWithCorrectAns(){

    }

    public ConceptWithCorrectAns(int ConceptId,String ConceptName,int TotalQuestions,int CorrectAnswers)
    {
        this.ConceptId = ConceptId;
        this.ConceptName = ConceptName;
        this.TotalQuestions = TotalQuestions;
        this.CorrectAnswers = CorrectAnswers;
    }

    public int getConceptId()
    {
        return this.ConceptId;
    }

    public void setConceptId(int ConceptId)
    {
        this.ConceptId = ConceptId;
    }

    public String getConceptName()
    {
        return this.ConceptName;
    }

    public void setConceptName(String ConceptName)
    {
        this.ConceptName = ConceptName;
    }

    public int getTotalQuestions()
    {
        return this.TotalQuestions;
    }

    public void setTotalQuestions(int TotalQuestions)
    {
        this.TotalQuestions = TotalQuestions;
    }

    public int getCorrectAnswers()
    {
        return this.CorrectAnswers;
    }

    public void setCorrectAnswers(int CorrectAnswers)
    {
        this.CorrectAnswers = CorrectAnswers;
    }

    @Override
    public String toString()
         {
        return "ConceptWithCorrectAns{"+
        "ConceptId="+ConceptId+
        ",ConceptName="+ConceptName+
        ",TotalQuestions="+TotalQuestions+
        ",CorrectAnswers="+CorrectAnswers+'\''+
        '}';
    }
}
