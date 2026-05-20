package com.transflower.tflcomentor.interview.dto.response;

import java.time.LocalDateTime;

import com.transflower.tflcomentor.interview.dto.enums.InterviewStatus;

public class InterviewDetails {
    private int interviewId;
    private String title;
    private LocalDateTime scheduleDate;
    private String mode;
    private String interviewer;
    private InterviewStatus status;

    // Default Constructor
    public InterviewDetails() {
    }

    // Parameterized Constructor
    public InterviewDetails(int interviewId,String title, LocalDateTime scheduleDate, String mode, String interviewer, InterviewStatus status) {
        this.title = title;
        this.scheduleDate = scheduleDate;
        this.mode = mode;
        this.interviewer = interviewer;
        this.interviewId=interviewId;
        this.status = status;
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

    public InterviewStatus getStatus() {
        return status;
    }

    public void setStatus(InterviewStatus status) {
        this.status = status;
    }
}