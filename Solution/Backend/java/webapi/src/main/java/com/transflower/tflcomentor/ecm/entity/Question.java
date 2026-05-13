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
    private String language;
    private String layer;
    private String framework;
    private String concept;

    public Question() {
    }

    public Question(Long questionId, String description, QuestionType questionType, DifficultyLevel difficultyLevel,LocalDateTime createdAt, QuestionStatus status, String language, String layer, String framework, String concept) {
        this.questionId = questionId;
        this.description = description;
        this.questionType = questionType;
        this.difficultyLevel = difficultyLevel;
        this.createdAt = createdAt;
        this.status = status;
        this.language = language;
        this.layer = layer;
        this.framework = framework;
        this.concept = concept;
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

    public String getLanguage() {
        return language;
    }   
    public void setLanguage(String language) {
        this.language = language;
    }
    public String getLayer() {
        return layer;
    }
    public void setLayer(String layer) {
        this.layer = layer;
    }
    public String getFramework() {
        return framework;
    }
    public void setFramework(String framework) {
        this.framework = framework;
    }
    public String getConcept() {
        return concept;
    }
    public void setConcept(String concept) {
        this.concept = concept;
    }
   
   
    
}
