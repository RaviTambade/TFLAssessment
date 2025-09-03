package com.transflower.tflassessment.demo.entities;
import java.util.Objects;

public class EvaluationCriteria implements Cloneable {

    private int id;
    private String title;
    private int subjectId;

    public EvaluationCriteria() {
        this.id = 0;
        this.title = null;
        this.subjectId = 0;
    }

    public EvaluationCriteria(String title,int subjectId){
        this.title=title;
        this.subjectId=subjectId;
    }

    public EvaluationCriteria(int id, String title, int subjectId) {
        this.id = id;
        this.title = title;
        this.subjectId = subjectId;
    }
   
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(int subjectId) {
        this.subjectId = subjectId;
    }

    @Override
    public String toString() {
        return ("ID: " + this.id + "Title: " + this.title + "Subject Id: " + subjectId);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || this.getClass() != obj.getClass()) {
            return false;
        }
        EvaluationCriteria ec = (EvaluationCriteria) obj;
        return this.id == ec.id
                && this.subjectId == ec.subjectId
                && this.title.equals(ec.title);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id, this.subjectId, this.title);
    }

    @Override
    public Object clone() throws CloneNotSupportedException {
        try {
            return new EvaluationCriteria(this.id, this.title, this.subjectId);
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }

    @Override
    public void finalize() throws Throwable {
        try {
            System.out.println("Finalized called for " + this);
        } finally {
            super.finalize();
        }
    }
}
