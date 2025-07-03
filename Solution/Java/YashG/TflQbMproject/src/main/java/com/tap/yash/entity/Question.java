package com.tap.yash.entity;

public class Question {
     

    private String title;
    private int id ;
    private String optionA ;
    private String optionB ;
    private String optionC ;
    private String optionD ;
    private char CorrectAnswer ;
    private String subject ;
    private int evaluationCriteria;

public Question (){
    this.title=null;
    this.id=0;
    this.optionA=null;
    this.optionB=null;
    this.optionC=null;
    this.optionD=null;
    this.CorrectAnswer='\0';
    this.subject=null;
    this.evaluationCriteria=0;

}

public Question (String title , int id , String optionA , String optionB , String optionC , String optionD , char CorrectAnswer , String subject , int evaluationCriteria){

    this.title=null;
    this.id=0;
    this.optionA=optionA;
    this.optionB=optionB;
    this.optionC=optionC;
    this.optionD=optionD;
    this.CorrectAnswer=CorrectAnswer;
    this.subject=subject;
    this.evaluationCriteria=evaluationCriteria;
}

public String gettitle() {
    return title;
}
public void settitle(String title){
    this.title=title;
}

public int getid(){
    return id;
}

public void setid(int id){
    this.id=id;
}

public String getoptionA(){
    return optionA;
}
public void setoptionA(String optionA){
    this.optionA=optionA;
}
public String getoptionB(){
    return optionB;
}
public void setoptionB(String optionB){
    this.optionB=optionB;
}
public String getoptionC(){
    return optionC;
}
public void setoptionC(String optionC){
    this.optionC=optionC;
}
public String getoptionD(){
    return optionD;
}
public void setoptionD(String optionD){
    this.optionD=optionD;
}
public char getCorrectAnswer(){
    return CorrectAnswer;
}
public void setCorrectAnswer(char CorrectAnswer){
    this.CorrectAnswer=CorrectAnswer;
}
public String subject(){
    return subject;
}
public void subject(String subject){
    this.subject=subject;
}
public int getevaluationCriteria(){
    return evaluationCriteria;
}
public void setevaluationCriteria(){
    this.evaluationCriteria=evaluationCriteria;

}
public String toString() {
        return "Question{" + "title='" + title + ", id=" + id + ", optionA='" + optionA +
                ", optionB='" + optionB +
                ", optionC='" + optionC +
                ", optionD='" + optionD +
                ", correctAnswer=" + CorrectAnswer +
                ", subject=" + subject +
                ", evaluationCriteria=" + evaluationCriteria +
                '}';




}






}

