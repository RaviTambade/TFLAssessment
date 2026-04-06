package com.transflower.tflcomentor.Backend.DTO;

public class Framework {
    private int id;
    private String runtimeName;

    public Framework() {
    }

    public Framework(int id, String runtimeName) {
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
