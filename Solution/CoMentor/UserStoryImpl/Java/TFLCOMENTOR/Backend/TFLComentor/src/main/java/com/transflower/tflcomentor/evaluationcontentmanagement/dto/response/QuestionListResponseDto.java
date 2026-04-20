package com.transflower.tflcomentor.evaluationcontentmanagement.dto.response;


public class QuestionListResponseDto {

    private Long questionId;
    private String description;

    public QuestionListResponseDto() {}

    public QuestionListResponseDto(Long questionId, String description) {
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
