package com.transflower.tflcomentor.evaluationcontentmanagement.repository;

import java.util.List;

import com.transflower.tflcomentor.evaluationcontentmanagement.entity.Project;

public interface ProjectRepository {
    

     List<Project> getAllProjects();

    Project getProjectById(long project_id);
}
