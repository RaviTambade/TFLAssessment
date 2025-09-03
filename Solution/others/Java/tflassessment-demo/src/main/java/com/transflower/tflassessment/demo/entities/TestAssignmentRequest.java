package com.transflower.tflassessment.demo.entities;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

public class TestAssignmentRequest implements Cloneable {

    private int testId;
    private List<Integer> employeeIds;
    private LocalDateTime scheduledStart;
    private LocalDateTime scheduledEnd;
    private String status;
    private LocalDateTime rescheduledOn;
    private String remarks;

    // Getters and Setters
    public int getTestId() {
        return testId;
    }

    public void setTestId(int testId) {
        this.testId = testId;
    }

    public List<Integer> getEmployeeIds() {
        return employeeIds;
    }

    public void setEmployeeIds(List<Integer> employeeIds) {
        this.employeeIds = employeeIds;
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

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    // toString
    @Override
    public String toString() {
        return "TestAssignmentRequest{" +
                "testId=" + testId +
                ", employeeIds=" + employeeIds +
                ", scheduledStart=" + scheduledStart +
                ", scheduledEnd=" + scheduledEnd +
                ", status='" + status + '\'' +
                ", rescheduledOn=" + rescheduledOn +
                ", remarks='" + remarks + '\'' +
                '}';
    }

    // equals
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        TestAssignmentRequest other = (TestAssignmentRequest) obj;
        return testId == other.testId &&
                Objects.equals(employeeIds, other.employeeIds) &&
                Objects.equals(scheduledStart, other.scheduledStart) &&
                Objects.equals(scheduledEnd, other.scheduledEnd) &&
                Objects.equals(status, other.status) &&
                Objects.equals(rescheduledOn, other.rescheduledOn) &&
                Objects.equals(remarks, other.remarks);
    }

    // hashCode
    @Override
    public int hashCode() {
        return Objects.hash(testId, employeeIds, scheduledStart, scheduledEnd, status, rescheduledOn, remarks);
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
