package com.transflower.tflassessment.demo.entities;

import java.util.Objects;

public class TestQuestion implements Cloneable {
    private int id;
    private String title;
    private String A;
    private String B;
    private String C;
    private String D;
    private int testId;
    private int evaluationCriteria;
    private String criteria;
    private String answerKey;
    private int questionBankId;

    public TestQuestion(){
        this.id=0;
        this.title="";
        this.A="";
        this.B="";
        this.C="";
        this.D="";
        this.testId=0;
        this.evaluationCriteria=0;
        this.criteria="";
        this.answerKey="";
        this.questionBankId=0;
    }

    public TestQuestion(int id,String title,String A,String B,String C,String D,int testId,int evaluationCriteria,String criteria,String answerKey,int questionBankId){
        this.id=id;
        this.title=title;
        this.A=A;
        this.B=B;
        this.C=C;
        this.D=D;
        this.testId=testId;
        this.evaluationCriteria=evaluationCriteria;
        this.criteria=criteria;
        this.answerKey=answerKey;
        this.questionBankId=questionBankId;
    }

    public void setId(int id){
        this.id=id;
    }
    public int getId(){
        return id;
    }

    public void setTitle(String title){
        this.title=title;
    }
    public String getTitle(){
        return title;
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

    public void setTestId(int testId){
        this.testId=testId;
    }
    public int getTestId(){
        return testId;
    }

    public void setEvaluationCriteria(int evaluationCriteria){
        this.evaluationCriteria=evaluationCriteria;
    }
    public int getEvaluationCriteria(){
        return evaluationCriteria;
    }

    public void setCriteria(String criteria){
        this.criteria=criteria;
    }
    public String getCriteria(){
        return criteria;
    }

    public void setAnswerKey(String answerKey){
        this.answerKey=answerKey;
    }
    public String getAnswerKey(){
        return answerKey;
    }

    public void setQuestionBankId(int questionBankId){
        this.questionBankId=questionBankId;
    }
    public int getQuestionBankId(){
        return questionBankId;
    }

    @Override
    public String toString(){
        return "TestQuestion{ Id : "+id+"\t"
        +"Title : "+title+"\t "
        +"Option A : "+A+"\t "
        +"Option B : "+B+"\t "
        +"Option C : "+C+"\t"
        +"Option D : "+D+"\t "
        +"Test Id : "+testId+"\t"
        +"Evaluation Criteria :"+evaluationCriteria+"\t "
        +"Criteria : "+criteria+"\t"
        +"Answer Key : "+answerKey+"\t "
        +"Question Bank Id : "+questionBankId;
    }

    @Override
    public int hashCode(){
        return Objects.hash(id,title,A,B,C,D,testId,evaluationCriteria,criteria,answerKey,questionBankId);
    }

    @Override
    public boolean equals(Object obj){
        if(this==obj) return true;
        if(obj==null||getClass()!=obj.getClass()) return false;
        TestQuestion other=(TestQuestion) obj;
        return(id==other.id && 
               title.equals(other.title) && 
               A.equals(other.getA()) &&
               B.equals(other.B) &&
               C.equals(other.C) &&
               D.equals(other.D) &&
               testId==other.testId &&
               evaluationCriteria==other.testId &&
               criteria.equals(other.criteria) &&
               answerKey.equals(other.answerKey) &&
               questionBankId==other.questionBankId);
    }

    @Override
    public Object clone() throws CloneNotSupportedException{
        try{
            return new TestQuestion(id,title,A,B,C,D,testId,evaluationCriteria,criteria,answerKey,questionBankId);
        }catch(Exception e){
            System.out.println(e);
            return null;
        }
    }

}
