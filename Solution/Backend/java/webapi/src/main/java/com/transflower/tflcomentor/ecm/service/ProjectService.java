package com.transflower.tflcomentor.ecm.service;

import java.util.List;

import com.transflower.tflcomentor.ecm.dto.response.MentorshipActivityResponse;
import com.transflower.tflcomentor.ecm.dto.response.ProjectAllocationResponse;
import com.transflower.tflcomentor.ecm.dto.response.ProjectResponse;
import com.transflower.tflcomentor.ecm.entity.Project;
import com.transflower.tflcomentor.ecm.entity.ProjectAllocation;


public interface ProjectService {

    List<Project> getAllProjects(Long mentorId);
    Project getProjectById(long project_id);
    boolean allocateMembersToProject(ProjectAllocation projectAllocation);
    boolean removeMember(Long projectId, Long studentId);
    List<ProjectAllocationResponse > getStudentByProjectId(Long projectId);
    List<ProjectAllocationResponse > getProjectAllocationDetails();
    List<Project> getProjectByStudentId(Long studentId);
    List<ProjectAllocationResponse > getProjectMember(Long projectId);
    List<MentorshipActivityResponse> getRecentActivities(Long mentorId);
    boolean addProject(ProjectResponse project,Long mentorId);
}
