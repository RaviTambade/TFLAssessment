package com.transflower.tflcomentor.ecm.service.impl;

import java.util.List;
import java.util.concurrent.CompletableFuture;

import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.ecm.dto.response.MentorshipActivityResponse;
import com.transflower.tflcomentor.ecm.dto.response.ProjectAllocationResponse;
import com.transflower.tflcomentor.ecm.dto.response.ProjectResponse;
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
    public CompletableFuture<List<Project>> getAllProjects(Long mentorId) {
        return repository.getAllProjects(mentorId);
    }

    @Override
    public CompletableFuture<Project> getProjectById(long project_id) {
        return repository.getProjectById(project_id);
    }

    @Override
    public CompletableFuture<Boolean> removeMember(Long projectId, Long studentId) {
        return repository.removeMember(projectId, studentId);
    }

    @Override
    public CompletableFuture<List<ProjectAllocationResponse>> getStudentByProjectId(Long projectId) {
        return repository.getStudentByProjectId(projectId);
    }

    @Override
    public CompletableFuture<List<ProjectAllocationResponse>> getProjectAllocationDetails() {
        return repository.getProjectAllocationDetails();
    }

    @Override
    public CompletableFuture<List<Project>> getProjectByStudentId(Long studentId) {
        return repository.getProjectByStudentId(studentId);
    }

    @Override
    public CompletableFuture<Boolean> allocateMembersToProject(ProjectAllocation projectAllocation) {
        return repository.allocateMembersToProject(projectAllocation);
        
    }

    @Override
    public CompletableFuture<List<ProjectAllocationResponse>> getProjectMember(Long projectId) {
        return repository.getProjectMember(projectId);
    }

    @Override
    public CompletableFuture<List<MentorshipActivityResponse>> getRecentActivities(Long mentorId) {
        return repository.getRecentActivities(mentorId);
    }

    @Override
    public CompletableFuture<Boolean> addProject(ProjectResponse project,Long mentorId){
        return repository.addProject(project, mentorId);
    }
}
