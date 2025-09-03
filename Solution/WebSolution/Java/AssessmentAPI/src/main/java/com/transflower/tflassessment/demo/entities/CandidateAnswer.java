 package com.transflower.tflassessment.demo.entities;
import java.util.*;

public class CandidateAnswer {
    
     private int id;     
        private int candidateId;
        private int testQuestionId;
        private String answerKey;

        public CandidateAnswer()
        {

        }
        public CandidateAnswer(int id, int candidateId,int testQuestionId,String answerKey)
        {  
            this.id=id;
            this.candidateId=candidateId;
            this.testQuestionId=testQuestionId;
            this.answerKey=answerKey;
        }
        public int getId()
        {
            return id;
        }
        public void setId(int id)
        {
            this.id=id;
        }
        public int getCandidateId()
        {
            return candidateId;
        }
        public void setCandidateId(int candidateId)
        {
            this.candidateId=candidateId;
        }
        public int getTestQuestionId()
        {
            return testQuestionId;
        }
        public void setTestQuestionId(int testQuestionId)
        {
            this.testQuestionId=testQuestionId;
        }
        public String getAnswerKey()
        {
            return answerKey;
        }
        public void setAnswerKey(String answerKey)
        {
            this.answerKey=answerKey;
        }
        @Override
        public  String toString()
        {
             return "CandidateAnswer{"+
                "id=" + id +
                "candidateId=" + candidateId +
                " ,testQuestionId= ' " + testQuestionId +
                " ',answerKey= '" + answerKey + '}';
        }
        @Override
        public boolean equals(Object obj)
        {
            if(this == obj)return true;
            if(obj==null || getClass()!=obj.getClass())return false;
            CandidateAnswer other=(CandidateAnswer)obj;
            return id==other.id &&
             candidateId==other.candidateId &&
             testQuestionId==other.testQuestionId &&
             answerKey.equals(other.answerKey);

        }
        @Override
        public int hashCode()
        {
            return Objects.hash(id,candidateId,testQuestionId,answerKey);
        }
        @Override
        protected Object clone() throws CloneNotSupportedException
        {
            return super.clone();
            
        }
        
        @Override
        protected void finalize() throws Throwable
        {
            try
            {
                System.out.println("Return from"+this);
            }
            finally
            {
                super.finalize();
            }
        }
        public void setTestId(int int1) {
            // TODO Auto-generated method stub
            throw new UnsupportedOperationException("Unimplemented method 'setTestId'");
        }
        public void add(List<CandidateAnswer> candidates) {
            // TODO Auto-generated method stub
            throw new UnsupportedOperationException("Unimplemented method 'add'");
        }
    }