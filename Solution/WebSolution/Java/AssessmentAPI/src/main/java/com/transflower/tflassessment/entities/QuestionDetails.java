package com.transflower.tflassessment.entities;

import java.util.Objects;

public class QuestionDetails {

    private int id;
    private String question;
    private int questionId;
    private String subject;
    private String criteria;
    private String A;
    private String B;
    private String C;
    private String D;
    private String result;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public int getQuestionId(){
        return questionId;
    }

    public void setQuestionId(int questionId){
        this.questionId=questionId;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getCriteria() {
        return criteria;
    }

    public void setCriteria(String criteria) {
        this.criteria = criteria;
    }

    public void setA(String A){
        this.A=A;
    }
    public String getA(){
        return A;
    }

    public void setB(String B){
        this.B=B;
    }
    public String getB(){
        return B;
    }

    public void setC(String C){
        this.C=C;
    }
    public String getC(){
        return C;
    }

    public void setD(String D){
        this.D=D;
    }
    public String getD(){
        return D;
    }

    public void setResult(String result){
        this.result=result;
    }

    public String getResult(){
        return result;
    }

     public QuestionDetails() {
        id = 0;
        question = null;
        questionId=0;
        subject = null;
        criteria = null;
        A="";
        B="";
        C="";
        D="";
        result=null;
    }

    public QuestionDetails(int id,String question,int questionId,String subject,String criteria,String A,String B,String C,String D,String result) {
        this.id = id;
        this.question = question;
        this.questionId=questionId;
        this.subject = subject;
        this.criteria = criteria;
        this.A=A;
        this.B=B;
        this.C=C;
        this.D=D;
        this.result=result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null || getClass() != obj.getClass())
            return false;
        QuestionDetails other = (QuestionDetails) obj;
        return id == other.id &&
                Objects.equals(question, other.question) &&
                Objects.equals(subject, other.subject) &&
                Objects.equals(criteria, other.criteria);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, question, subject, criteria);
    }

    @Override
    protected void finalize() throws Throwable {
        try {
            System.out.println("fianlize called for " + this);
        } finally {
           
        }
    }

    @Override
    public String toString() {
        return "QuestionDetails{id=" + id + ",question=" + question + "questionId="+questionId+"',subject=" + subject + ",criteria=" + criteria+
                "A= "+A+"B= "+B+"C= "+C+"D= "+D+"Result = "+result
                + "}";
    }

}
