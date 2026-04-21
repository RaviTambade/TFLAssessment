package com.transflower.tflcomentor.evaluationcontentmanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflcomentor.evaluationcontentmanagement.dto.ProjectAllocationRequestDTO;
import com.transflower.tflcomentor.evaluationcontentmanagement.dto.ProjectAllocationResponseDTO;
import com.transflower.tflcomentor.evaluationcontentmanagement.entity.ProjectAllocations;
import com.transflower.tflcomentor.evaluationcontentmanagement.service.ProjectAllocationsService;

@RestController
@RequestMapping("/api/project-allocations")
@CrossOrigin(origins = "http://localhost:8081")
public class ProjectAllocationsController {

    @Autowired
    private ProjectAllocationsService srv;

    @GetMapping
    public List<ProjectAllocationResponseDTO> getStudentByProjectId(@RequestParam Long projectId) {
        return srv.getStudentByProjectId(projectId);
    }

    @GetMapping("/all")
    public List<ProjectAllocationResponseDTO> getAllProjects() {
        return srv.getAllProjects();
    }

    @PostMapping("/add")
    public String addStudentToProject(@RequestBody ProjectAllocationRequestDTO request) {

        ProjectAllocations allocation = new ProjectAllocations();
        allocation.setProjectId(request.getProjectId());
        allocation.setStudentId(request.getStudentId());

        boolean status = srv.addStudentToProject(allocation);

        if (status) {
            return "Student added successfully";
        }

        return "Failed to add student";
    }

    @DeleteMapping("/remove")
    public String removeStudentFromProject(
            @RequestParam Long projectId,
            @RequestParam Long studentId) {

        boolean status = srv.removeStudentFromProject(projectId, studentId);

        if (status) {
            return "Student released successfully";
        }

        return "Failed to release student";
    }
}