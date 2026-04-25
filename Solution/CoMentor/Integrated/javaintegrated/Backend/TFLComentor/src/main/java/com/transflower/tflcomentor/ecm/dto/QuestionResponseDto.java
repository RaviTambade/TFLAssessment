<<<<<<< HEAD:Solution/CoMentor/Integrated/javaintegrated/Backend/TFLComentor/src/main/java/com/transflower/tflcomentor/ecm/dto/response/QuestionResponseDto.java
package com.transflower.tflcomentor.ecm.dto.response;

import java.time.LocalDateTime;

public class QuestionResponseDto {

    private Long questionId;
    private String description;
    private String questionType;
    private String difficultyLevel;
    private String questionStatus;
    private LocalDateTime createdAt;

=======
package com.transflower.tflcomentor.ecm.dto;

import java.time.LocalDateTime;

import com.transflower.tflcomentor.ecm.entity.enums.DifficultyLevel;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionStatus;
import com.transflower.tflcomentor.ecm.entity.enums.QuestionType;



public class QuestionResponseDto {
    private Long questionId;
    private String description;
    private QuestionType questionType;
    private DifficultyLevel difficultyLevel;
    private QuestionStatus status;
    private LocalDateTime createdAt;

    public QuestionResponseDto() {
    }

    public QuestionResponseDto(Long questionId, String description, QuestionType questionType,
            DifficultyLevel difficultyLevel, QuestionStatus status) {
        this.questionId = questionId;
        this.description = description;
        this.questionType = questionType;
        this.difficultyLevel = difficultyLevel;
        this.status = status;
    }

    

    // Getters and Setters
>>>>>>> 85c337740a6b0aab8d9b488ab71e5535536d1d5e:Solution/CoMentor/Integrated/javaintegrated/Backend/TFLComentor/src/main/java/com/transflower/tflcomentor/ecm/dto/QuestionResponseDto.java
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

<<<<<<< HEAD:Solution/CoMentor/Integrated/javaintegrated/Backend/TFLComentor/src/main/java/com/transflower/tflcomentor/ecm/dto/response/QuestionResponseDto.java
    public String getQuestionType() {
        return questionType;
    }

    public void setQuestionType(String questionType) {
        this.questionType = questionType;
    }

    public String getDifficultyLevel() {
        return difficultyLevel;
    }

    public void setDifficultyLevel(String difficultyLevel) {
        this.difficultyLevel = difficultyLevel;
    }

    public String getQuestionStatus() {
        return questionStatus;
    }

    public void setQuestionStatus(String questionStatus) {
        this.questionStatus = questionStatus;
=======
    public QuestionType getQuestionType() {
        return questionType;
    }

    public void setQuestionType(QuestionType questionType) {
        this.questionType = questionType;
    }

    public DifficultyLevel getDifficultyLevel() {
        return difficultyLevel;
    }

    public void setDifficultyLevel(DifficultyLevel difficultyLevel) {
        this.difficultyLevel = difficultyLevel;
    }

    public QuestionStatus getQuestionStatus() {
        return status;
    }

    public void setQuestionStatus(QuestionStatus status) {
        this.status = status;
>>>>>>> 85c337740a6b0aab8d9b488ab71e5535536d1d5e:Solution/CoMentor/Integrated/javaintegrated/Backend/TFLComentor/src/main/java/com/transflower/tflcomentor/ecm/dto/QuestionResponseDto.java
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
