package com.transflower.tflcomentor.evaluationcontentmanagement.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.evaluationcontentmanagement.dto.ProjectAllocationResponseDTO;
import com.transflower.tflcomentor.evaluationcontentmanagement.entity.ProjectAllocations;
import com.transflower.tflcomentor.evaluationcontentmanagement.repository.ProjectAllocationsRepository;
import com.transflower.tflcomentor.evaluationcontentmanagement.service.ProjectAllocationsService;

@Service
public class ProjectAllocationsServiceImpl implements ProjectAllocationsService {

    @Autowired
    private ProjectAllocationsRepository repository;

    @Override
    public List<ProjectAllocationResponseDTO> getStudentByProjectId(Long projectId) {
        return repository.getStudentByProjectId(projectId);
    }

    @Override
    public List<ProjectAllocationResponseDTO> getAllProjects() {
        return repository.getAllProjects();
    }

    @Override
    public boolean addStudentToProject(ProjectAllocations projectAllocations) {
        return repository.addStudentToProject(projectAllocations);
    }

    @Override
    public boolean removeStudentFromProject(Long projectId, Long studentId) {
        return repository.removeStudentFromProject(projectId, studentId);
    }
}