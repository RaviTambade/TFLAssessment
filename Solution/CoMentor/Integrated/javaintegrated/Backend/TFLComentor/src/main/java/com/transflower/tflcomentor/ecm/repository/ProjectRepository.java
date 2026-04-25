package com.transflower.tflcomentor.ecm.repository;

import java.util.List;

import com.transflower.tflcomentor.ecm.dto.response.ProjectAllocationResponseDTO;
import com.transflower.tflcomentor.ecm.entity.Project;
import com.transflower.tflcomentor.ecm.entity.ProjectAllocation;

public interface ProjectRepository {

     List<Project> getAllProjects();
    Project getProjectById(long project_id);

    boolean addMember(ProjectAllocation projectAllocation);

    boolean removeMember(Long projectId, Long studentId);

    List<ProjectAllocationResponseDTO> getStudentByProjectId(Long projectId);

    List<ProjectAllocationResponseDTO> getProjectAllocationDetails();
    List<Project> getProjectByStudentId(Long studentId);
    List<ProjectAllocationResponseDTO> getProjectMember(Long projectId);
}
