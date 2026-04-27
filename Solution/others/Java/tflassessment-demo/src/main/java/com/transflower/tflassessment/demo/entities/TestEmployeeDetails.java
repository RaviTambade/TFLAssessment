package com.transflower.tflassessment.demo.entities;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.Objects;

public class TestEmployeeDetails implements Cloneable {
    private int id;
    private String testName;
    private String passingLevel;
    private Duration duration;
    private LocalDateTime scheduledStart;
    private LocalDateTime scheduledEnd;
    private String status;

    public TestEmployeeDetails() {
        this.id = 0;
        this.testName = "";
        this.passingLevel = "";
        this.duration = Duration.ZERO;
        this.scheduledStart = LocalDateTime.MIN;
        this.scheduledEnd = LocalDateTime.MIN;
        this.status = "";
    }

    public TestEmployeeDetails(int id, String testName, String passingLevel, Duration duration,
            LocalDateTime scheduledStart, LocalDateTime scheduledEnd, String status) {
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

    @Override
    public String toString() {
        return "TestAverageReport{" +
                " Id=" + id +
                ",Test Name='" + testName +
                ",Passing Level='" + passingLevel +
                ",Duration='" + duration +
                ",Scheduled Start='" + scheduledStart +
                ",Scheduled End='" + scheduledEnd +
                ",Status='" + status + "'}";
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null || getClass() != obj.getClass())
            return false;
        TestEmployeeDetails other = (TestEmployeeDetails) obj;
        return id == other.id &&
                Objects.equals(testName, other.testName) &&
                Objects.equals(passingLevel, other.passingLevel) &&
                Objects.equals(duration, other.duration) &&
                Objects.equals(scheduledStart, other.scheduledStart) &&
                Objects.equals(scheduledEnd, other.scheduledEnd) &&
                Objects.equals(status, other.status);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, testName, passingLevel, duration, scheduledStart, scheduledEnd, status);
    }

    @Override
    public void finalize() throws Throwable {
        try {
            System.out.println("Finalize called for" + this);
        } finally {
            super.finalize();
        }
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        try {
            return new TestEmployeeDetails(id, testName, passingLevel, duration, scheduledStart, scheduledEnd, status);
        } catch (Exception e) {
            System.out.println("Clone Exception");
            return null;
        }
    }

}
