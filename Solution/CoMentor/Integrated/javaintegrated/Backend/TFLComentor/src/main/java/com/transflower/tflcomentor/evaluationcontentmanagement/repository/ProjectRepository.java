package com.transflower.tflcomentor.evaluationcontentmanagement.repository;

import java.util.List;

import com.transflower.tflcomentor.evaluationcontentmanagement.entity.Projects;

public interface ProjectRepository {
    

     List<Projects> getAllProjects();

    Projects getProjectById(long project_id);
}
