package com.transflower.tflcomentor.ecm.repository;

import java.util.List;

import com.transflower.tflcomentor.ecm.dto.ProjectAllocationResponseDto;
import com.transflower.tflcomentor.ecm.entity.Project;
import com.transflower.tflcomentor.ecm.entity.ProjectAllocation;

public interface ProjectRepository {

     List<Project> getAllProjects();
    Project getProjectById(long project_id);

    boolean addMember(ProjectAllocation projectAllocation);

    boolean removeMember(Long projectId, Long studentId);

    List<ProjectAllocationResponseDto> getStudentByProjectId(Long projectId);

    List<ProjectAllocationResponseDto> getProjectAllocationDetails();
    List<Project> getProjectByStudentId(Long studentId);
    List<ProjectAllocationResponseDto> getProjectMember(Long projectId);
}
