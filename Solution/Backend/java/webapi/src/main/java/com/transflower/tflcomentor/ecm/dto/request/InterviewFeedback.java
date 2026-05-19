package com.transflower.tflcomentor.ecm.dto.request;

import java.time.LocalDateTime;

public class InterviewFeedback {

    private long id;
    private long interviewId;
    private long smeId;

    private LocalDateTime startTime;
    private LocalDateTime endTime;

    private int communicationRating;
    private int problemSolvingRating;

    private String strengths;
    private String feedbackComment;
    private String recommendation;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public InterviewFeedback() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getInterviewId() {
        return interviewId;
    }

    public void setInterviewId(long interviewId) {
        this.interviewId = interviewId;
    }

    public long getSmeId() {
        return smeId;
    }

    public void setSmeId(long smeId) {
        this.smeId = smeId;
    }

    public LocalDateTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalDateTime startTime) {
        this.startTime = startTime;
    }

    public LocalDateTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalDateTime endTime) {
        this.endTime = endTime;
    }

    public int getCommunicationRating() {
        return communicationRating;
    }

    public void setCommunicationRating(int communicationRating) {
        this.communicationRating = communicationRating;
    }

    public int getProblemSolvingRating() {
        return problemSolvingRating;
    }

    public void setProblemSolvingRating(int problemSolvingRating) {
        this.problemSolvingRating = problemSolvingRating;
    }

    public String getStrengths() {
        return strengths;
    }

    public void setStrengths(String strengths) {
        this.strengths = strengths;
    }

    public String getFeedbackComment() {
        return feedbackComment;
    }

    public void setFeedbackComment(String feedbackComment) {
        this.feedbackComment = feedbackComment;
    }

    public String getRecommendation() {
        return recommendation;
    }

    public void setRecommendation(String recommendation) {
        this.recommendation = recommendation;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }
}