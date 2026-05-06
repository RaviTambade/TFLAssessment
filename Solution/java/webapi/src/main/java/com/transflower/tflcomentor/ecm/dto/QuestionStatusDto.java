package com.transflower.tflcomentor.ecm.dto;

public class QuestionStatusDto {
    private Long questionId;
    private String status;

    public QuestionStatusDto() {
    }

    public QuestionStatusDto(Long questionId, String status) {
        this.questionId = questionId;
        this.status = status;
    }

    public Long getQuestionId() {
        return questionId;
    }

    public void setQuestionId(Long questionId) {
        this.questionId = questionId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
