package com.transflower.tflcomentor.ecm.dto.request;

import com.transflower.tflcomentor.ecm.entity.Question;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionTypes;
import com.transflower.tflcomentor.ecm.entity.enums.DifficultyLevels;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionStatus;



public class QuestionOptionsRequestDto {
    private long questionId;
    private String description;
    private QuestionTypes questionType;
    private DifficultyLevels difficultyLevel;
    private QuestionStatus status;
    private String questionDetails;

    private String optionA;
    private String optionB;
    private String optionC;
    private String optionD;
    private String correctAnswer;

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public QuestionTypes getQuestionType() {
        return questionType;
    }

    public void setQuestionType(QuestionTypes questionType) {
        this.questionType = questionType;
    }

    public DifficultyLevels getDifficultyLevel() {
        return difficultyLevel;
    }

    public void setDifficultyLevel(DifficultyLevels difficultyLevel) {
        this.difficultyLevel = difficultyLevel;
    }

    public QuestionStatus getStatus() {
        return status;
    }

    public void setStatus(QuestionStatus status) {
        this.status = status;
    }

    public String getOptionA() {
        return optionA;
    }

    public void setOptionA(String optionA) {
        this.optionA = optionA;
    }

    public String getOptionB() {
        return optionB;
    }

    public void setOptionB(String optionB) {
        this.optionB = optionB;
    }

    public String getOptionC() {
        return optionC;
    }

    public void setOptionC(String optionC) {
        this.optionC = optionC;
    }

    public String getOptionD() {
        return optionD;
    }

    public void setOptionD(String optionD) {
        this.optionD = optionD;
    }

    public String getCorrectAnswer() {
        return correctAnswer;
    }

    public void setCorrectAnswer(String correctAnswer) {
        this.correctAnswer = correctAnswer;
    }

    public long getQuestionId() {
        return questionId;
    }

    public void setQuestionId(long questionId) {
        this.questionId = questionId;
    }

    public String getQuestionDetails(long questionId) {
        return questionDetails;
    }

    public void setQuestionDetails(String questionDetails) {
        this.questionDetails = questionDetails;
    }
}
