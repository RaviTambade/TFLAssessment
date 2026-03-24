package com.transflower.tflcomentor.Backend.Entity;

public class FrameworkConceptsEntity {
    private int id ;
    private int frameworkId;
    private int conceptId;

    public FrameworkConceptsEntity(){
        this.id = 0;
        this.frameworkId = 0;
        this.conceptId = 0;
    }
    
    public FrameworkConceptsEntity(int id, int frameworkId, int conceptId) {
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
}
    