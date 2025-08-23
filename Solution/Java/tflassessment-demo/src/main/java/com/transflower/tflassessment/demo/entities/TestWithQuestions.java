package com.transflower.tflassessment.demo.entities;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class TestWithQuestions {

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

    public TestWithQuestions() {
        this.questions = new ArrayList<>();
        this.id = 0;
        this.name = "";
        this.subjectId = 0;
        this.duration = Duration.ZERO;
        this.smeId = 0;
        this.creationDate = LocalDateTime.now();
        this.modificationDate = LocalDateTime.now();
        this.scheduledDate = LocalDateTime.now();
        this.passingLevel = 0;
        this.status = "";
        this.questions = new ArrayList<>();

    }

    public TestWithQuestions(int id, String name, int subjectId, Duration duration,
            int smeId, LocalDateTime creationDate, LocalDateTime modificationDate, LocalDateTime scheduledDate,
            List<Question> question) {

        this.id = id;
        this.name = name;
        this.subjectId = subjectId;
        this.duration = duration;
        this.smeId = smeId;
        this.creationDate = creationDate;
        this.modificationDate = modificationDate;
        this.scheduledDate = scheduledDate;
        this.questions = question;
        this.passingLevel = passingLevel;
        this.status = status;
        this.questions = question;
    }

    // Getters and Setters
    public LocalDateTime getScheduledDate() {
        return scheduledDate;
    }

    public void setScheduledDate(LocalDateTime scheduledDate) {
        this.scheduledDate = scheduledDate;
    }

    @Override
    public String toString() {
        return "TestWithQuestions{"
                + "id=" + id
                + ", name=" + name
                + ", subjectId=" + subjectId
                + ", duration=" + duration
                + ", smeId=" + smeId
                + ", creationDate=" + creationDate
                + ", modificationDate=" + modificationDate
                + ", scheduledDate=" + scheduledDate
                + ", passingLevel=" + passingLevel
                + ", status='" + status
                + ", questions=" + questions
                + '}';
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        TestWithQuestions other = (TestWithQuestions) obj;
        return id == other.id
                && Objects.equals(name, other.name)
                && subjectId == other.subjectId
                && Objects.equals(duration, other.duration)
                && smeId == other.smeId
                && Objects.equals(creationDate, other.creationDate)
                && Objects.equals(modificationDate, other.modificationDate)
                && Objects.equals(scheduledDate, other.scheduledDate)
                && passingLevel == other.passingLevel
                && Objects.equals(status, other.status)
                && Objects.equals(questions, other.questions);

    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, subjectId, duration, smeId, creationDate, modificationDate, scheduledDate,
                passingLevel, status, questions);

    }

    @Override
    public Object clone() throws CloneNotSupportedException {
        return super.clone();

    }

    @Override
    protected void finalize() throws Throwable {
        try {
            System.out.println("Finalize called for " + this);
        } finally {
            super.finalize();

        }
    }

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
