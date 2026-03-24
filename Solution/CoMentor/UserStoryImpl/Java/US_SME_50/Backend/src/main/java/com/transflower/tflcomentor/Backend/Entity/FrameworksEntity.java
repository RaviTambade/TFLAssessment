package com.transflower.tflcomentor.Backend.Entity;

public class FrameworksEntity {
    private int id ;
    private String runtimeName;

    public FrameworksEntity(){
        this.id = 0;
        this.runtimeName = " ";
    }

    public FrameworksEntity(int id, String runtimeName) {
        this.id = id;
        this.runtimeName = runtimeName;
    }   

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getRuntimeName() {
        return runtimeName;
    }
    
    public void setRuntimeName(String runtimeName) {
        this.runtimeName = runtimeName;
    }
}