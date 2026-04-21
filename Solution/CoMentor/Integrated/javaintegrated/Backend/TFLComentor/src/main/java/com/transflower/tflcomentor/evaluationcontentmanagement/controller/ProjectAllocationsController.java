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
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.transflower.tflcomentor.evaluationcontentmanagement.dto.request.ProjectAllocationRequestDTO;
import com.transflower.tflcomentor.evaluationcontentmanagement.dto.response.ProjectAllocationResponseDTO;
import com.transflower.tflcomentor.evaluationcontentmanagement.entity.ProjectAllocation;
import com.transflower.tflcomentor.evaluationcontentmanagement.service.ProjectAllowcationService;

@RestController
@RequestMapping("/api/project-allocations")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProjectAllocationsController {

    @Autowired
   private ProjectAllowcationService service;

    @GetMapping("/{projectId}/students")
    public List<ProjectAllocationResponseDTO> getStudentByProjectId(@PathVariable Long projectId) {
    return service.getStudentByProjectId(projectId);
    }

    @GetMapping
    public List<ProjectAllocationResponseDTO> getAllProjects() {
        return service.getAllocatedProjects();
    }

    @PostMapping("/add")
    public String addStudentToProject(@RequestBody ProjectAllocationRequestDTO request) {

        ProjectAllocation allocation = new ProjectAllocation();
        allocation.setProjectId(request.getProjectId());
        allocation.setStudentId(request.getStudentId());

        boolean status = service.addStudentToProject(allocation);

        if (status) {
            return "Student added successfully";
        }

        return "Failed to add student";
    }

    @DeleteMapping("/remove")
    public String removeStudentFromProject(
            @RequestParam Long projectId,
            @RequestParam Long studentId) {

        boolean status = service.removeStudentFromProject(projectId, studentId);

        if (status) {
            return "Student released successfully";
        }

        return "Failed to release student";
    }
}