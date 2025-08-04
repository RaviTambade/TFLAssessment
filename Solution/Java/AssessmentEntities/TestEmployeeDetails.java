package com.transflower.tflAssessment.entities;

import java.time.Duration;
import java.time.LocalDateTime;


public class TestEmployeeDetails {
    private int id;
    private String testName;
    private String passingLevel;
    private Duration duration;
    private LocalDateTime scheduledStart;
    private LocalDateTime scheduledEnd;
    private String status;

    public TestEmployeeDetails()
    {
        this.id = 0;
        this.testName = "";
        this.passingLevel = "";
        this.duration = Duration.ZERO;
        this.scheduledStart = LocalDateTime.MIN;
        this.scheduledEnd = LocalDateTime.MIN;
        this.status="";
    }

    public TestEmployeeDetails(int id,String testName,String passingLevel,Duration duration,LocalDateTime scheduledStart,LocalDateTime scheduledEnd,String status)
    {
        this.id = id;
        this.testName = testName;
        this.passingLevel = passingLevel;
        this.duration = duration;
        this.scheduledStart = scheduledStart;
        this.scheduledEnd = scheduledEnd;
        this.status = status;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTestName() {
        return testName;
    }

    public void setTestName(String testName) {
        this.testName = testName;
    }

    public String getPassingLevel() {
        return passingLevel;
    }

    public void setPassingLevel(String passingLevel) {
        this.passingLevel = passingLevel;
    }

    public Duration getDuration() {
        return duration;
    }

    public void setDuration(Duration duration) {
        this.duration = duration;
    }

    public LocalDateTime getScheduledStart() {
        return scheduledStart;
    }

    public void setScheduledStart(LocalDateTime scheduledStart) {
        this.scheduledStart = scheduledStart;
    }

    public LocalDateTime getScheduledEnd() {
        return scheduledEnd;
    }

    public void setScheduledEnd(LocalDateTime scheduledEnd) {
        this.scheduledEnd = scheduledEnd;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

}
