package com.transflower.tflcomentor.ecm.dto.response;

import com.transflower.tflcomentor.ecm.entity.enums.QuestionTypes;
import com.transflower.tflcomentor.ecm.entity.enums.DifficultyLevels;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionStatus;

public class QuestionResponseDTO {

    private Long id;
    private String description;
    private QuestionTypes questionType;
    private DifficultyLevels difficulty;
    private QuestionStatus status;

    public QuestionResponseDTO() {}

    public QuestionResponseDTO(Long id, String description,
                               QuestionTypes questionType,
                               DifficultyLevels difficulty,
                               QuestionStatus status) {
        this.id = id;
        this.description = description;
        this.questionType = questionType;
        this.difficulty = difficulty;
        this.status = status;
    }

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public QuestionTypes getQuestionType() {
        return questionType;
    }

    public DifficultyLevels getDifficulty() {
        return difficulty;
    }

    public QuestionStatus getStatus() {
        return status;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setQuestionType(QuestionTypes questionType) {
        this.questionType = questionType;
    }

    public void setDifficulty(DifficultyLevels difficulty) {
        this.difficulty = difficulty;
    }

    public void setStatus(QuestionStatus status) {
        this.status = status;
    }
}
