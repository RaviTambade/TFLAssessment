package com.transflower.tflassessment.demo.entities;

import java.util.Objects;

public class NewQuestion {
    private int id;
    private int subjectId;
    private String title;
    private String A;
    private String B;
    private String C;
    private String D;
    private char answerKey;
    private int evaluationCriteriaId;


    public int getId(){
        return id;
    }
    public void setId(int id){
        this.id =id;    
    }

    public int getSubjectId(){
        return subjectId;
    }
    public void setSubjectId(int subjectId){
        this.subjectId =subjectId;
    }


    public String getTitle(){
        return title;
    }
    public void setTitle(String title){
        this.title = title;
    }


    public String getA(){
        return A;
    }
    public void setA(String A){
        this.A =A;
    }

    public String getB(){
        return B;
    }
    public void setB(String B){
        this.B =B;
    }


    public String getC(){
        return C;
    }
    public void setC(String C){
        this.C =C;
    }


    public String getD(){
        return D;
    }
    public void setD(String D){
        this.D =D;
    }


    public char getAnswerKey(){
        return answerKey;
    }
    public void setAnswerKey(char answerKey){
        this.answerKey =answerKey;
    }


    public int getEvaluationCriteriaId(){
        return evaluationCriteriaId;
    }
    public void setEvaluationCriteriaId(int evaluationCriteriaId){
        this.evaluationCriteriaId =evaluationCriteriaId;
    }
    
    
    @Override     
    public boolean equals(Object obj){
    if (this==obj) return true;
    if(obj==null || getClass() != obj.getClass()) return false;
     NewQuestion other = (NewQuestion) obj;
       return Objects.equals(A, other.A) && Objects.equals(B, other.B);     
    }  
    
     @Override
    public int hashCode() {
    return Objects.hash(A, B);
    }


    @Override
    protected void finalize() throws Throwable {
    try {
    } finally {
        
    }
    }


    @Override
    public Object clone() throws CloneNotSupportedException {
    return super.clone();
    }

    @Override
     public String toString(){
     return "LoginResponse{id ="+ id + " , subjectId = " + subjectId +" , title" + title + " , A" + A + "B" +B+ " , C" +C+ ", D" + D+ " ,answerKey " +answerKey+" , evaluationCriteriaId" +evaluationCriteriaId+ "}";
    }

}

  
     


 

