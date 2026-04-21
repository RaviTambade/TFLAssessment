package com.transflower.tflcomentor.evaluationcontentmanagement.service;

import java.util.List;

import com.transflower.tflcomentor.evaluationcontentmanagement.entity.Projects;

public interface ProjectServices {

    List<Projects> getAllProjects();

    Projects getProjectById(long project_id);
}
