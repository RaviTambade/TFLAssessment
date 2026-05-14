package com.transflower.tflassessment.entities;

public class SubjectQuestionCount {
    private int questionCount;
    private Subject subject;

    public SubjectQuestionCount(){
        questionCount=0;
        subject=null;
    }

    public SubjectQuestionCount(int questionCount,Subject subject){
        this.questionCount=questionCount;
        this.subject=subject;
    }

    public void setQuestionCount(int questionCount){
        this.questionCount=questionCount;
    }

    public int getQuestionCount(){
        return questionCount;
    }
    
    public void setSubject(Subject subject){
        this.subject=subject;
    }

    public Subject getSubject(){
        return subject;
    }

    @Override
    public String toString(){
        return ("SubjectQuestionCount(Question Count = "+questionCount+"Subject = "+subject);
    }
    
}
