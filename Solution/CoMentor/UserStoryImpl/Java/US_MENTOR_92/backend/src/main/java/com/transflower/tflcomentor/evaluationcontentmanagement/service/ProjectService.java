package com.transflower.tflcomentor.evaluationcontentmanagement.service;

import java.util.List;
import com.transflower.tflcomentor.evaluationcontentmanagement.entity.Projects;

public interface ProjectService {
    List<Projects> getAllProjects();

    Projects getProjectById(int id);
}