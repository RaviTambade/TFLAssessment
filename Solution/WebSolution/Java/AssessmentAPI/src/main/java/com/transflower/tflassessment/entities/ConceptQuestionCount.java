package com.transflower.tflassessment.entities;

public class ConceptQuestionCount {

    private int QuestionCount;
    private Concepts Concept;


    public ConceptQuestionCount()
    {

    }
    public ConceptQuestionCount(int QuestionCount,Concepts Concept)
    {
        this.QuestionCount=QuestionCount;
        this.Concept=Concept;
    }

    public int getQuestionCount()
    {
        return QuestionCount;
    }
    public void setQuestionCount(int QuestionCount)
    {
        this.QuestionCount=QuestionCount;
    }
    public Concepts getConcepts()
    {
        return Concept;
    }
    public void setConcepts(Concepts Concept)
    {
        this.Concept=Concept;
    }

     @Override
        public  String toString()
        {
             return "ConceptQuestionCount{"+
                "QuestionCount=" + QuestionCount +
                "Concept=" + Concept + '}';
        }
    
}
