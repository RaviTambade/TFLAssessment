package com.transflower.tflassessment.entities;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

public class TestAssignmentRequest implements Cloneable {

    private int testId;
    private List<Integer> candidateIds;
    private LocalDateTime scheduledStart;
    private LocalDateTime scheduledEnd;
    private String status;
    private LocalDateTime rescheduledOn;
    //private String remarks;
    private int createdBy;
    private LocalDateTime createdOn;

    // Getters and Setters
    public int getTestId() {
        return testId;
    }

    public void setTestId(int testId) {
        this.testId = testId;
    }

    public List<Integer> getCandidateIds() {
        return candidateIds;
    }

    public void setCandidateIds(List<Integer> candidateIds) {
        this.candidateIds = candidateIds;
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

    public LocalDateTime getRescheduledOn() {
        return rescheduledOn;
    }

    public void setRescheduledOn(LocalDateTime rescheduledOn) {
        this.rescheduledOn = rescheduledOn;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    // public String getRemarks() {
    //     return remarks;
    // }
    // public void setRemarks(String remarks) {
    //     this.remarks = remarks;
    // }

    public void setCreatedBy(int createdBy){
        this.createdBy=createdBy;
    }

    public int getCreatedBy(){
        return createdBy;
    }

    public void setCreatedOn(LocalDateTime createdOn){
        this.createdOn=createdOn;
    }

    public LocalDateTime getCreatedOn(){
        return createdOn;
    }
    // toString
    @Override
    public String toString() {
        return "TestAssignmentRequest{" +
                "testId=" + testId +
                ", candidateIds=" + candidateIds +
                ", scheduledStart=" + scheduledStart +
                ", scheduledEnd=" + scheduledEnd +
                ", status='" + status + '\'' +
                ", rescheduledOn=" + rescheduledOn +
                ",createdBy="+createdBy+
                ", createdOn='" + createdOn + '\'' +
                '}';
    }

    // equals
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        TestAssignmentRequest other = (TestAssignmentRequest) obj;
        return testId == other.testId &&
                Objects.equals(candidateIds, other.candidateIds) &&
                Objects.equals(scheduledStart, other.scheduledStart) &&
                Objects.equals(scheduledEnd, other.scheduledEnd) &&
                Objects.equals(status, other.status) &&
                Objects.equals(rescheduledOn, other.rescheduledOn) &&
                Objects.equals(createdBy, other.createdBy) &&
                Objects.equals(createdOn, other.createdOn);
    }

    // hashCode
    @Override
    public int hashCode() {
        return Objects.hash(testId, candidateIds, scheduledStart, scheduledEnd, status, rescheduledOn, createdBy,createdOn);
    }

    // clone
    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }

    // finalize (optional)
    @Override
    protected void finalize() throws Throwable {
        try {
            System.out.println("Finalize called for: " + this);
        } finally {
            super.finalize();
        }
    }
}
