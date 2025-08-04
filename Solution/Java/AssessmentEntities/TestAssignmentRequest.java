package com.transflower.tflAssessment.entities;

import java.time.LocalDateTime;
import java.util.List;

public class TestAssignmentRequest {

    private int TestId;
    private List<Integer> EmployeeIds;
    private LocalDateTime ScheduledStart;
    private LocalDateTime ScheduledEnd;
    private String Status;
    private LocalDateTime RescheduledOn;
    private String Remarks;

    // Getters and Setters

    public int getTestId(){
        return TestId;
    }

    public void setTestId(int TestId){
        this.TestId = TestId;
    }

    public List<Integer> getEmployeeIds(){
        return EmployeeIds;
    }

    public void setEmployeeIds(List<Integer> EmployeeIds){
        this.EmployeeIds = EmployeeIds; 
    }

    public LocalDateTime getScheduledStart(){
        return ScheduledStart;
    }

    public void setScheduledStart(LocalDateTime ScheduledStart ){
        this.ScheduledStart = ScheduledStart;
    }

    public LocalDateTime getRescheduledOn(){
        return RescheduledOn;
    }

    public void setReScheduledOn(LocalDateTime ReScheduledOn ){
        this.RescheduledOn = ReScheduledOn;
    }

    public LocalDateTime getScheduledEnd(){
        return ScheduledEnd;
    }

    public void setScheduledEnd(LocalDateTime ScheduledEnd ){
        this.ScheduledEnd = ScheduledEnd;
    }

    public String getRemarks(){
        return Remarks;
    }

    public void setRemarks(String Remarks){
        this.Remarks = Remarks; 
    }

    public String getStatus(){
        return Status;
    }

    public void setStatus(String Status){
        this.Status = Status; 
    }
}

    

