package com.transflower.tflassessment.demo.entities;

import java.util.Objects;

public class QuestionDetails {

    private int id;
    private String question;
    private String subject;
    private String criteria;

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
        return criteria;
    }

    public void setCriteria(String criteria) {
        criteria = criteria;
    }
     public QuestionDetails() {
        this.id = id;
        this.question = question;
        this.subject = subject;
        this.criteria = criteria;

    }

    public QuestionDetails(int id,String question,String subject,String criteria) {
        this.id = id;
        this.question = question;
        this.subject = subject;
        this.criteria = criteria;

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
        return "QuestionDetails{id=" + id + ",question=" + question + "',subject=" + subject + ",criteria=" + criteria
                + "}";
    }

}
