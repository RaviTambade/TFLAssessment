package com.transflower.tflcomentor.dtos;

public class AllQuestionsDto {
     private String description;
    private String questionType;

    public AllQuestionsDto(String description, String questionType) {
        this.description = description;
        this.questionType = questionType;
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
    
}
