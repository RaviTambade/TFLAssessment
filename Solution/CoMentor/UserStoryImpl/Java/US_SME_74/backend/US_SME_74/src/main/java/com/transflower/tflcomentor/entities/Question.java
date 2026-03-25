package com.transflower.tflcomentor.entities;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "questions")
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private QuestionType questionType;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private DifficultyLevel difficultyLevel;

    private LocalDateTime createdAt;

    private Boolean status;

    // --- Getters & Setters ---
    public Long getQuestionId() { return questionId; }
    public void setQuestionId(Long questionId) { this.questionId = questionId; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public QuestionType getQuestionType() { return questionType; }
    public void setQuestionType(QuestionType questionType) { this.questionType = questionType; }

    public DifficultyLevel getDifficultyLevel() { return difficultyLevel; }
    public void setDifficultyLevel(DifficultyLevel difficultyLevel) { this.difficultyLevel = difficultyLevel; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public Boolean getStatus() { return status; }
    public void setStatus(Boolean status) { this.status = status; }

    // --- Enums inside the entity ---
    public enum QuestionType {
        MCQ, PROBLEM_STATEMENT, HANDS_ON
    }

    public enum DifficultyLevel {
        BEGINNER, INTERMEDIATE, ADVANCE
    }
}