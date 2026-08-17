package com.transflower.tflcomentor.ecm.service;

import java.util.List;
import java.util.concurrent.CompletableFuture;

import com.transflower.tflcomentor.ecm.dto.response.MentorshipActivityResponse;
import com.transflower.tflcomentor.ecm.dto.response.ProjectAllocationResponse;
import com.transflower.tflcomentor.ecm.dto.response.ProjectResponse;
import com.transflower.tflcomentor.ecm.entity.Project;
import com.transflower.tflcomentor.ecm.entity.ProjectAllocation;


public interface ProjectService {

    CompletableFuture<List<Project>> getAllProjects(Long mentorId);
    CompletableFuture<Project> getProjectById(long project_id);
    CompletableFuture<Boolean> allocateMembersToProject(ProjectAllocation projectAllocation);
    CompletableFuture<Boolean> removeMember(Long projectId, Long studentId);
    CompletableFuture<List<ProjectAllocationResponse>> getStudentByProjectId(Long projectId);
    CompletableFuture<List<ProjectAllocationResponse>> getProjectAllocationDetails();
    CompletableFuture<List<Project>> getProjectByStudentId(Long studentId);
    CompletableFuture<List<ProjectAllocationResponse>> getProjectMember(Long projectId);
    CompletableFuture<List<MentorshipActivityResponse>> getRecentActivities(Long mentorId);
    CompletableFuture<Boolean> addProject(ProjectResponse project,Long mentorId);
}
