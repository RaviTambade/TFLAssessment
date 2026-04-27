package com.transflower.tflassessment.entities;

import java.util.Objects;

public class Question {

    private int id;
    private int subject_concept_id;
    private String title;
    private String A;
    private String B;
    private String C;
    private String D;
    public String answerKey;
    private int conceptId;

    public Question() {
        this.id = 0;
        this.subject_concept_id = 0;
        this.title = null;
        this.A = null;
        this.B = null;
        this.C = null;
        this.D = null;
        this.answerKey = null;
        this.conceptId = 0;

    }

    public Question(int id, int subject_concept_id, String title, String a, String b, String c, String d, String answerKey,
            int conceptId) {
        this.id = id;
        this.subject_concept_id = subject_concept_id;
        this.title = title;
        A = a;
        B = b;
        C = c;
        D = d;
        this.answerKey = answerKey;
        this.conceptId = conceptId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getsubject_concept_id() {
        return subject_concept_id;
    }

    public void setsubject_concept_id(int subject_concept_id) {
        this.subject_concept_id = subject_concept_id;
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

    public String getAnswerKey() {
        return answerKey;
    }

    public void setAnswerKey(String answerKey) {
        this.answerKey = answerKey;
    }

    public int getConceptId() {
        return conceptId;
    }

    public void setConceptId(int conceptId) {
        this.conceptId = conceptId;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        Question other = (Question) obj;
        return Objects.equals(A, other.A) && Objects.equals(B, other.B);
    }

    @Override
    public int hashCode() {
        return Objects.hash(A, B);
    }

    @Override
    protected void finalize() throws Throwable {
        try {
        } finally {

        }
    }

    @Override
    public Object clone() throws CloneNotSupportedException {
        return super.clone();
    }

    @Override
    public String toString() {
        return "Question{id =" + id + " , subject_concept_id = " + subject_concept_id + " , title" + title + " , A" + A + "B" + B + " , C" + C + ", D" + D + " ,answerKey " + answerKey + " , conceptId" + conceptId + "}";
    }


    public void setEvaluationCriteriaId(int int1) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'setEvaluationCriteriaId'");
    }


}
