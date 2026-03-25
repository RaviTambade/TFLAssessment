package com.transflower.tflcomentor.Backend.Entity;

public class FrameworkConcepts {
    private int id ;
    private int frameworkId;
    private int conceptId;

    public FrameworkConcepts(){
        this.id = 0;
        this.frameworkId = 0;
        this.conceptId = 0;
    }
    
    public FrameworkConcepts(int id, int frameworkId, int conceptId) {
        this.id = id;
        this.frameworkId = frameworkId;
        this.conceptId = conceptId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getFrameworkId() {
        return frameworkId;
    }

    public void setFrameworkId(int frameworkId) {
        this.frameworkId = frameworkId;
    }

    public int getConceptId() {
        return conceptId;
    }
    public void setConceptId(int conceptId) {
        this.conceptId = conceptId;
    }

    @Override
    public String toString() {
        return "FrameworkConcepts [id=" + id + ", frameworkId=" + frameworkId + ", conceptId=" + conceptId + "]";
    }
}
    