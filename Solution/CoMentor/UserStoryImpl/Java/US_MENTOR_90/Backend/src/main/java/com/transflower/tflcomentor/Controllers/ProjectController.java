package com.transflower.tflcomentor.Controllers;

import com.transflower.tflcomentor.Entities.Project;
import com.transflower.tflcomentor.Services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    @Autowired
    private ProjectService service;

    @GetMapping
    public List<Project> getAllProjects() {
        return service.getAllProjects();
    }

    @GetMapping("/{id}")
    public Project getProjectById(@PathVariable("id") long project_id) {
        return service.getProjectById(project_id);
    }
}



