package com.transflower.tflcomentor.dtos;

public class QuestionListDto {

    private Long questionId;
    private String description;

    public QuestionListDto() {}

    public QuestionListDto(Long questionId, String description) {
        this.questionId = questionId;
        this.description = description;
    }

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
}