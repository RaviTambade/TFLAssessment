package com.transflower.tflcomentor.evaluationcontentmanagement.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.evaluationcontentmanagement.dto.response.ProjectAllocationResponseDTO;
import com.transflower.tflcomentor.evaluationcontentmanagement.entity.ProjectAllocation;
import com.transflower.tflcomentor.evaluationcontentmanagement.repository.ProjectAllocationRepository;
import com.transflower.tflcomentor.evaluationcontentmanagement.service.ProjectAllocationService;

@Service
public class ProjectAllocationServiceImpl implements ProjectAllocationService {

    private final ProjectAllocationRepository repository;
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
