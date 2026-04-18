package com.transflower.tflcomentor.Backend.dto;

public class LanguageDTO {
    private int id;
    private String languageName;
    private int runtimeId;

    // Constructors
    public LanguageDTO() {}

    public LanguageDTO(int id, String languageName, int runtimeId) {
        this.id = id;
        this.languageName = languageName;
        this.runtimeId = runtimeId;
    }

    // Getters and Setters
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

    public String toString() {
        return "Framework{id=" + id + ", languageName='" + languageName + "', runtimeId=" + runtimeId + "}";
    }
}
