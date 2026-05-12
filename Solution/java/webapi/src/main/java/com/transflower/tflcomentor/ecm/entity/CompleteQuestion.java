package com.transflower.tflcomentor.ecm.entity;

import java.time.LocalDateTime;

import com.transflower.tflcomentor.ecm.entity.enums.DifficultyLevel;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionStatus;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionType;

public class CompleteQuestion {


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
    private String optionA;
    private String optionB;
    private String optionC;
    private String optionD;
    private String correctAnswer;

    public CompleteQuestion


    // Getters and Setters
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getOptionA() {
        return optionA;
    }
    public void setOptionA(String optionA) {
        this.optionA = optionA;
    }
    public String getOptionB() {
        return optionB;
    }
    public void setOptionB(String optionB) {
        this.optionB = optionB;
    }
    public String getOptionC() {
        return optionC;
    }
    public void setOptionC(String optionC) {
        this.optionC = optionC;
    }
    public String getOptionD() {
        return optionD;
    }
    public void setOptionD(String optionD) {
        this.optionD = optionD;
    }
    public String getCorrectAnswer() {
        return correctAnswer;
    }
    public void setCorrectAnswer(String correctAnswer) {
        this.correctAnswer = correctAnswer;
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
