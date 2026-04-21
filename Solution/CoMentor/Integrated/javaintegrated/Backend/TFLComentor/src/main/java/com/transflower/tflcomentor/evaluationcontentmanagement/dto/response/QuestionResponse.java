package com.transflower.tflcomentor.evaluationcontentmanagement.dto.response;

import java.time.LocalDateTime;

public class QuestionResponse {
    private Long questionId;
    private String description;
    private String questionType;
    private String difficultyLevel;
    private String status;
    private LocalDateTime createdAt;

    public QuestionResponse() {
    }

    public QuestionResponse(Long questionId, String description, String questionType,
            String difficultyLevel, String status) {
        this.questionId = questionId;
        this.description = description;
        this.questionType = questionType;
        this.difficultyLevel = difficultyLevel;
        this.status = status;
    }

    public QuestionResponse(Long questionId, String description, String questionType,
            String difficultyLevel, LocalDateTime createdAt, String status) {
        this.questionId = questionId;
        this.description = description;
        this.questionType = questionType;
        this.difficultyLevel = difficultyLevel;
        this.createdAt = createdAt;
        this.status = status;
    }

    // Getters and Setters
    public Long getQuestionId() {
        return questionId;
    }

    public void setQuestionId(Long questionId) {
        this.questionId = questionId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getQuestionType() {
        return questionType;
    }

    public void setQuestionType(String questionType) {
        this.questionType = questionType;
    }

    public String getDifficultyLevel() {
        return difficultyLevel;
    }

    public void setDifficultyLevel(String difficultyLevel) {
        this.difficultyLevel = difficultyLevel;
    }

    public String geQuestiontStatus() {
        return status;
    }

    public void setQuestionStatus(String status) {
        this.status = status;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
