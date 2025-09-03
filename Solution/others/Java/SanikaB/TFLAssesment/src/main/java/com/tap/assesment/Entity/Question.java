package com.tap.assesment.Entity;

import java.io.Serializable;

//POJO class for Question entity
//Plain Old Java Object
public class Question implements Serializable {

    private String title;
    private int id;
    private String optionA;
    private String optionB;
    private String optionC;
    private String optionD;
    private char correctAnswer;
    private String subject;
    private int evaluationCriteria;


    public Question(String title, String optionA, String optionB, String optionC, String optionD, char correctAnswer,
            String  subject, int evaluationCriteria,int id) {
        this.title = title;
        this.optionA = optionA;
        this.optionB = optionB;
        this.optionC = optionC;
        this.optionD = optionD;
        this.correctAnswer = correctAnswer;
        this.subject = subject;
        this.evaluationCriteria = evaluationCriteria;
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getSubject() {
        return subject;
    }

    public String getOptionA() {
        return optionA;
    }

    public String getOptionB() {
        return optionB;
    }

    public String getOptionC() {
        return optionC;
    }

    public String getOptionD() {
        return optionD;
    }

    public char getCorrectAnswer() {
        return correctAnswer;
    }

    public int getEvaluationCriteria() {
        return evaluationCriteria;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setOptionA(String optionA) {
        this.optionA = optionA;
    }

    public void setOptionB(String optionB) {
        this.optionB = optionB;
    }

    public void setOptionC(String optionC) {
        this.optionC = optionC;
    }

    public void setOptionD(String optionD) {
        this.optionD = optionD;
    }

    public void setCorrectAnswer(char correctAnswer) {
        this.correctAnswer = correctAnswer;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public void setEvaluationCriteria(int evaluationCriteria) {
        this.evaluationCriteria = evaluationCriteria;
    }

    @Override
    public String toString() {
        return "Question{" + "title='" + title + ", id=" + id + ", optionA='" + optionA +
                ", optionB='" + optionB +
                ", optionC='" + optionC +
                ", optionD='" + optionD +
                ", correctAnswer=" + correctAnswer +
                ", subject=" + subject +
                ", evaluationCriteria=" + evaluationCriteria +
                '}';
    }

}
