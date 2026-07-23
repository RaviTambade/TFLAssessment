package com.transflower.tflcomentor.ecm.service.impl;

import java.util.List;

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
    public List<Project> getAllProjects(Long mentorId) {
        return repository.getAllProjects(mentorId);
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
    public List<ProjectAllocationResponse> getStudentByProjectId(Long projectId) {
        return repository.getStudentByProjectId(projectId);
    }

    @Override
    public List<ProjectAllocationResponse> getProjectAllocationDetails() {
        return repository.getProjectAllocationDetails();
    }

    @Override
    public List<Project> getProjectByStudentId(Long studentId) {
        return repository.getProjectByStudentId(studentId);
    }

    @Override
    public boolean allocateMembersToProject(ProjectAllocation projectAllocation) {
        return repository.allocateMembersToProject(projectAllocation);
        
    }

    @Override
    public List<ProjectAllocationResponse> getProjectMember(Long projectId) {
        return repository.getProjectMember(projectId);
    }

    @Override
    public List<MentorshipActivityResponse> getRecentActivities(Long mentorId) {
        return repository.getRecentActivities(mentorId);
    }

    @Override
    public boolean addProject(ProjectResponse project,Long mentorId){
        return repository.addProject(project, mentorId);
    }
}
