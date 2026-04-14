// Hibernate entity for managing questions 
package com.transflower.tflcomentor.Entities;

import jakarta.persistence.*;

@Entity
@Table(name = "questions")
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "question_id")
    private int questionId;
    
    @Column(name = "question_type")
    private String questionType;
    
    @Column(name = "difficulty_level")
    private String questiondifficultyLevel;
    
    @Column(name = "description")
    private String questionText;
    
    @Column(name = "status")
    private String questionStatus;

    public Question() {
    }

    public Question(String questionType, String questionText, String questiondifficultyLevel, String questionStatus) {
        this.questionType = questionType;
        this.questionText = questionText;
        this.questiondifficultyLevel = questiondifficultyLevel;
        this.questionStatus = questionStatus;
    }

    public Question(int questionId, String questionType, String questionText, String questiondifficultyLevel, String questionStatus) {
        this.questionId = questionId;
        this.questionType = questionType;
        this.questionText = questionText;
        this.questiondifficultyLevel = questiondifficultyLevel;
        this.questionStatus = questionStatus;

    }

    public int getQuestionId() {
        return questionId;
    }

    public void setQuestionId(int questionId) {
        this.questionId = questionId;
    }

    public String getQuestionType() {
        return questionType;
    }

    public void setQuestionType(String questionType) {
        this.questionType = questionType;
    }

    public String getQuestionText() {
        return questionText;
    }

    public void setQuestionText(String questionText) {
        this.questionText = questionText;
    }

    public String getQuestiondifficultyLevel() {
        return questiondifficultyLevel;
    }

    public void setQuestiondifficultyLevel(String questiondifficultyLevel) {
        this.questiondifficultyLevel = questiondifficultyLevel;
    }

    public String getQuestionStatus() {
        return questionStatus;
    }

    public void setQuestionStatus(String questionStatus) {
        this.questionStatus = questionStatus;
    }
}
