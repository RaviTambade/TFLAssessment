package com.transflower.tflcomentor.evaluationcontentmanagement.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflcomentor.evaluationcontentmanagement.entity.Projects;
import com.transflower.tflcomentor.evaluationcontentmanagement.service.ProjectServices;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/projects")
public class ProjectController {
    private final ProjectServices service;
    
    public ProjectController(ProjectServices service) {
        this.service = service;
    }

    @GetMapping
    public List<Projects> getAllProjects() {
        return service.getAllProjects();
    }

    @GetMapping("/{id}")
    public Projects getProjectById(@PathVariable("id") long project_id) {
        return service.getProjectById(project_id);
    }
}
