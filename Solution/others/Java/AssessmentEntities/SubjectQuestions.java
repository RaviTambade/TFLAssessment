package com.transflower.tflAssessment.entities;

public class SubjectQuestions {

    private int QuestionBankId;
    private String Title;
    private String A;
    private String B;
    private String C;
    private String D;

    // Getters and Setters

    public int getQuestionBankId(){
        return QuestionBankId;
    }

    public void setQuestionBankId(int QuestionBankId){
         this.QuestionBankId = QuestionBankId;
    }

    public String getTitle(){
        return Title;
    }

    public void setTitle(String Title){
        this.Title = Title;
    }

    public String getA(){
        return A;
    }

    public void setA(String A){
        this.A = A;
    }

    public String getB(){
        return B;
    }

    public void setB(String B){
        this.B = B;
    }

    public String getC(){
        return C;
    }

    public void setC(String C){
        this.C = C;
    }

    public String getD(){
        return D;
    }

    public void setD(String D){
        this.D = D;
    }
}
