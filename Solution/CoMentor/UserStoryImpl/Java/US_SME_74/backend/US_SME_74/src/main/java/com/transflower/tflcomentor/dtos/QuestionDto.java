package com.transflower.tflcomentor.dtos;

import com.transflower.tflcomentor.entities.Question;

public class QuestionDto {

    private Long questionId;
    private String description;
    private Question.QuestionType questionType;
    private Question.DifficultyLevel difficultyLevel;
    private Question.Status status;

    public QuestionDto() {}

    public QuestionDto(Question q) {
        this.questionId = q.getQuestionId();
        this.description = q.getDescription();
        this.questionType = q.getQuestionType();
        this.difficultyLevel = q.getDifficultyLevel();
        this.status = q.getStatus();
    }

    // --- Getters & Setters ---
    public Long getQuestionId() { return questionId; }
    public void setQuestionId(Long questionId) { this.questionId = questionId; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public Question.QuestionType getQuestionType() { return questionType; }
    public void setQuestionType(Question.QuestionType questionType) { this.questionType = questionType; }

    public Question.DifficultyLevel getDifficultyLevel() { return difficultyLevel; }
    public void setDifficultyLevel(Question.DifficultyLevel difficultyLevel) { this.difficultyLevel = difficultyLevel; }

   public Question.Status getStatus() { return status; }
   public void setStatus(Question.Status status) { this.status = status; }

}