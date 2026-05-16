package com.transflower.tflcomentor.ecm.dto.response;

import java.time.LocalDateTime;

public class InterviewDetails {
    private int interviewId;
    private String title;
    private LocalDateTime scheduleDate;
    private String mode;
    private String interviewer;

    // Default Constructor
    public InterviewDetails() {
    }

    // Parameterized Constructor
    public InterviewDetails(int interviewId,String title, LocalDateTime scheduleDate, String mode, String interviewer) {
        this.title = title;
        this.scheduleDate = scheduleDate;
        this.mode = mode;
        this.interviewer = interviewer;
        this.interviewId=interviewId;
    }

    // Getter and Setter for title
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    // Getter and Setter for scheduleDate
    public LocalDateTime getScheduleDate() {
        return scheduleDate;
    }

    public void setScheduleDate(LocalDateTime scheduleDate) {
        this.scheduleDate = scheduleDate;
    }

    // Getter and Setter for mode
    public String getMode() {
        return mode;
    }

    public void setMode(String mode) {
        this.mode = mode;
    }

    // Getter and Setter for interviewer
    public String getInterviewer() {
        return interviewer;
    }

    public void setInterviewer(String interviewer) {
        this.interviewer = interviewer;
    }

    public int getInterviewId() {
        return interviewId;
    }

    public void setInterviewId(int interviewId) {
        this.interviewId = interviewId;
    }
}