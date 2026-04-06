package com.transflower.tflcomentor.Backend.DTO;

public class Runtime {
    private int id;
    private String runtimeName;

    // Constructors
    public Runtime() {}

    public Runtime(int id, String runtimeName) {
        this.id = id;
        this.runtimeName = runtimeName;
    }

    // Getters and Setters
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

    public String toString() {
        return "Runtime{id=" + id + ", runtimeName='" + runtimeName + "'}";
    }
}
