package com.transflower.tflcomentor.ecm.entity;

import java.time.LocalDateTime;

public class Project {

    private long project_id;
    private long mentor_id;
    private String mentor_name;
    private String project_name;
    private String description;
    private String repository_url;
    private String status;
    private LocalDateTime created_at;
    private String allocatedStudents; // New field to store allocated students

    public Project() {

    }

    public Project(long project_id, long mentor_id, String mentor_name, String project_name, String description, String repository_url, String status, LocalDateTime created_at, String allocatedStudents) {
        this.project_id = project_id;
        this.mentor_id = mentor_id;
        this.mentor_name = mentor_name;
        this.project_name = project_name;
        this.description = description;
        this.repository_url = repository_url;
        this.status = status;
        this.created_at = created_at;
        this.allocatedStudents = allocatedStudents;

    }

    public String getAllocatedStudents() {
        return allocatedStudents;
    }

    public void setAllocatedStudents(String allocatedStudents) {
        this.allocatedStudents = allocatedStudents;
    }

    public long getProjectId() {
        return project_id;
    }

    public void setProjectId(long project_id) {
        this.project_id = project_id;
    }

    public String getMentorName() {
        return mentor_name;
    }

    public void setMentorName(String mentor_name) {
        this.mentor_name = mentor_name;
    }

    public String getProjectName() {
        return project_name;
    }

    public void setProjectName(String project_name) {
        this.project_name = project_name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getRepositoryUrl() {
        return repository_url;
    }

    public void setRepositoryUrl(String repository_url) {
        this.repository_url = repository_url;
    }

    public long getMentorId() {
        return mentor_id;
    }

    public void setMentorId(long mentor_id) {
        this.mentor_id = mentor_id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDateTime getCreatedAt() {
        return created_at;
    }

    public void setCreatedAt(LocalDateTime created_at) {
        this.created_at = created_at;
    }

    @Override
    public String toString() {
        return "Project{"
                + "project_id=" + project_id
                + ", mentor_id=" + mentor_id
                + ", project_name='" + project_name + '\''
                + ", description='" + description + '\''
                + ", repository_url='" + repository_url + '\''
                + ", status='" + status + '\''
                + ", created_at='" + created_at + '\''
                + '}';
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }

        Project project = (Project) obj;

        return project_id == project.project_id;
    }

    @Override
    public int hashCode() {
        return Long.hashCode(project_id);
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone(); // shallow copy
    }

}
