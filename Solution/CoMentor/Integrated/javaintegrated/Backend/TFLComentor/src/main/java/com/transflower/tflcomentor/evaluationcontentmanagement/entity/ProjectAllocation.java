package com.transflower.tflcomentor.evaluationcontentmanagement.entity;

import java.time.LocalDateTime;

public class ProjectAllocation {

    private Long id;
    private Long projectId;
    private Long studentId;
    private LocalDateTime joinedDate;
    private LocalDateTime releaseDate;

    public ProjectAllocation() {
        this.id = 0L;
        this.projectId = 0L;
        this.studentId = 0L;
        this.joinedDate = null;
        this.releaseDate = null;

    }

    public ProjectAllocation(Long id, Long projectId, Long studentId, LocalDateTime joinedDate, LocalDateTime releaseDate) {
        this.id = id;
        this.projectId = projectId;
        this.studentId = studentId;
        this.joinedDate = joinedDate;
        this.releaseDate = releaseDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getProjectId() {
        return projectId;
    }

    public void setProjectId(Long projectId) {
        this.projectId = projectId;
    }

    public Long getStudentId() {
        return studentId;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }

    public LocalDateTime getJoinedDate() {
        return joinedDate;
    }

    public void setJoinedDate(LocalDateTime joinedDate) {
        this.joinedDate = joinedDate;
    }

    public LocalDateTime getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(LocalDateTime releaseDate) {
        this.releaseDate = releaseDate;
    }
}
