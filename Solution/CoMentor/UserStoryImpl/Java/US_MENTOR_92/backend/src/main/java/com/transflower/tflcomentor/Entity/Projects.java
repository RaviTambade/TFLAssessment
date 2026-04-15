package com.transflower.tflcomentor.Entity;

import java.time.LocalDateTime;
import java.util.Date;

public class Projects {
    private int id;
    private int mentor_id;
    private String project_name;
    private String description;
    private String repository_url;
    private String status;
    private LocalDateTime created_at;

    public Projects() {
        this.id = 0;
        this.mentor_id = 0;
        this.project_name = " ";
        this.description = "";
        this.repository_url = "";
        this.status = "";
        this.created_at = LocalDateTime.now();
    }
    
    public Projects(int id, int mentor_id, String project_name, String description,
            String repository_url, String status, LocalDateTime created_at) {

        this.id = id;
        this.mentor_id = mentor_id;
        this.project_name = project_name;
        this.description = description;
        this.repository_url = repository_url;
        this.status = status;
        this.created_at = created_at;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getMentor_id() {
        return mentor_id;
    }

    public void setMentor_id(int mentor_id) {
        this.mentor_id = mentor_id;
    }

    public String getProject_name() {
        return project_name;
    }

    public void setProject_name(String project_name) {
        this.project_name = project_name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getRepository_url() {
        return repository_url;
    }

    public void setRepository_url(String repository_url) {
        this.repository_url = repository_url;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDateTime getCreated_at() {
        return created_at;
    }

    public void setCreated_at(LocalDateTime created_at) {
        this.created_at = created_at;
    }

}
