package com.transflower.tflcomentor.evaluationcontentmanagement.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.evaluationcontentmanagement.entity.Project;
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
    public List<Project> getAllProjects() {
        return repository.getAllProjects();
    }

    @Override
    public Project getProjectById(long project_id) {
        return repository.getProjectById(project_id);
    }
    
     public ProjectAllocationServiceImpl(ProjectAllocationRepository repository) {
        this.repository = repository;
    }
    
    @Override
    public boolean addMember(ProjectAllocation projectAllocations) {
        return repository.addMember(projectAllocations);
    }

    @Override
    public boolean removeMember(Long projectId, Long studentId) {
        return repository.removeMember(projectId, studentId);
    }

    @Override
    public List<ProjectAllocationResponseDTO> getStudentByProjectId(Long projectId) {
        return repository.getStudentByProjectId(projectId);
    }

    @Override
    public List<ProjectAllocationResponseDTO> getProjectAllocationDetails() {
        return repository.getProjectAllocationDetails();
    }

    @Override

    public List<String> getProjectByStudentId(Long studentId) {
        return repository.getProjectByStudentId(studentId);
    }
}

