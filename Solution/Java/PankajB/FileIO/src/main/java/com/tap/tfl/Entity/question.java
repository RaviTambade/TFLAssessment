package com.tap.tfl.Entity;

import java.io.Serializable;

public class question implements Serializable {

    private int questionId;
    private String subject;
    private String title;
    private String optionA;
    private String optionB;
    private String optionC;
    private String optionD;
    private char correctAnswer;
    private int evaluationCriteria;

    
    public int getQuestionId() {
        return questionId;
    }

    public void setQuestionId(int question_Id) {
        this.questionId = question_Id;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public char getCorrectAnswer() {
        return correctAnswer;
    }

    public void setCorrectAnswer(char correctAnswer) {
        this.correctAnswer = correctAnswer;
    }

    public int getEvaluationCriteria() {
        return evaluationCriteria;
    }

    public void setEvaluationCriteria(int evaluationCriteria) {
        this.evaluationCriteria = evaluationCriteria;
    }

    public String getOptionA() {
        return optionA;
    }

    public void setOptionA(String optionA) {
        this.optionA = optionA;
    }

    public String getOptionB() {
        return optionB;
    }

    public void setOptionB(String optionB) {
        this.optionB = optionB;
    }

    public String getOptionC() {
        return optionC;
    }

    public void setOptionC(String optionC) {
        this.optionC = optionC;
    }

    public String getOptionD() {
        return optionD;
    }

    public void setOptionD(String optionD) {
        this.optionD = optionD;
    }

    @Override
    public String toString() {
        return "Question => {" + "questionId='" + questionId + " " + ", title ='" + title + " " + '}';
    }

}
