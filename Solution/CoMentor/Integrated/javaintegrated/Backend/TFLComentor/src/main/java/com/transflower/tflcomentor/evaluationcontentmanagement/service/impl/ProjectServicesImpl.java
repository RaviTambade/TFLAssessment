package com.transflower.tflcomentor.evaluationcontentmanagement.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.evaluationcontentmanagement.entity.Projects;
import com.transflower.tflcomentor.evaluationcontentmanagement.repository.ProjectRepository;
import com.transflower.tflcomentor.evaluationcontentmanagement.repository.QuestionsRepository;
import com.transflower.tflcomentor.evaluationcontentmanagement.service.ProjectServices;


@Service
public class ProjectServicesImpl implements ProjectServices {
    private final ProjectRepository repository;
    
    public ProjectServicesImpl(ProjectRepository repository) {
        this.repository = repository;
    }

   @Override
    public List<Projects> getAllProjects() {
        return repository.getAllProjects();
    }

    @Override
    public Projects getProjectById(long project_id) {
        return repository.getProjectById(project_id);
    }
}
