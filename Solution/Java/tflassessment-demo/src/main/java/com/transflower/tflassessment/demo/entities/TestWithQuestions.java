package com.transflower.tflassessment.demo.entities;
import java.time.Duration;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class TestWithQuestions {

    // Test fields
    private int id;
    private String name;
    private int subjectId;
    private Duration duration;
    private int smeId;
    private LocalDateTime creationDate;
    private LocalDateTime modificationDate;
    private LocalDateTime scheduledDate;
    private int passingLevel;
    private String status;

    // List of related questions
    private List<Question> questions = new ArrayList<>();

    // Getters and Setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(int subjectId) {
        this.subjectId = subjectId;
    }

    public Duration getDuration() {
        return duration;
    }

    public void setDuration(Duration duration) {
        this.duration = duration;
    }

    public int getSmeId() {
        return smeId;
    }

    public void setSmeId(int smeId) {
        this.smeId = smeId;
    }

    public LocalDateTime getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDateTime creationDate) {
        this.creationDate = creationDate;
    }

    public LocalDateTime getModificationDate() {
        return modificationDate;
    }

    public void setModificationDate(LocalDateTime modificationDate) {
        this.modificationDate = modificationDate;
    }
}