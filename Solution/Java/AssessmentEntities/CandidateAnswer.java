// package com.transflower.tflAssessment.entities;

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
        public String getAnserKey()
        {
            return answerKey;
        }
        public void setAnswerKey(String answerKey)
        {
            this.answerKey=answerKey;
        }

}
