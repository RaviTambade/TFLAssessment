package com.transflower.tflcomentor.ecm.dto.request;

import java.time.LocalDateTime;

import com.transflower.tflcomentor.ecm.entity.enums.InterviewStatus;

public class ScheduleInterview {
    private LocalDateTime scheduleAt;
    private String mode;
    private InterviewStatus status;
    private LocalDateTime createdAt;
    private int interviewer;
    private int studentId;

    public ScheduleInterview(){

    }

    public ScheduleInterview(LocalDateTime scheduleAt,String mode,InterviewStatus status,LocalDateTime createdAt,int interviewer,int studentId){
        this.scheduleAt=scheduleAt;
        this.mode=mode;
        this.status=status;
        this.createdAt=createdAt;
        this.interviewer=interviewer;
        this.studentId=studentId;
    }

    public LocalDateTime getScheduleAt() {
        return scheduleAt;
    }
    public void setScheduleAt(LocalDateTime scheduleAt) {
        this.scheduleAt = scheduleAt;
    }

    public String getMode() {
        return mode;
    }
    public void setMode(String mode) {
        this.mode = mode;
    }

    public InterviewStatus getStatus() {
        return status;
    }
    public void setStatus(InterviewStatus status) {
        this.status = status;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public int getInterviewer() {
        return interviewer;
    }
    public void setInterviewer(int interviewer) {
        this.interviewer = interviewer;
    }
    public int getStudentId() {
        return studentId;
    }
    public void setStudentId(int studentId) {
        this.studentId = studentId;
    }

}
