package com.transflower.tflcomentor.ecm.dto.response;

import com.transflower.tflcomentor.ecm.entity.enums.DifficultyLevel;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionStatus;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionType;

public class QuestionDisplayToMentor {
    private Long questionId;
    private String description;
    private QuestionType questionType;
    

    public QuestionDisplayToMentor() {
    }

    public QuestionDisplayToMentor(Long questionId, String description, QuestionType questionType) {
        this.questionId = questionId;
        this.description = description;
        this.questionType = questionType;
        }

    // Getters and Setters
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
    public QuestionType getQuestionType() {
        return questionType;
    }
    public void setQuestionType(QuestionType questionType) {
        this.questionType = questionType;
    }    
}
