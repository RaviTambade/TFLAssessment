package com.transflower.tflcomentor.ecm.service;

import java.util.List;

import com.transflower.tflcomentor.ecm.dto.response.MentorshipActivityResponse;
import com.transflower.tflcomentor.ecm.dto.response.ProjectAllocationResponse;
import com.transflower.tflcomentor.ecm.entity.Project;
import com.transflower.tflcomentor.ecm.entity.ProjectAllocation;


public interface ProjectService {

    List<Project> getAllProjects();
    Project getProjectById(long project_id);
    boolean addMember(ProjectAllocation projectAllocations);
    boolean removeMember(Long projectId, Long studentId);
    List<ProjectAllocationResponse > getStudentByProjectId(Long projectId);
    List<ProjectAllocationResponse > getProjectAllocationDetails();
    List<Project> getProjectByStudentId(Long studentId);
    List<ProjectAllocationResponse > getProjectMember(Long projectId);
    List<MentorshipActivityResponse> getRecentActivities(Long mentorId);
}
