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

    @Override
    public String toString() {
        return ("ID: "+this.id+"Title: "+this.title+"Subject Id: "+subjectId);
    }

    @Override
    public boolean equals(Object obj) {
        if(this == obj) {
            if (obj != null && obj.getClass() == this.getClass()) {
                EvaluationCriteria ec1 = (EvaluationCriteria)obj;
                
            }
        }
        else {
            return false;
        }
    }
}
/* 
equals()	Compare object contents
toString()	Get object as string
hashCode()	Store objects in hash tables
getClass()	Get object's class info
clone()	Duplicate object
finalize()	Cleanup before object deleted*/