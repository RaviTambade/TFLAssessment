package com.transflower.tflcomentor.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflcomentor.Entity.Projects;
import com.transflower.tflcomentor.Service.IProjectService;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin("http://localhost:8081")

public class ProjectsController1 {
    @Autowired
    private IProjectService projectService;

    @GetMapping
    public List<Projects> getProjects() {
        return projectService.getAllProjects();
    }

    @GetMapping("/{id}")
    public Projects getProject(@PathVariable int id) {
        return projectService.getProjectById(id);
    }

}


