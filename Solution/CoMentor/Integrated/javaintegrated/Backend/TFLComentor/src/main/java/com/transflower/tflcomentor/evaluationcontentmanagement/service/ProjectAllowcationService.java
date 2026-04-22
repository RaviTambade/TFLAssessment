package com.transflower.tflcomentor.evaluationcontentmanagement.service;

import java.util.List;

import com.transflower.tflcomentor.evaluationcontentmanagement.dto.response.ProjectAllocationResponseDTO;
import com.transflower.tflcomentor.evaluationcontentmanagement.entity.ProjectAllocation;

public interface ProjectAllowcationService {

    boolean addStudentToProject(ProjectAllocation projectAllocations);

    boolean removeStudentFromProject(Long projectId, Long studentId);

    List<ProjectAllocationResponseDTO> getStudentByProjectId(Long projectId);

    List<ProjectAllocationResponseDTO> getAllocatedProjects();
}
