package com.transflower.tflcomentor.Entities;

public class Questions {
    private long question_id;
    private String description;
    private String question_type;
    private String difficulty_level;
    private String created_at;
    private String status;

    public Questions() {
        this.question_id = 0;
        this.description = "";
        this.question_type = "";
        this.difficulty_level = "";
        this.created_at = "";
        this.status = "";

    }

    public Questions(long question_id, String description, String question_type, String difficulty_level,
            String created_at, String status) {
        this.question_id = question_id;
        this.description = description;
        this.question_type = question_type;
        this.difficulty_level = difficulty_level;
        this.created_at = created_at;
        this.status = status;
    }

    public long getQuestion_id() {
        return question_id;
    }

    public void setQuestion_id(long question_id) {
        this.question_id = question_id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getQuestion_type() {
        return question_type;
    }

    public void setQuestion_type(String question_type) {
        this.question_type = question_type;
    }

    public String getDifficulty_level() {
        return difficulty_level;
    }

    public void setDifficulty_level(String difficulty_level) {
        this.difficulty_level = difficulty_level;
    }

    public String getCreated_at() {
        return created_at;
    }

    public void setCreated_at(String created_at) {
        this.created_at = created_at;
    }

    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return ("Questions [question_id=" + question_id + ", description=" + description + ", question_type="
                + question_type
                + ", difficulty_level=" + difficulty_level + ", created_at=" + created_at + ", status=" + status
                + "]");
    }
}

//US_SME_64: As an SME, I want to analyze question difficulty so that I can improve the
// quality of assessments.


