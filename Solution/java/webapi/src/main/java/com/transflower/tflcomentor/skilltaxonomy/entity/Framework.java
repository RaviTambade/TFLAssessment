package com.transflower.tflcomentor.skilltaxonomy.entity;

public class Framework {
    private int id ;
    private String frameworkName;

    public Framework(){
        this.id = 0;
        this.frameworkName = " ";
    }

    public Framework(int id, String frameworkName) {
        this.id = id;
        this.frameworkName = frameworkName;
    }   

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFrameworkName() {
        return frameworkName;
    }

    public void setFrameworkName(String frameworkName) {
        this.frameworkName = frameworkName;
    }

    @Override
    public String toString() {
        return "Frameworks [id=" + id + ", frameworkName=" + frameworkName + "]";
    }
}