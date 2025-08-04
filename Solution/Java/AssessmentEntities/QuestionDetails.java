package com.Transflower.TFLAssessment.Entities;

public class QuestionDetails {

    private int id;
    private String question;
    private String subject;
    private String Criteria;

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

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getCriteria() {
        return Criteria;
    }

    public void setCriteria(String criteria) {
        Criteria = criteria;
    }

}
