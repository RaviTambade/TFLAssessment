package com.transflower.tflcomentor.Backend.Entity;

public class Languages {
    private int id ;
    private String languageName;
    private int runtimeId;

    public Languages(){
        this.id = 0;
        this.languageName = " ";
        this.runtimeId = 0;
    }

    public Languages(int id, String languageName, int runtimeId) {
        this.id = id;
        this.languageName = languageName;
        this.runtimeId = runtimeId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLanguageName() {
        return languageName;
    }
    
    public void setLanguageName(String languageName) {
        this.languageName = languageName;
    }

    public int getRuntimeId() {
        return runtimeId;
    }
    public void setRuntimeId(int runtimeId) {
        this.runtimeId = runtimeId;
    }

    @Override
    public String toString() {
        return "Languages [id=" + id + ", languageName=" + languageName + ", runtimeId=" + runtimeId + "]";
    }
}