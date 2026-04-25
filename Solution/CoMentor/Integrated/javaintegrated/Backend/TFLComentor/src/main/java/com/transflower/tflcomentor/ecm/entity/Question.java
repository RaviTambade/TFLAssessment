package com.transflower.tflcomentor.ecm.entity;

import java.time.LocalDateTime;

import javax.xml.crypto.Data;

import com.transflower.tflcomentor.ecm.entity.enums.DifficultyLevels;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionStatus;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionTypes;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionStatus;

public class Question {
    private Long questionId;
    private String description;
    private QuestionTypes questionType;
    private DifficultyLevels difficultyLevel;
    private QuestionStatus status;
    private LocalDateTime createdAt;

    public Question() {
    }

    public Question(Long questionId, String description, QuestionTypes questionType,
            DifficultyLevels difficultyLevel, QuestionStatus status) {
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

    public QuestionTypes getQuestionType() {
        return questionType;
    }

    public void setQuestionType(QuestionTypes questionType) {
        this.questionType = questionType;
    }

    public DifficultyLevels getDifficultyLevel() {
        return difficultyLevel;
    }

    public void setDifficultyLevel(DifficultyLevels difficultyLevel) {
        this.difficultyLevel = difficultyLevel;
    }

    public QuestionStatus getStatus() {
        return status;
    }

    public void setStatus(QuestionStatus status) {
        this.status = status;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    
    
}
