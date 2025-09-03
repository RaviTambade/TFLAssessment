package com.transflower.tflassessment.demo.entities;

import java.util.Objects;

public class SubjectQuestions implements Cloneable {

    private int questionBankId;
    private String title;
    private String A;
    private String B;
    private String C;
    private String D;

    // Getters and Setters
    public int getQuestionBankId() {
        return questionBankId;
    }

    public void setQuestionBankId(int questionBankId) {
        this.questionBankId = questionBankId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getA() {
        return A;
    }

    public void setA(String A) {
        this.A = A;
    }

    public String getB() {
        return B;
    }

    public void setB(String B) {
        this.B = B;
    }

    public String getC() {
        return C;
    }

    public void setC(String C) {
        this.C = C;
    }

    public String getD() {
        return D;
    }

    public void setD(String D) {
        this.D = D;
    }

    @Override
    public String toString() {
        return "SubjectQuestions{" +
                "questionBankId=" + questionBankId +
                ", title='" + title + '\'' +
                ", A='" + A + '\'' +
                ", B='" + B + '\'' +
                ", C='" + C + '\'' +
                ", D='" + D + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        SubjectQuestions other = (SubjectQuestions) obj;
        return questionBankId == other.questionBankId &&
                Objects.equals(title, other.title) &&
                Objects.equals(A, other.A) &&
                Objects.equals(B, other.B) &&
                Objects.equals(C, other.C) &&
                Objects.equals(D, other.D);
    }

    @Override
    public int hashCode() {
        return Objects.hash(questionBankId, title, A, B, C, D);
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }

    @Override
    protected void finalize() throws Throwable {
        try {
            System.out.println("Finalize called for: " + this);
        } finally {
            super.finalize();
        }
    }
}
