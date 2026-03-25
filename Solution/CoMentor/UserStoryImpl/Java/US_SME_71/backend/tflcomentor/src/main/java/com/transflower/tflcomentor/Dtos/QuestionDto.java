package com.transflower.tflcomentor.Dtos;

public class QuestionDto {
    private int questionId;
    private String questiondifficultylevel;
    private String questionType;
    private String questionText;
    private String questionStatus;

    // Constructors
    public QuestionDto() {}

    public QuestionDto(int questionId, String questiondifficultylevel, String questionType, String questionText, String questionStatus) {
        this.questionId = questionId;
        this.questiondifficultylevel = questiondifficultylevel;
        this.questionType = questionType;
        this.questionText = questionText;
        this.questionStatus = questionStatus;
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

    public String getQuestionStatus() {
        return questionStatus;
    }

    public void setQuestionStatus(String questionStatus) {
        this.questionStatus = questionStatus;
    }

    public String getQuestiondifficultylevel() {
        return questiondifficultylevel;
    }

    public void setQuestiondifficultylevel(String questiondifficultylevel) {
        this.questiondifficultylevel = questiondifficultylevel;
    }

}