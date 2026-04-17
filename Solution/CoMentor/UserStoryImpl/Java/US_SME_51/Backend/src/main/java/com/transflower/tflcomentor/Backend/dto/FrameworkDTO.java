package com.transflower.tflcomentor.Backend.dto;

public class FrameworkDTO {
    private int id;
    private String frameworkName;

    public FrameworkDTO() {
    }

    public FrameworkDTO(int id, String frameworkName) {
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
}
