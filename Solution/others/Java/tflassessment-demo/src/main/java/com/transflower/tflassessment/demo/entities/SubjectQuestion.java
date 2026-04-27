package com.transflower.tflassessment.demo.entities;

import java.util.Objects;

public class SubjectQuestion implements Cloneable {

    private int questionId;
    private String question;
    private int subjectId;
    private String subject;

    // Getters and Setters
    public int getQuestionId() {
        return questionId;
    }

    public void setQuestionId(int questionId) {
        this.questionId = questionId;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public int getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(int subjectId) {
        this.subjectId = subjectId;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    @Override
    public String toString() {
        return "SubjectQuestion{" +
               "questionId=" + questionId +
               ", question='" + question + '\'' +
               ", subjectId=" + subjectId +
               ", subject='" + subject + '\'' +
               '}';
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        SubjectQuestion other = (SubjectQuestion) obj;
        return questionId == other.questionId &&
               subjectId == other.subjectId &&
               Objects.equals(question, other.question) &&
               Objects.equals(subject, other.subject);
    }

    @Override
    public int hashCode() {
        return Objects.hash(questionId, question, subjectId, subject);
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }

    @Override
    protected void finalize() throws Throwable {
        try {
            System.out.println("Finalize called for " + this);
        } finally {
            super.finalize();
        }
    }
}
