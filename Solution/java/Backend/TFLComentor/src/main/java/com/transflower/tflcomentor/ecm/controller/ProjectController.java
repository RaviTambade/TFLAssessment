package com.transflower.tflcomentor.ecm.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflcomentor.ecm.dto.ProjectAllocationRequestDto;
import com.transflower.tflcomentor.ecm.dto.ProjectAllocationResponseDto;
import com.transflower.tflcomentor.ecm.entity.Project;
import com.transflower.tflcomentor.ecm.entity.ProjectAllocation;
import com.transflower.tflcomentor.ecm.service.ProjectService;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    private final ProjectService service;
    
    public ProjectController(ProjectService service) {
        this.service = service;
    }

    @GetMapping
    public List<Project> getAllProjects() {
        return service.getAllProjects();
    }

    @GetMapping("/{id}")
    public Project getProjectById(@PathVariable("id") long project_id) {
        return service.getProjectById(project_id);
    }

    @GetMapping("/{projectId}/students")
    public List<ProjectAllocationResponseDto> getStudentByProjectId(@PathVariable Long projectId) {
        return service.getStudentByProjectId(projectId);
    }

    @GetMapping("/allocations")
    public List<ProjectAllocationResponseDto> getProjectAllocationDetails() {
        return service.getProjectAllocationDetails();
    }

    @PostMapping("/add")
    public String addMember(@RequestBody ProjectAllocationRequestDto request) {

        ProjectAllocation allocation = new ProjectAllocation();
        allocation.setProjectId(request.getProjectId());
        allocation.setStudentId(request.getStudentId());
        boolean status = service.addMember(allocation);
        if (status) {
            return "Student added successfully";
        }
        return "Failed to add student";
    }

    @GetMapping("/student/{studentId}/projects")
    public List<Project> getProjectByStudentId(@PathVariable Long studentId) {
        return service.getProjectByStudentId(studentId);
    }

    @DeleteMapping("/remove")
    public String removeMember(@RequestParam Long projectId, @RequestParam Long studentId) {
        boolean status = service.removeMember(projectId, studentId);
        if (status) {
            return "Student released successfully";
        }
        return "Failed to release student";
    }

}
