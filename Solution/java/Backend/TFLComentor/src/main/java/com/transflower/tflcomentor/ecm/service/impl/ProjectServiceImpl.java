package com.transflower.tflcomentor.ecm.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.ecm.dto.ProjectAllocationResponseDto;
import com.transflower.tflcomentor.ecm.entity.Project;
import com.transflower.tflcomentor.ecm.entity.ProjectAllocation;
import com.transflower.tflcomentor.ecm.repository.ProjectRepository;
import com.transflower.tflcomentor.ecm.service.ProjectService;

@Service
public class ProjectServiceImpl implements ProjectService {

    private final ProjectRepository repository;

    public ProjectServiceImpl(ProjectRepository repository) {
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

    @Override
    public boolean removeMember(Long projectId, Long studentId) {
        return repository.removeMember(projectId, studentId);
    }

    @Override
    public List<ProjectAllocationResponseDto> getStudentByProjectId(Long projectId) {
        return repository.getStudentByProjectId(projectId);
    }

    @Override
    public List<ProjectAllocationResponseDto> getProjectAllocationDetails() {
        return repository.getProjectAllocationDetails();
    }

    @Override

    public List<Project> getProjectByStudentId(Long studentId) {
        return repository.getProjectByStudentId(studentId);
    }

    @Override
    public boolean addMember(ProjectAllocation projectAllocations) {
        return repository.addMember(projectAllocations);
    }

    @Override
    public List<ProjectAllocationResponseDto> getProjectMember(Long projectId) {
        return repository.getProjectMember(projectId);
    }
}
