package com.transflower.tflcomentor.Dtos;

public class QuestionDto {
    private int questionId;
    private String questionType;
    private String questionText;

    // Constructors
    public QuestionDto() {}

    public QuestionDto(int questionId, String questionType, String questionText) {
        this.questionId = questionId;
        this.questionType = questionType;
        this.questionText = questionText;
    }

    // Getters and Setters
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
}