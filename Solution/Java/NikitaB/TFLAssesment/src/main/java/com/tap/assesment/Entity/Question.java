package com.tap.assesment.Entity;

import java.io.*;

public class Question implements Serializable {
    private int id;
    private String title;
    private String optionA;
    private String optionB;
    private String optionC;
    private String optionD;
    private char correctAnswer;
    private String subject;
    private int evaluationCriteria;

    public Question(){
        id=0;
        title=null;
        optionA=null;
        optionB=null;
        optionC=null;
        optionD=null;
        correctAnswer='\0';
        subject=null;
        evaluationCriteria=28;
    }

    public Question(int id,String title,String optionA,String optionB,String optionC,String optionD,char correctAnswer,String subject,int evaluationCriteria){
        this.id=id;
        this.title=title;
        this.optionA=optionA;
        this.optionB=optionB;
        this.optionC=optionC;
        this.optionD=optionD;
        this.correctAnswer=correctAnswer;
        this.subject=subject;
        this.evaluationCriteria=evaluationCriteria;
    }

        public void setId(int id){this.id=id;}
        public int getId(){return id;}

        public void setTitle(String title){this.title=title;}
        public String getTitle(){return title;}
    
        public void setOptionA(String a){this.optionA=a;}
        public String getOptionA(){return optionA;}

        public void setOptionB(String b){this.optionB=b;}
        public String getOptionB(){return optionB;}

        public void setOptionC(String c){this.optionC=c;}
        public String getOptionC(){return optionC;}

        public void setOptionD(String d){this.optionD=d; }
        public String getOptionD(){return optionD;}

        public void setCorrectAnswer(char c){this.correctAnswer=c;}
        public char getCorrectAnswer(){return correctAnswer;}

        public void setSubject(String subject){this.subject=subject;}
        public String getSubject(){return subject;}

        public void setEvaluationCriteria(int criteria){this.evaluationCriteria=criteria;}
        public int getEvaluationCriteria(){return evaluationCriteria;}

        public String toString(){
            return ("Id : "+id+" "+"Title : "+title+" "+"Option A : "+optionA+" "+"Option B : "+optionB+" "+"Option C : "+optionC+"Option D : "+optionD+"Correct Answer : "+correctAnswer+"Evaluation Criteria"+evaluationCriteria);
        }
}
