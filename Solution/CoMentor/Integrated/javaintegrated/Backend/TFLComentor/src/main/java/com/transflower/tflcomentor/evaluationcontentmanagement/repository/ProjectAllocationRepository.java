package com.transflower.tflcomentor.evaluationcontentmanagement.repository;

import java.util.List;

import com.transflower.tflcomentor.evaluationcontentmanagement.dto.response.ProjectAllocationResponseDTO;
import com.transflower.tflcomentor.evaluationcontentmanagement.entity.ProjectAllocation;

public interface ProjectAllocationRepository {
    boolean addStudentToProject(ProjectAllocation projectAllocation);
    boolean removeStudentFromProject(Long projectId, Long studentId);
    List<ProjectAllocationResponseDTO> getStudentByProjectId(Long projectId);
    List<ProjectAllocationResponseDTO> getAllocatedProjects();

}
 