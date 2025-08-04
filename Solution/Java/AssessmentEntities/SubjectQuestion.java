package com.transflower.tflAssessment.entities;

public class SubjectQuestion {

    private int QuestionId;
    private String Question;
    private int SubjectId;
    private String Subject;

    // Getters and Setters

    public int getQuestionId(){
        return QuestionId;
    }
    
    public void setQuestionId(int QuestionId){
        this.QuestionId = QuestionId;
    }

    public String getQuestion(){
        return Question;
    }
    
    public void setQuestion(String Question){
        this.Question = Question;
    }

    public int getSubjectId(){
        return SubjectId;
    }

    public void setSubjectId(int SubjectId){
        this.SubjectId = SubjectId;
    }

    public String getSubject(){
        return Subject;
    }

    public void setSubject(String Subject){
        this.Subject = Subject;
    }
}
