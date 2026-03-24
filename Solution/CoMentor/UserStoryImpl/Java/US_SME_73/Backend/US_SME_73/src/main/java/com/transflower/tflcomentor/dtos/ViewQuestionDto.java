package com.transflower.tflcomentor.dtos;

public class ViewQuestionDto {

    private Long questionId;
    private String description;
    private String questionType;

    public ViewQuestionDto(Long questionId, String description, String questionType) {
        this.questionId = questionId;
        this.description = description;
        this.questionType = questionType;
    }

    // Getters
    public Long getQuestionId() {
        return questionId;
    }
    public String getDescription() {
        return description;
    }
    public String getQuestionType() {
        return questionType;
    }
}