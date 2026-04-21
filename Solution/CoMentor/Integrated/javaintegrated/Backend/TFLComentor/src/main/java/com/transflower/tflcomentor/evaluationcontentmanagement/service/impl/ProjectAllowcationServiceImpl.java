package com.transflower.tflcomentor.evaluationcontentmanagement.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.evaluationcontentmanagement.dto.response.ProjectAllocationResponseDTO;
import com.transflower.tflcomentor.evaluationcontentmanagement.entity.ProjectAllocations;
import com.transflower.tflcomentor.evaluationcontentmanagement.repository.ProjectAllowcationRepository;
import com.transflower.tflcomentor.evaluationcontentmanagement.service.ProjectAllowcationService;

@Service
public class ProjectAllowcationServiceImpl implements ProjectAllowcationService {

    private final ProjectAllowcationRepository repository;
    public ProjectAllowcationServiceImpl(ProjectAllowcationRepository repository) {
        this.repository = repository;
    }
    
    @Override
    public boolean addStudentToProject(ProjectAllocations projectAllocations) {
        return repository.addStudentToProject(projectAllocations);
    }

    @Override
    public boolean removeStudentFromProject(Long projectId, Long studentId) {
        return repository.removeStudentFromProject(projectId, studentId);
    }

      @Override
    public List<ProjectAllocationResponseDTO> getStudentByProjectId(Long projectId) {
        return repository.getStudentByProjectId(projectId);
    }

    @Override
    public List<ProjectAllocationResponseDTO> getAllocatedProjects() {
        return repository.getAllocatedProjects();
    }
}
