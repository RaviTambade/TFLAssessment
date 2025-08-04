package com.transflower.tflAssessment.entities;

public class EvaluationCriteria { 
    private int  id;
    private String title;
    private int  subjectId;

    public EvaluationCriteria() {
        this.id = 0;
        this.title = null;
        this.subjectId = 0;
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
        return title;
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

}
