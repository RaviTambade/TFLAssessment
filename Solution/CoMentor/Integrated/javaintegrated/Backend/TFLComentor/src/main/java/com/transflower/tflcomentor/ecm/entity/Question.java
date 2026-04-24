package com.transflower.tflcomentor.ecm.entity;

import java.time.LocalDateTime;

import com.transflower.tflcomentor.ecm.entity.enums.QuestionTypes;

public class Question {
    private Long questionId;
    private String description;
    private QuestionTypes questionType;
    private String difficultyLevel;
    private String status;
    private LocalDateTime createdAt;

    public Question() {
    }

    public Question(Long questionId, String description, QuestionTypes questionType,
            String difficultyLevel, String status) {
        this.questionId = questionId;
        this.description = description;
        this.questionType = questionType;
        this.difficultyLevel = difficultyLevel;
        this.status = status;
    }

    public Question(Long questionId, String description, QuestionTypes questionType,
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

    public QuestionTypes getQuestionType() {
        return questionType;
    }

    public void setQuestionType(QuestionTypes questionType) {
        this.questionType = questionType;
    }

    public String getDifficultyLevel() {
        return difficultyLevel;
    }

    public void setDifficultyLevel(String difficultyLevel) {
        this.difficultyLevel = difficultyLevel;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    
    
}
