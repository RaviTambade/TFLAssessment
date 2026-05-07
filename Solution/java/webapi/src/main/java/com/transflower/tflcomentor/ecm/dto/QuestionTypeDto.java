package com.transflower.tflcomentor.ecm.dto;

import com.transflower.tflcomentor.ecm.entity.enums.QuestionStatus;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionType;

public class QuestionTypeDto {
    private String description;
    private String status;
    private String questionType;

    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(QuestionStatus status) {
        this.status = status.toString();
    }
    public String getQuestionType() {
        return questionType;
    }
    public void setQuestionType(QuestionType questionType) {
        this.questionType = questionType.toString();
    }

    
}
