package com.transflower.tflcomentor.ecm.entity;

import java.time.LocalDateTime;

import com.transflower.tflcomentor.ecm.entity.enums.DifficultyLevel;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionStatus;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionType;

public class Question {
    private Long questionId;
    private String description;
    private QuestionType questionType;
    private DifficultyLevel difficultyLevel;
    private QuestionStatus status;
    private LocalDateTime createdAt;

    public Question() {
    }

    public Question(Long questionId, String description, QuestionType questionType, DifficultyLevel difficultyLevel, QuestionStatus status) {
        this.questionId = questionId;
        this.description = description;
        this.questionType = questionType;
        this.difficultyLevel = difficultyLevel;
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

    public QuestionType getQuestionType() {
        return questionType;
    }

    public void setQuestionType(QuestionType questionType) {
        this.questionType = questionType;
    }

    public DifficultyLevel getDifficultyLevel() {
        return difficultyLevel;
    }

    public void setDifficultyLevel(DifficultyLevel difficultyLevel) {
        this.difficultyLevel = difficultyLevel;
    }

    public QuestionStatus getStatus() {
        return status;
    }

    public void setQuestionStatus(QuestionStatus status) {
        this.status = status;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    

    
    
}
