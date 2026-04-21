package com.transflower.tflcomentor.entities;

import java.time.LocalDateTime;

public class Question {

    private Long questionId;
    private String description;
    private QuestionType questionType;
    private DifficultyLevel difficultyLevel;
    private LocalDateTime createdAt;
    private Status status;

    public Question() {
    }

    public Question(Long questionId, String description, QuestionType questionType, DifficultyLevel difficultyLevel, LocalDateTime createdAt, Status status) {
        this.questionId = questionId;
        this.description = description;
        this.questionType = questionType;
        this.difficultyLevel = difficultyLevel;
        this.createdAt = createdAt;
        this.status = status;
    }

    // --- Getters & Setters ---
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

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    // --- Enums inside the entity ---
    public enum QuestionType {
        MCQ, PROBLEM_STATEMENT, HANDS_ON
    }

    public enum DifficultyLevel {
        BEGINNER, INTERMEDIATE, ADVANCE
    }

    public enum Status {
        DRAFT, APPROVED, INACTIVE
    }

}
