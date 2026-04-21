package com.transflower.tflcomentor.evaluationcontentmanagement.dto.response;


public class QuestionListResponseDto {

    private Long questionId;
    private String description;
    private String questionType;
    private String questionStatus;

    public QuestionListResponseDto() {}

    public QuestionListResponseDto(Long questionId, String description,String questionType,String questionStatus) {
        this.questionId = questionId;
        this.description = description;
        this.questionType = questionType;
        this.questionStatus=questionStatus;

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

    public String getQuestionType() {
        return questionType;
    }

    public void setQuestionType(String questionType) {
        this.questionType = questionType;
    }

    public String getQuestionStatus() {
        return questionStatus;
    }

    public void setQuestionStatus(String questionStatus) {
        this.questionStatus = questionStatus;
    }
}

