package com.transflower.tflassessment.entities;

public class ConceptQuestionCount {

    private int questionCount;
    private Concepts concept;


    public ConceptQuestionCount()
    {

    }
    public ConceptQuestionCount(int questionCount,Concepts concept)
    {
        this.questionCount=questionCount;
        this.concept=concept;
    }

    public int getQuestionCount()
    {
        return questionCount;
    }
    public void setQuestionCount(int questionCount)
    {
        this.questionCount=questionCount;
    }
    public Concepts getConcepts()
    {
        return concept;
    }
    public void setConcepts(Concepts concept)
    {
        this.concept=concept;
    }

     @Override
        public  String toString()
        {
             return "ConceptQuestionCount{"+
                "questionCount=" + questionCount +
                "Concept=" + concept + '}';
        }
    
}
