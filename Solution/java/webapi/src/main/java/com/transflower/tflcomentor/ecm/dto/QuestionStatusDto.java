package com.transflower.tflcomentor.ecm.dto;

public class QuestionStatusDto {
    private Long questionId;
    private String description;
    private String status;

    public QuestionStatusDto() {
    }

    public QuestionStatusDto(Long questionId, String description, String status) {
        this.questionId = questionId;
        this.description = description;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
