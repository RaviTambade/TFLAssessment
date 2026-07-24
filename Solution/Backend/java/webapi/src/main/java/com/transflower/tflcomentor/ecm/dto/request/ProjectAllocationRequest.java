package com.transflower.tflcomentor.ecm.dto.request;

import java.util.List;

public class ProjectAllocationRequest{

    private Long projectId;
    private List<Long> studentIds;

    public Long getProjectId() { return projectId; }
    public void setProjectId(Long projectId) { this.projectId = projectId; }

    public List<Long> getStudentIds() {
        return studentIds;
    }

    public void setStudentIds(List<Long> studentIds) {
        this.studentIds = studentIds;
    }
}     




//Class: it is a blue print
//Create real  world entities from class
// data member  and member function
// static member and static functions
