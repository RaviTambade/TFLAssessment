package com.transflower.tflcomentor.evaluationcontentmanagement.service;

import java.util.List;

import com.transflower.tflcomentor.evaluationcontentmanagement.entity.Project;

public interface ProjectServices {

    List<Project> getAllProjects();

    Project getProjectById(long project_id);
}
