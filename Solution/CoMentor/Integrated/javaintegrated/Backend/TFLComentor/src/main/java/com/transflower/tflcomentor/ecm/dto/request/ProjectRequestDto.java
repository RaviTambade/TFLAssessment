package com.transflower.tflcomentor.ecm.dto.request;

public class ProjectRequestDto {
    private long mentor_id;
    private String project_name;
    private String description;
    private String repository_url;

    public long getMentor_id() {
        return mentor_id;
    }

    public void setMentor_id(long mentor_id) {
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

    @Override
    public String toString() {
        return "ProjectRequestDto{" +
                "mentor_id=" + mentor_id +
                ", project_name='" + project_name + '\'' +
                ", description='" + description + '\'' +
                ", repository_url='" + repository_url + '\'' +
                '}';
    }
}
