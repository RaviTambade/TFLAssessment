// write entities for viewing questions by question type 
//i am using jdbc 
package com.transflower.tflcomentor.Entities;

public class ViewQuestionsByType {
    private int questionId;
    private String questionType;
    private String questiondifficultyLevel;
    private String questionText;
    private String questionStatus;

    public ViewQuestionsByType() {
    }

    public ViewQuestionsByType(int questionId, String questionType, String questionText, String questiondifficultyLevel, String questionStatus) {
        this.questionId = questionId;
        this.questionType = questionType;
        this.questionText = questionText;
        this.questiondifficultyLevel = questiondifficultyLevel;
        this.questionStatus = questionStatus;

    }

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

    public String getQuestiondifficultyLevel() {
        return questiondifficultyLevel;
    }

    public void setQuestiondifficultyLevel(String questiondifficultyLevel) {
        this.questiondifficultyLevel = questiondifficultyLevel;
    }

    public String getQuestionStatus() {
        return questionStatus;
    }

    public void setQuestionStatus(String questionStatus) {
        this.questionStatus = questionStatus;
    }
}
