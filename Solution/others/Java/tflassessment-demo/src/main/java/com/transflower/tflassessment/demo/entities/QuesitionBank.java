package com.transflower.tflassessment.demo.entities;

import java.util.Objects;

public class QuesitionBank {
    private int questionBankId;

    public int getQuestionBankId(){
        return questionBankId;
    }

    public void setQuestionBankId(int questionBankId){
        this.questionBankId =questionBankId;
    }

     @Override     
    public boolean equals(Object obj){
    if (this==obj) return true;
    if(obj==null || getClass() != obj.getClass()) return false;
    QuesitionBank other = (QuesitionBank) obj;
    return  (this.questionBankId== other.questionBankId) ? true: false;

     
    }  
    
     @Override
    public int hashCode() {
    return Objects.hash(questionBankId);
    }


    @Override
    protected void finalize() throws Throwable {
    try {
    } finally {
        super.finalize();
    }
    }


    @Override
    public Object clone() throws CloneNotSupportedException {
    return super.clone();
    }

    @Override
     public String toString(){
     return "QuestionBank{questionBankId ="+ questionBankId+ "}";
    }

}
